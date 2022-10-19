import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
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
                <CustomInput placeholder="Nazwa użytkownika" value={username} setValue={setUsername} />
                <CustomInput placeholder="E-mail" value={email} setValue={setEmail} />
                <CustomInput placeholder="Hasło" value={password} setValue={setPassword} secureTextEntry />
                <CustomInput placeholder="Powtórz hasło" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
                <CustomButton text="Zarejestruj się" onPress={onRegisterPressed} />
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