import { View, Text, StyleSheet, useWindowDimensions, TextInput } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import MapView, { Marker, Circle } from 'react-native-maps'
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-root-toast'
import MapImage from '../../../assets/images/undraw_map_dark_re_36sy.svg'
import CustomButton from '../../components/CustomButton'
import Slider from '@react-native-community/slider'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import BasicInput from '../../components/BasicInput'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_API_KEY } from '../../../api_keys'

const TeachSelectLocalization = ({ route, navigation }) => {
    const { height } = useWindowDimensions()
    const [isPlaceTeacherChecked, setPlaceTeacherChecked] = useState(true)
    const [isPlaceStudentChecked, setPlaceStudentChecked] = useState(false)
    const [getCity, setCity] = useState('')
    const [getCityTextBox, setCityTextBox] = useState('')
    const [getAddress, setAddress] = useState('')
    const [distanceValue, setDistanceValue] = useState(5)
    const [distanceValue2, setDistanceValue2] = useState(0)
    const { level, subject } = route.params

    const mapRef = useRef(null)
    const txtRef = useRef(null)
    const [getLat, setLat] = useState(0)
    const [getLng, setLng] = useState(0)

    const INITIAL_POSITION = {
        latitude: 53.143291,
        longitude: 23.164089,
        latitudeDelta: 0.02,
        longitudeDelta: 10 * 0.02
    }
    const moveTo = async (lat, lng) => {
        const camera = await mapRef.current?.getCamera()
        if (camera) {
            camera.center = { latitude: lat, longitude: lng }
            mapRef.current?.animateCamera(camera, { duration: 1000 })

        }
    }

    useEffect(() => {
        const zoomCamera = async () => {
            const camera = await mapRef.current?.getCamera()
            if (camera) {
                distanceValue > distanceValue2 ? camera.zoom -= 0.125 : camera.zoom += 0.125
                mapRef.current?.animateCamera(camera, { duration: 100 })
            }
        }
        zoomCamera()
        setDistanceValue2(distanceValue)
    }, [distanceValue])

    const onPlaceSelected = (details) => {
        const position = {
            lat: details?.geometry.location.lat || 0,
            lng: details?.geometry.location.lng || 0
        }
        setLat(position.lat)
        setLng(position.lng)
        moveTo(position.lat, position.lng)
    }

    const changePlace = (which) => {
        if (which === 0) {
            setPlaceTeacherChecked(true)
            setPlaceStudentChecked(false)
        } else {
            setPlaceTeacherChecked(false)
            setPlaceStudentChecked(true)
        }
    }

    const goNextScreen = (localization, radius, placeStudent, placeTeacher) => {
        // validate if user selected at least one option
        if (txtRef.current?.getAddressText()) {
            navigation.navigate('TeachSelectSchedule', {
                level: level, subject: subject, city: getCity, radius: distanceValue, address: txtRef.current?.getAddressText(),
                placeStudent: isPlaceStudentChecked ? 1 : 0, placeTeacher: isPlaceTeacherChecked ? 1 : 0
            })
        }
        else {
            let toast = Toast.show('Wybierz lokalizacje korepetycji', {
                duration: Toast.durations.LONG,
            });
        };
    }

    return (
        <RootSiblingParent>
            <View style={styles.root}>
                <MapImage style={[styles.logo, { maxHeight: height * 0.1 }]} />
                <Text style={styles.heading}>Wybierz lokalizację korepetycji</Text>
                <Text style={styles.text}>Wybierz na mapie w jakim miejscu chcesz nauczać następnie wybierz zakres odległości</Text>
                <GooglePlacesAutocomplete
                    placeholder='Wyszukaj lokalizację' style={styles.autocomplete} fetchDetails ref={txtRef}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true

                        onPlaceSelected(details)
                        const v = data.terms.length - 2
                        setCityTextBox(data.terms[v].value)
                        setCity(data.terms[v].value)
                    }}
                    styles={styles.autocompbox}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'pl',
                        components: 'country:pl'
                    }} />

                <BasicInput placeholder={"Miasto"} value={getCityTextBox} setValue={setCity} />
                <MapView style={[styles.map, { height: height * 0.25 }]}
                    provider='google' initialRegion={INITIAL_POSITION} ref={mapRef}>
                    <Marker coordinate={{
                        latitude: getLat, longitude: getLng
                    }} />

                    {isPlaceStudentChecked &&
                        <Circle center={{ latitude: getLat, longitude: getLng }}
                            radius={distanceValue * 1000} strokeWidth={2} strokeColor={'#1f29d1'} fillColor={"rgba(59,133,243,0.25)"}
                        />
                    }

                </MapView>
                <View style={{ flexDirection: 'row' }}>
                    {isPlaceStudentChecked && (
                        <><Slider style={styles.slider} minimumValue={0} minimumTrackTintColor='#3b71f3' thumbTintColor='#3b71f3'
                            maximumValue={25} step={1} value={distanceValue} onValueChange={setDistanceValue} />
                            <Text style={{ marginVertical: 5 }}>Promień: {distanceValue} km</Text>
                        </>)}
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <CustomCircleCheckbox text="U korepetytora" onPress={() => { changePlace(0) }}
                        fgColor={isPlaceTeacherChecked ? "#fff" : "#000"} bgColor={isPlaceTeacherChecked ? "#3b71f3" : "#fff"} />
                    <CustomCircleCheckbox text="U ucznia" onPress={() => { changePlace(1) }}
                        fgColor={isPlaceStudentChecked ? "#fff" : "#000"} bgColor={isPlaceStudentChecked ? "#3b71f3" : "#fff"} />

                </View>
                <CustomButton text="Dalej" onPress={goNextScreen}></CustomButton>
            </View>
        </RootSiblingParent>
    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 200,
        maxHeight: 150,
        marginVertical: 15
    },
    heading: {
        fontSize: 40,
        textAlign: "center",
        color: "#7f9f00",
        fontWeight: '500'
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    },
    map: {
        //width: Dimensions.get('window').width,
        width: '100%',
        //height: '100%'
    },
    slider: {
        width: 200,
    },
    autocompbox: {
        container: { flex: 0, width: '100%', paddingTop: 10 }
    }
})
export default TeachSelectLocalization