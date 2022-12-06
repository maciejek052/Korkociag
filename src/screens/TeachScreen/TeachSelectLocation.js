// https://mdmoin07.medium.com/react-native-maps-with-autocomplete-e9c71e493974
// consider implementing autocomplete

import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import MapView from 'react-native-maps'
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-root-toast'
import MapImage from '../../../assets/images/undraw_map_dark_re_36sy.svg'
import CustomButton from '../../components/CustomButton'
import Slider from '@react-native-community/slider'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import BasicInput from '../../components/BasicInput'

const TeachSelectLocalization = ({ route, navigation }) => {
    const { height } = useWindowDimensions()
    const [isPlaceTeacherChecked, setPlaceTeacherChecked] = useState(true)
    const [isPlaceStudentChecked, setPlaceStudentChecked] = useState(false)
    const [getCity, setCity] = useState('')
    const [getAddress, setAddress] = useState('')
    const [distanceValue, setDistanceValue] = useState(5)
    const { level, subject } = route.params

    const goNextScreen = (localization, radius, placeStudent, placeTeacher) => {
        // validate if user selected at least one option
        if (isPlaceTeacherChecked || isPlaceStudentChecked) {
            navigation.navigate('TeachSelectSchedule', {
                level: level, subject: subject, city: getCity, radius: distanceValue, address: getAddress,
                placeStudent: isPlaceStudentChecked ? 1 : 0, placeTeacher: isPlaceTeacherChecked ? 1 : 0
            })
        }
        else {
            let toast = Toast.show('Wybierz przynajmniej jedną opcję gdzie mają być korepetycje', {
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
                <BasicInput placeholder="Miasto" setValue={setCity} />
                <BasicInput placeholder="Ulica" setValue={setAddress} />
                <MapView style={[styles.map, { height: height * 0.25 }]} provider='google' />
                <View style={{ flexDirection: 'row' }}>
                    {isPlaceStudentChecked && (
                        <><Slider style={styles.slider} minimumValue={0} minimumTrackTintColor='#3b71f3' thumbTintColor='#3b71f3'
                            maximumValue={25} step={1} value={distanceValue} onValueChange={setDistanceValue} />
                            <Text style={{ marginVertical: 5 }}>Promień: {distanceValue} km</Text>
                        </>)}
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <CustomCircleCheckbox text="U korepetytora" onPress={() => { setPlaceTeacherChecked(!isPlaceTeacherChecked) }}
                        fgColor={isPlaceTeacherChecked ? "#fff" : "#000"} bgColor={isPlaceTeacherChecked ? "#3b71f3" : "#fff"} />
                    <CustomCircleCheckbox text="U ucznia" onPress={() => { setPlaceStudentChecked(!isPlaceStudentChecked) }}
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
    slider:
    {
        width: 200,
    }
})
export default TeachSelectLocalization