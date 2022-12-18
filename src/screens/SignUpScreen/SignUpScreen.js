import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'

// regex
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
const PHONE_REGEX = /^\+.*$/

const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password')
    const navigation = useNavigation()
    const [username, setUsername] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }
    const onRegisterPressed = async (data) => {
        try {
            const { username, name, password, phone_number, email } = data

            await Auth.signUp({
                username,
                password,
                attributes: {
                    phone_number, name: name, address: "", picture: null, preferred_username: username, email
                }
            })
            navigation.navigate('ConfirmEmail', { username })
        } catch (e) {
            Alert.alert('Błąd', e.message)
        }

    }
    const onTermsOfUsePressed = () => {
        console.warn("Terms of use pressed")
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy policy pressed")
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Załóż konto</Text>
                <CustomInput
                    name="username" placeholder="Nazwa użytkownika"
                    control={control} rules={{
                        required: 'Nazwa użytkownika jest wymagana',
                        minLength: { value: 3, message: 'Nazwa użytkownika powinna mieć przynajmniej 3 znaki' },
                        maxLength: { value: 24, message: 'Nazwa użytkownika powinna mieć maksymalnie 24 znaki' }
                    }} />
                <CustomInput
                    name="name" placeholder="Imię i nazwisko"
                    control={control} rules={{
                        required: 'Imię i nazwisko jest wymagana',
                        minLength: { value: 5, message: 'Imię i nazwisko powinno mieć przynajmniej 5 znaków' }
                    }} />
                <CustomInput
                    name="email" placeholder="E-mail"
                    control={control} rules={{
                        required: 'E-mail jest wymagany',
                        pattern: { value: EMAIL_REGEX, message: "E-mail jest nieprawidłowy" }
                    }} />
                <CustomInput
                    name="phone_number" placeholder="Numer telefonu"
                    control={control} rules={{
                        required: 'Numer telefonu jest wymagany',
                        pattern: { value: PHONE_REGEX, message: "Podaj numer telefonu z kodem kraju, np +48xxxxxxxxx" } // TODO verify phone number
                    }} />
                <CustomInput
                    name="password" placeholder="Hasło"
                    control={control} secureTextEntry rules={{
                        required: 'Hasło jest wymagane',
                        pattern: { value: PASSWORD_REGEX, message: "Hasło powinno zawierać 8 znaków w tym małą i wielką literę, cyfrę i symbol" }
                    }} />
                <CustomInput
                    name="repeatPassword" placeholder="Powtórz hasło"
                    control={control} secureTextEntry rules={{
                        validate: value =>
                            value === pwd || 'Hasła się nie zgadzają'
                    }} />
                <CustomButton text="Zarejestruj się" onPress={handleSubmit(onRegisterPressed)} />
                <Text style={styles.text}>
                    Rejestrując się, potwierdzasz że akceptujesz nasz{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>
                        regulamin świadczenia usług</Text> oraz{' '}
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
                        politykę prywatności</Text>
                </Text>
                <SocialSignInButtons />
                <CustomButton text="Masz już konto? Zaloguj się" onPress={onSignInPressed} type="TERTIARY" />
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
        marginVertical: 10,
        textAlign: "center"
    },
    link: {
        color: '#FDB075',
    }
})

export default SignUpScreen