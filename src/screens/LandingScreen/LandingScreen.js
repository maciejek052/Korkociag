import { View, Image, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import { SvgUri } from 'react-native-svg'
import React from 'react'
import CustomButton from '../../components/CustomButton'

import LogoImg from '../../../assets/images/undraw_education_f8ru.svg'
import { useNavigation } from '@react-navigation/native'


const LandingScreen = () => {
    const onJoinUsPressed = () => {
        navigation.navigate('SignIn')
    }
    const { height } = useWindowDimensions()
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.root}>
            <LogoImg style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
            <Text style={styles.heading}>Znalezienie korepetycji nigdy nie było prostsze!</Text>
            <Text style={styles.smallText}>
                Za pomocą platformy Korkociąg bez trudu odnajdziesz korepetycje skrojone pod ciebie!
            </Text>
            <Text style={styles.smallText}>
                Nasi wykształceni korepetytorzy nauczą cię każdego przedmiotu
                szkolnego na wybranym przez ciebie poziome edukacji.
            </Text>
            <Text style={styles.smallText}>
                Aplikacja powstała w ramach pracy inżynierskiej realizowanej na Wydziale
                Informatyki Politechniki Białostockiej
            </Text>
            <Text style={styles.biggerPhrase}>Na co czekasz? Dołącz już teraz!</Text>
            <CustomButton text="Dołącz do nas!" onPress={onJoinUsPressed} type="LANDING" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        //alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '100%',
        maxWidth: 400,
        maxHeight: 250,
    },
    heading: {
        fontSize: 40,
        textAlign: "center",
        color: "#7f9f00",
        fontWeight: "bold"
    },
    smallText: {
        fontSize: 16,
        textAlign: "center",
        margin: 20
    },
    biggerPhrase: {
        fontSize: 24,
        marginVertical: 10,
        color: "#f8c23b",
        fontWeight: "800",
        textAlign: "center"
    }
})

export default LandingScreen