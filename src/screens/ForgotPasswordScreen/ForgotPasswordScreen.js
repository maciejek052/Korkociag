import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

const ForgotPasswordScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const username = watch('username')
    const navigation = useNavigation()
    // const [username, setUsername] = useState('');
    const onConfirmPressed = async (data) => {
        try {
            await Auth.forgotPassword(data.username) +
                navigation.navigate('NewPassword', {username})
        } catch (e) {
            Alert.alert('Błąd', e.message)
        }
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Resetuj hasło</Text>
                <CustomInput
                    name="username" placeholder="Nazwa użytkownika"
                    control={control} rules={{ required: 'Nazwa jest wymagana' }} />
                <CustomButton text="Potwierdź" onPress={handleSubmit(onConfirmPressed)} />
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