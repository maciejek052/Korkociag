import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import CustomButton from '../../components/CustomButton'
import * as mutations from '../../graphql/mutations'

const PendingLessonScreen = ({ route, navigation }) => {
    const lessonObj = route.params
    console.log(lessonObj)
    const location = lessonObj.id.item.place === "teacher" ? "U nauczyciela" : "U ucznia"

    const studentResignAlert = () => {
        Alert.alert(
            "Rezygnacja z lekcji",
            "Czy na pewno chcesz zrezygnować z tej lekcji?",
            [
                {
                    text: "Anuluj",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "OK", onPress: resign }
            ]
        );
    }
    const resign = async () => {
        try {
            console.log(lessonObj)
            const del = await API.graphql({ query: mutations.deleteLessonCandidate, variables: { input: { id: lessonObj.id.item.candidacyID } } })
            Alert.alert("Sukces", "Usunięto prośbę o dołączenie do lekcji")
            navigation.goBack()
        } catch (e) {
            Alert.alert("Błąd podczas rezygnacji", e.message)
            console.log(e)
        }
    }
    const goToMapScreen = () => {
        navigation.navigate('MapScreen', {
            lessonObj: lessonObj.id.item
        });
    }
    return (
        <View style={styles.root}>
            <Text style={styles.heading}>{lessonObj.id.item.Subject.name}</Text>
            <Text style={styles.descText}>Termin korepetycji: <Text style={styles.valText}>{lessonObj.id.item.days + ''}</Text></Text>
            <Text style={styles.descText}>Godziny korepetycji: <Text style={styles.valText}>{lessonObj.id.item.hours + ''}</Text></Text>
            <Text style={styles.descText}>Miasto: <Text style={styles.valText}>{lessonObj.id.item.city}</Text></Text>
            <Text style={styles.descText}>Adres nauczyciela: <Text style={styles.valText}>{lessonObj.id.item.address}</Text></Text>
            <Text style={styles.descText}>Miejsce korepetycji: <Text style={styles.valText}>{location}</Text></Text>
            <View style={styles.personBox}>
                <Image source={{ uri: lessonObj.id.item.LessonTeacher?.UserInfo?.picture }} style={styles.profilePict} />
                <Text style={styles.valText}>{"Nauczyciel: " + lessonObj.id.item.LessonTeacher?.UserInfo.name}</Text>
            </View>
            <Text style={styles.centerText}>Oferta oczekuje na zaakceptowanie przez nauczyciela</Text>
            <CustomButton text="Wyświetl mapę" bgColor={'#3b71f3'} fgColor={'#fff'} onPress={goToMapScreen} />
            <CustomButton text="Zrezygnuj z korepetycji" bgColor={'red'} fgColor={'#fff'} onPress={studentResignAlert} />
        </View>
    )

}

export default PendingLessonScreen

const styles = StyleSheet.create({
    root: {
        padding: 20
    },
    heading: {
        textAlign: 'center',
        color: '#3b71f3',
        fontWeight: 'bold',
        fontSize: 40,
        padding: 20
    },
    descText: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 5
    },
    valText: {
        fontWeight: 'normal'
    },
    profilePict: {
        width: 200,
        height: 200,
        borderRadius: 400
    },
    personBox: {
        alignItems: 'center',
    },
    centerText: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})