import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
const ConfirmEmailScreen = () => {
    const navigation = useNavigation()
    const [code, setCode] = useState('');
    const onConfirmPressed = () => {
        console.warn("Register pressed")
        navigation.navigate('Home')
    }
    const onResendPress = () => {
        console.warn("Resend pressed")
        
    }
    const onSignInPress = () => {
        console.warn("Back to sign in pressed")
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Potwierdź swój email</Text>
                <CustomInput placeholder="Wpisz kod potwierdzający" value={code} setValue={setCode} />
                <CustomButton text="Potwierdź" onPress={onConfirmPressed} />
                <CustomButton text="Wyślij kod ponownie" onPress={onResendPress} type="SECONDARY" />
                <CustomButton text="Powrót do logowania" onPress={onSignInPress} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        marginVertical: 30
    },
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: '#FDB075',
    }
})

export default ConfirmEmailScreen