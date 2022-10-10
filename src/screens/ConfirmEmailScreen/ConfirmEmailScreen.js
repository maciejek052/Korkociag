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
                <Text style={styles.title}>Confirm your email</Text>
                <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />
                <CustomButton text="Confirm" onPress={onConfirmPressed} />
                <CustomButton text="Resend code" onPress={onResendPress} type="SECONDARY" />
                <CustomButton text="Back to sign in" onPress={onSignInPress} type="TERTIARY" />
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
        margin: 10
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