import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState('');
    const onConfirmPressed = () => {
        console.warn("Confirm pressed")
        navigation.navigate('NewPassword')
    }
    const onSignInPress = () => {
        console.warn("Sign in pressed")
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomButton text="Confirm" onPress={onConfirmPressed} />
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

export default ForgotPasswordScreen