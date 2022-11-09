import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

import SearchImage from '../../../assets/images/undraw_people_search_re_5rre.svg'
import GraduationImage from '../../../assets/images/undraw_graduation_re_gthn.svg'
import BlackboardImage from '../../../assets/images/undraw_teaching_f-1-cm.svg'
import MapImage from '../../../assets/images/undraw_map_dark_re_36sy.svg'
import TimeImage from '../../../assets/images/undraw_time_management_re_tk5w.svg'


const TeachSummaryScreen = ({ route, navigation }) => {
    const daysOfWeek = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela']
    const timeIntervals = ['6:00 - 9:00 🌅', '9:00 - 12:00 ☕', '12:00 - 15:00 ☀️', '15:00 - 18:00 🏠', '18:00 - 21:00 🌇', '21:00 - 24:00 🌙']
    const { level, subject, localization, radius, placeStudent, placeTeacher, days, time } = route.params
    const { height } = useWindowDimensions();
    const confirmOffer = (level) => {
        navigation.navigate('TeachOfferConfirmation')
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
        <View style={styles.root}>
            <SearchImage style={[styles.logo, { maxHeight: height * 0.15 }]} />
            <Text style={styles.heading}>Potwierdź dodawanie oferty</Text>
            <Text style={styles.text}>Upewnij się, czy poprawnie wprowadziłeś szczegóły udzielanych korepetycji</Text>
            <>
                <GraduationImage style={{ maxHeight: height * 0.08 }} />
                <Text style={styles.caption}>Poziom: <Text style={styles.value}>{level}</Text></Text>
                <BlackboardImage style={{ maxHeight: height * 0.08 }} />
                <Text style={styles.caption}>Przedmiot: <Text style={styles.value}>{subject}</Text></Text>
                <Text style={styles.caption}>Lokalizacja: <Text style={styles.value}>{localization}</Text></Text>
                <Text style={styles.caption}>Miejsce: <Text style={styles.value}>{parseLoc()}</Text></Text>
                <TimeImage style={{ maxHeight: height * 0.08 }} />
                <Text style={styles.caption}>Dni: <Text style={styles.value}>{parseDays()}</Text></Text>
                <Text style={styles.caption}>Godziny: <Text style={styles.value}>{parseTime()}</Text></Text>
                <Text></Text>
            </>
            <CustomButton text="Utwórz ofertę" onPress={confirmOffer} />
        </View>
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
    }
})
export default TeachSummaryScreen