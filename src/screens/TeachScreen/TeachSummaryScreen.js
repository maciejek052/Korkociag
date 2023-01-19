import { View, Text, useWindowDimensions, StyleSheet, Keyboard, Alert, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { API, graphqlOperation } from 'aws-amplify';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Toast from 'react-native-root-toast'
import { createLessonOffer, createLessonTeacher } from '../../graphql/mutations';
import CustomButton from '../../components/CustomButton';
import BasicInput from '../../components/BasicInput';
import SearchImage from '../../../assets/images/undraw_people_search_re_5rre.svg'
import BlackboardImage from '../../../assets/images/undraw_teaching_f-1-cm.svg'
import TimeImage from '../../../assets/images/undraw_time_management_re_tk5w.svg'


const TeachSummaryScreen = ({ route, navigation }) => {

    const { user, loading } = useSelector((state) => state.userInformation)

    const [price, setPrice] = useState('')

    const daysOfWeek = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela']
    const timeIntervals = ['6:00 - 9:00 🌅', '9:00 - 12:00 ☕', '12:00 - 15:00 ☀️', '15:00 - 18:00 🏠', '18:00 - 21:00 🌇', '21:00 - 24:00 🌙']
    const timeIntervals2 = ['6:00 - 9:00', '9:00 - 12:00', '12:00 - 15:00', '15:00 - 18:00', '18:00 - 21:00', '21:00 - 24:00']
    const { level, subject, city, address, radius, placeStudent, placeTeacher, days, time } = route.params

    const placeArray = () => {
        let ar = []
        if (placeStudent) ar.push('student')
        if (placeTeacher) ar.push('teacher')
        return ar
    }
    const daysArray = () => {
        let ar = []
        for (var i = 0; i < daysOfWeek.length; i++) {
            if (days[i]) ar.push(daysOfWeek[i])
        }
        return ar
    }
    const hoursArray = () => {
        let ar = []
        for (var i = 0; i < timeIntervals2.length; i++) {
            if (time[i]) ar.push(timeIntervals2[i])
        }
        return ar
    }
    const uuid = uuidv4();

    const offer = {
        id: uuid,
        city: city,
        address: address,
        locationRadius: placeStudent ? radius : null,
        place: placeStudent ? 'student' : 'teacher',
        days: daysArray(),
        hours: hoursArray(),
        price: price,
        lessonOfferSubjectId: subject.id,
        ownerCognitoID: user.attributes.sub,
        lessonOfferLessonStudentId: uuid,
        lessonOfferLessonTeacherId: uuid
    }
    console.log(offer)
    const { height } = useWindowDimensions();

    const confirmOffer = async () => {
        if (price.trim() != '') {

            try {
                const newOffer = await API.graphql(
                    graphqlOperation(createLessonOffer, { input: offer })
                )
                // linking record
                const link = await API.graphql(
                    graphqlOperation(createLessonTeacher, {
                        input: {
                            id: uuid,
                            lessonTeacherUserInfoId: user.attributes.sub
                        }
                    })
                )
                navigation.navigate('TeachOfferConfirmation')
            } catch (e) {
                console.log(e)
                Alert.alert("Błąd przy tworzeniu oferty", e.message)
            }

        }
        else {
            Alert.alert("Błąd", "Podaj poprawną cenę")
        }
    }

    const parseDays = () => {
        var daysString = ""
        for (var i = 0; i < days.length; i++) {
            if (days[i]) {
                daysString += daysOfWeek[i] + ", "
            }
        }
        return daysString.slice(0, -2)
    }
    const parseTime = () => {
        var timeIntervalsString = ""
        for (var i = 0; i < time.length; i++) {
            if (time[i]) {
                timeIntervalsString += timeIntervals[i] + ", "
            }
        }
        return timeIntervalsString.slice(0, -2)
    }
    const parseLoc = () => {
        var locStr = ""
        if (placeStudent) locStr += "u ucznia, "
        if (placeTeacher) locStr += "u nauczyciela, "
        return locStr.slice(0, -2)
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.root}>
                <SearchImage style={[styles.logo, { maxHeight: height * 0.15 }]} />
                <Text style={styles.heading}>Potwierdź dodawanie oferty</Text>
                <Text style={styles.text2}>Podaj cenę za jedną lekcję</Text>
                <BasicInput keyboardType={'numeric'} value={price} setValue={setPrice} placeholder={'Cena w zł'} />
                <Text style={styles.text}>Upewnij się, czy poprawnie wprowadziłeś szczegóły udzielanych korepetycji</Text>
                <>
                    <BlackboardImage style={{ maxHeight: height * 0.08 }} />
                    <Text style={styles.caption}>Poziom: <Text style={styles.value}>{level}</Text></Text>
                    <Text style={styles.caption}>Przedmiot: <Text style={styles.value}>{subject.name}</Text></Text>
                    <Text style={styles.caption}>Miasto: <Text style={styles.value}>{city}</Text></Text>
                    <Text style={styles.caption}>Adres: <Text style={styles.value}>{address}</Text></Text>
                    <Text style={styles.caption}>Miejsce: <Text style={styles.value}>{parseLoc()}</Text></Text>
                    <TimeImage style={{ maxHeight: height * 0.08 }} />
                    <Text style={styles.caption}>Dni: <Text style={styles.value}>{parseDays()}</Text></Text>
                    <Text style={styles.caption}>Godziny: <Text style={styles.value}>{parseTime()}</Text></Text>
                    <Text></Text>
                </>
                <CustomButton text="Utwórz ofertę" onPress={confirmOffer} />
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column'
    },
    logo: {
        width: '100%',
        maxWidth: 350,
        //maxHeight: 175,
        marginVertical: 0
    },
    heading: {
        fontSize: 32,
        textAlign: "center",
        color: "#ffb600",
        fontWeight: "bold"
    },
    text: {
        textAlign: 'center',
        margin: 16,
        fontSize: 16,
    },
    caption: {
        fontWeight: 'bold'
    },
    value: {
        fontWeight: 'normal'
    },
    text2: {
        paddingVertical: 10,
    }
})
export default TeachSummaryScreen