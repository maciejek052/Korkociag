import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import TimeImage from '../../../assets/images/undraw_time_management_re_tk5w.svg'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox';
import CustomButton from '../../components/CustomButton';

const SearchSelectSchedule = ({ route, navigation }) => {
    const { level, subject, localization, radius, placeStudent, placeTeacher } = route.params
    const { height } = useWindowDimensions()
    // i know its really bad but i am in hurry xD
    // TODO: replace this with array of booleans 
    const [monday, setMonday] = useState(true)
    const [tuesday, setTuesday] = useState(false)
    const [wednesday, setWednesday] = useState(false)
    const [thursday, setThursday] = useState(false)
    const [friday, setFriday] = useState(false)
    const [saturday, setSatudrday] = useState(false)
    const [sunday, setSunday] = useState(false)
    const [time6to9, setTime6to9] = useState(false)
    const [time9to12, setTime9to12] = useState(false)
    const [time12to15, setTime12to15] = useState(true)
    const [time15to18, setTime15to18] = useState(false)
    const [time18to21, setTime18to21] = useState(false)
    const [time21to24, setTime21to24] = useState(false)
    const selectDay = (dayOfWeek) => {
        if (dayOfWeek == 1) setMonday(!monday)
        else if (dayOfWeek == 2) setTuesday(!tuesday)
        else if (dayOfWeek == 3) setWednesday(!wednesday)
        else if (dayOfWeek == 4) setThursday(!thursday)
        else if (dayOfWeek == 5) setFriday(!friday)
        else if (dayOfWeek == 6) setSatudrday(!saturday)
        else if (dayOfWeek == 7) setSunday(!sunday)
    }
    const selectTime = (time) => {
        if (time == 1) setTime6to9(!time6to9)
        else if (time == 2) setTime9to12(!time9to12)
        else if (time == 3) setTime12to15(!time12to15)
        else if (time == 4) setTime15to18(!time15to18)
        else if (time == 5) setTime18to21(!time18to21)
        else if (time == 6) setTime21to24(!time21to24)
    }
    return (
        <View style={styles.root}>
            <TimeImage style={[styles.logo, { /*maxHeight: height * 0.15*/ }]} />
            <Text style={styles.heading}>Ustal harmonogram korepetycji</Text>
            <Text style={styles.text}>Zaznacz w poniższej tabeli w które dni chcesz mieć korepetycje</Text>
            <View style={styles.daysBox}>
                <CustomCircleCheckbox text="poniedziałek" onPress={() => selectDay(1)} bgColor={monday ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="wtorek" onPress={() => selectDay(2)} bgColor={tuesday ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="środa" onPress={() => selectDay(3)} bgColor={wednesday ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="czwartek" onPress={() => selectDay(4)} bgColor={thursday ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="piątek" onPress={() => selectDay(5)} bgColor={friday ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="sobota" onPress={() => selectDay(6)} bgColor={saturday ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="niedziela" onPress={() => selectDay(7)} bgColor={sunday ? "#97fb7e" : "#fff"} />
            </View>
            <Text style={styles.text}>Poniżej zaznacz najdogodniejsze dla Ciebie godziny</Text>
            <View style={styles.daysBox}>
                <CustomCircleCheckbox text="6:00 - 9:00 🌅" onPress={() => selectTime(1)} bgColor={time6to9 ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="9:00 - 12:00 ☕" onPress={() => selectTime(2)} bgColor={time9to12 ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="12:00 - 15:00 ☀️" onPress={() => selectTime(3)} bgColor={time12to15 ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="15:00 - 18:00 🏠" onPress={() => selectTime(4)} bgColor={time15to18 ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="18:00 - 21:00 🌇" onPress={() => selectTime(5)} bgColor={time18to21 ? "#97fb7e" : "#fff"} />
                <CustomCircleCheckbox text="21:00 - 24:00 🌙" onPress={() => selectTime(6)} bgColor={time21to24 ? "#97fb7e" : "#fff"} />
            </View>
            <CustomButton text="Dalej" />
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        flex: 1,
        flexGrow: 1
    },
    logo: {
        width: '100%',
        maxWidth: 350,
        maxHeight: 200,
        marginVertical: 0
    },
    heading: {
        fontSize: 40,
        textAlign: "center",
        color: "#ffb600",
        fontWeight: "bold"
    },
    text: {
        textAlign: 'center',
        margin: 16,
        fontSize: 16,
    },
    daysBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        
        //backgroundColor: 'gray',

    }
})
export default SearchSelectSchedule