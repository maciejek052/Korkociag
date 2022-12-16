import { View, Text, StyleSheet, useWindowDimensions, Component } from 'react-native'
import React, { useState, useEffect } from 'react'
import TimeImage from '../../../assets/images/undraw_time_management_re_tk5w.svg'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox';
import CustomButton from '../../components/CustomButton';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-root-toast'
import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';

const SearchSelectSchedule = ({ route, navigation }) => {
    const { level, subject, city, radius, address, placeStudent, placeTeacher } = route.params
    const { height } = useWindowDimensions()

    const [daysState, setDaysState] = useState([true, false, false, false, false, false, false])
    const [timeState, setTimeState] = useState([false, false, true, false, false, false])

    const selectDay = (index) => {
        setDaysState(prevState => prevState.map((item, idx) => idx === index ? !item : item))
    }

    const selectTime = (index) => {
        setTimeState(prevState => prevState.map((item, idx) => idx === index ? !item : item))
    }

    const goNextScreen = () => {

        // validate if user selected at least one day and one time interval
        if (daysState.some(e => e === true) && timeState.some(e => e === true)) {
            navigation.navigate('SearchSummaryScreen', {
                level: level, subject: subject, city: city, radius: radius, address: address, 
                placeStudent: placeStudent, placeTeacher: placeTeacher, days: daysState, time: timeState
            })

        }
        else {
            let toast = Toast.show('Wybierz przynajmniej jedną opcję w obydwu tabelach', {
                duration: Toast.durations.LONG,
            });
        };
    }

    return (
        <RootSiblingParent>
            <View style={styles.root}>
                <TimeImage style={[styles.logo, { /*maxHeight: height * 0.15*/ }]} />
                <Text style={styles.heading} > Ustal harmonogram korepetycji</Text>
                <Text style={styles.text}>Zaznacz w poniższej tabeli w które dni chcesz mieć korepetycje</Text>
                <View style={styles.daysBox}>
                    <CustomCircleCheckbox text="poniedziałek" onPress={() => selectDay(0)} bgColor={daysState[0] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="wtorek" onPress={() => selectDay(1)} bgColor={daysState[1] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="środa" onPress={() => selectDay(2)} bgColor={daysState[2] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="czwartek" onPress={() => selectDay(3)} bgColor={daysState[3] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="piątek" onPress={() => selectDay(4)} bgColor={daysState[4] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="sobota" onPress={() => selectDay(5)} bgColor={daysState[5] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="niedziela" onPress={() => selectDay(6)} bgColor={daysState[6] ? "#97fb7e" : "#fff"} />
                </View>
                <Text style={styles.text}>Poniżej zaznacz najdogodniejsze dla Ciebie godziny</Text>
                <View style={styles.daysBox}>
                    <CustomCircleCheckbox text="6:00 - 9:00 🌅" onPress={() => selectTime(0)} bgColor={timeState[0] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="9:00 - 12:00 ☕" onPress={() => selectTime(1)} bgColor={timeState[1] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="12:00 - 15:00 ☀️" onPress={() => selectTime(2)} bgColor={timeState[2] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="15:00 - 18:00 🏠" onPress={() => selectTime(3)} bgColor={timeState[3] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="18:00 - 21:00 🌇" onPress={() => selectTime(4)} bgColor={timeState[4] ? "#97fb7e" : "#fff"} />
                    <CustomCircleCheckbox text="21:00 - 24:00 🌙" onPress={() => selectTime(5)} bgColor={timeState[5] ? "#97fb7e" : "#fff"} />
                </View>
                <CustomButton text="Dalej" onPress={goNextScreen} />
            </View >
        </RootSiblingParent>
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
        fontSize: 36,
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