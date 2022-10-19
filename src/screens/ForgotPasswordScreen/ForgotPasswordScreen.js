import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState('');
    const onConfirmPressed = () => {
        navigation.navigate('NewPassword')
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Resetuj hasło</Text>
                <CustomInput placeholder="Nazwa użytkownika" value={username} setValue={setUsername} />
                <CustomButton text="Potwierdź" onPress={onConfirmPressed} />
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

export default ForgotPasswordScreen