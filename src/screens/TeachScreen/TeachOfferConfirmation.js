import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import ConfirmImage from '../../../assets/images/undraw_order_confirmed_re_g0if.svg'
import CustomButton from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import { fetchLessonsAsTeacher } from '../../redux/lessonsAsTeacher';
import { LessonOffer } from '../../models';

const TeachOfferConfirmation = () => {
    const navigation = useNavigation()
    const { height } = useWindowDimensions();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchLessonsAsTeacher())
    }, [])

    return (
        <View style={styles.root}>
            <ConfirmImage style={[styles.logo, { maxHeight: height * 0.35 }]} />
            <Text style={styles.heading}>Dodano ofertę!</Text>
            <Text style={styles.text}>
                Twoja oferta została pomyślnie dodana i wyświetla sie w wyszukiwaniach dla uczniów.
                Kiedy uczeń będzie nią zainteresowany dostaniesz powiadomienie i będziesz mógł zapoznać się ze szczegółami.
            </Text>
            <Text style={styles.text}>
                Możesz teraz dodać kolejną ofertę. Pamiętaj że z pojedynczą ofertą może być powiązany tylko jeden uczeń.
            </Text>
            <CustomButton text="Dodaj kolejną ofertę" btnSize={36} onPress={() => navigation.popToTop()}
                fgColor="" bgColor="green" />

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
    caption: {
        fontWeight: 'bold'
    },
    value: {
        fontWeight: 'normal'
    }
})

export default TeachOfferConfirmation