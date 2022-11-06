import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

// regex
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const PASSWORD_REGEX = /./


const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password')
    const navigation = useNavigation()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }
    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail')
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
                    name="email" placeholder="Adres e-mail"
                    control={control} rules={{
                        required: 'Adres e-mail jest wymagany',
                        pattern: { value: EMAIL_REGEX, message: "Adres e-mail jest nieprawidłowy" }
                    }} />
                <CustomInput
                    name="password" placeholder="Hasło"
                    control={control} secureTextEntry rules={{
                        required: 'Hasło jest wymagane',
                        pattern: { value: PASSWORD_REGEX, message: "Hasło powinno zawierać..." }
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