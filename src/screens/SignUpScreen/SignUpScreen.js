import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
    const navigation = userNavigation()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const onSignInPressed = () => {
        console.warn("Sign in pressed")
        navigation.navigate('SignIn')
    }
    const onRegisterPressed = () => {
        console.warn("Register pressed")
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
                <Text style={styles.title}>Create an account</Text>
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="E-mail" value={email} setValue={setEmail} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                <CustomInput placeholder="Repeat password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
                <CustomButton text="Register" onPress={onRegisterPressed} />
                <Text style={styles.text}>
                    By registering, confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>
                        Terms of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
                        Privacy Policy</Text>
                </Text>
                <SocialSignInButtons />
                <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY" />
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

export default SignUpScreen