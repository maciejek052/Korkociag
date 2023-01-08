import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Slider from '@react-native-community/slider'
import Ionicons from '@expo/vector-icons/Ionicons'
import { API, graphqlOperation } from 'aws-amplify'
import { GOOGLE_API_KEY } from '../../../api_keys'
import BasicInput from '../../components/BasicInput'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import Toast from 'react-native-root-toast'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'

const EditLessonScreen = ({ route, navigation }) => {

    const { lessonObj } = route.params
    const [isPlaceTeacherChecked, setPlaceTeacherChecked] = useState(true)
    const [isPlaceStudentChecked, setPlaceStudentChecked] = useState(false)
    const [getCity, setCity] = useState('')
    const [getCityTextBox, setCityTextBox] = useState('')
    const [distanceValue, setDistanceValue] = useState(5)
    const [locText, setLocText] = useState("")
    const [daysState, setDaysState] = useState([false, false, false, false, false, false, false])
    const [timeState, setTimeState] = useState([false, false, false, false, false, false])
    const [price, setPrice] = useState('')
    const txtRef = useRef(null)
    const daysOfWeek = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela']
    const times = ['6:00 - 9:00', '9:00 - 12:00', '12:00 - 15:00', '15:00 - 18:00', '18:00 - 21:00', '21:00 - 24:00']

    const daysToBool = () => {
        var ar = [false, false, false, false, false, false, false]
        for (var i = 0; i < 7; i++) {
            if (lessonObj.days.includes(daysOfWeek[i])) ar[i] = true
        }
        setDaysState(ar)
    }
    const timeToBool = () => {
        var ar = [false, false, false, false, false, false]
        for (var i = 0; i < 6; i++) {
            if (lessonObj.hours.includes(times[i])) ar[i] = true
        }
        setTimeState(ar)
    }
    const daysArray = () => {
        let ar = []
        for (var i = 0; i < daysOfWeek.length; i++) {
            if (daysState[i]) ar.push(daysOfWeek[i])
        }
        return ar
    }
    const hoursArray = () => {
        let ar = []
        for (var i = 0; i < times.length; i++) {
            if (timeState[i]) ar.push(times[i])
        }
        return ar
    }

    const selectDay = (index) => {
        setDaysState(prevState => prevState.map((item, idx) => idx === index ? !item : item))
    }

    const selectTime = (index) => {
        setTimeState(prevState => prevState.map((item, idx) => idx === index ? !item : item))
    }
    useEffect(() => {
        setLocText(lessonObj.address)
        setCityTextBox(lessonObj.city)
        if (lessonObj.price) {
            setPrice(lessonObj.price.toString())
        }
        if (lessonObj.locationRadius) {
            setDistanceValue(lessonObj.locationRadius)
        }
        if (lessonObj.place === 'student') {
            setPlaceStudentChecked(true)
            setPlaceTeacherChecked(false)
        }
        daysToBool()
        timeToBool()
    }, [])
    const changePlace = (which) => {
        if (which === 0) {
            setPlaceTeacherChecked(true)
            setPlaceStudentChecked(false)
        } else {
            setPlaceTeacherChecked(false)
            setPlaceStudentChecked(true)
        }
    }

    const handleForm = () => {
        let test = []
        let error = ""
        if (daysState.some(e => e === true) && timeState.some(e => e === true)) {
            test[0] = true
        } else {
            error += "Podano błędne dni lub godziny\n"
            test[0] = false
        }
        if (price && price.trim() != '') {
            test[1] = true
        } else {
            error += "Podano błędną cenę\n"
            test[1] = false
        }
        if (getCityTextBox && locText) {
            test[2] = true
        } else {
            error += "Podano niepoprawny adres\n"
            test[2] = false
        }
        if (test[0] && test[1] && test[2]) {
            Alert.alert(
                "Edytowanie lekcji",
                "Czy na pewno chcesz edytować tę lekcję?",
                [
                    {
                        text: "Anuluj",
                        onPress: () => null,
                        style: "cancel"
                    },
                    { text: "OK", onPress: editLessonQuery }
                ]
            );
        } else {
            //Alert.alert("Błąd", error)
            let toast = Toast.show(error.slice(0, -1), {
                duration: Toast.durations.LONG,
            });
        }
    }
    const editLessonQuery = async () => {
        try {
            const newLesson = {
                id: lessonObj.id,
                city: getCityTextBox,
                address: locText,
                place: isPlaceTeacherChecked ? 'teacher' : 'student',
                hours: hoursArray(),
                days: daysArray(),
                price: price,
                locationRadius: isPlaceStudentChecked ? distanceValue : null
            }
            const editLesson = await API.graphql({ query: mutations.updateLessonOffer, variables: { input: newLesson } })
            Alert.alert("Sukces", "Udało się edytować ofertę")
            navigation.popToTop()
        } catch (e) {
            Alert.alert("Błąd podczas edycji oferty", e.message)
            console.log(e)
        }
    }

    return (
        <View>
            <View
                style={styles.topButtons}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close-outline" style={{ fontSize: 35 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edytuj lekcję</Text>
                <TouchableOpacity
                    onPress={() => handleForm()}>
                    <Ionicons name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.text}>Adres nauczyciela:</Text>
                <GooglePlacesAutocomplete
                    placeholder='Wyszukaj lokalizację' style={styles.autocomplete} fetchDetails ref={txtRef}
                    textInputProps={{
                        value: locText,
                        onChangeText: (text) => { setLocText(text) }
                    }}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        const v = data.terms.length - 2
                        setCityTextBox(data.terms[v].value)
                        setCity(data.terms[v].value)
                        setLocText(txtRef.current?.getAddressText())
                    }}
                    styles={styles.autocompbox}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'pl',
                        components: 'country:pl'
                    }} />
                <View style={styles.input}>
                    <BasicInput placeholder={"Miasto"} value={getCityTextBox} setValue={setCity} />
                </View>
            </View>
            <View style={styles.centerBox}>
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
            </View>
            <Text style={[styles.text, { paddingTop: 10 }]}>Dni korepetycji:</Text>
            <View>
                <View style={styles.daysBox}>
                    <CustomCircleCheckbox text="poniedziałek" onPress={() => selectDay(0)} bgColor={daysState[0] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="wtorek" onPress={() => selectDay(1)} bgColor={daysState[1] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="środa" onPress={() => selectDay(2)} bgColor={daysState[2] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="czwartek" onPress={() => selectDay(3)} bgColor={daysState[3] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="piątek" onPress={() => selectDay(4)} bgColor={daysState[4] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="sobota" onPress={() => selectDay(5)} bgColor={daysState[5] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="niedziela" onPress={() => selectDay(6)} bgColor={daysState[6] ? "#97fb7e" : "#fff"} />
                </View>
                <Text style={styles.text}>Godziny korepetycji</Text>
                <View style={styles.daysBox}>
                    <CustomCircleCheckbox text="6:00 - 9:00 🌅" onPress={() => selectTime(0)} bgColor={timeState[0] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="9:00 - 12:00 ☕" onPress={() => selectTime(1)} bgColor={timeState[1] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="12:00 - 15:00 ☀️" onPress={() => selectTime(2)} bgColor={timeState[2] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="15:00 - 18:00 🏠" onPress={() => selectTime(3)} bgColor={timeState[3] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="18:00 - 21:00 🌇" onPress={() => selectTime(4)} bgColor={timeState[4] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="21:00 - 24:00 🌙" onPress={() => selectTime(5)} bgColor={timeState[5] ? "#97fb7e" : "#fff"} />
                </View>
            </View>
            <Text style={styles.text}>Cena za lekcję</Text>
            <View style={styles.input}>
                <BasicInput keyboardType={'numeric'} value={price} setValue={setPrice} />
            </View>
        </View >
    )
}

export default EditLessonScreen

const styles = StyleSheet.create({
    centerBox: {
        alignItems: 'center'
    },
    slider: {
        width: 200,
    },
    topButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 20
    },
    text: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    autocompbox: {
        container: { flex: 0, width: '100%', paddingHorizontal: 10 }
    },
    input: {
        paddingHorizontal: 10
    },
    daysBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

        //backgroundColor: 'gray',

    }
})