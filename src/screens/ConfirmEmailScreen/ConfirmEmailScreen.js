import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { useRoute } from '@react-navigation/native'
import { Auth, DataStore } from 'aws-amplify'

const ConfirmEmailScreen = () => {
    const route = useRoute()
    const { control, handleSubmit, watch } = useForm({ defaultValues: { username: route?.params?.username } });
    const username = watch('username')
    const navigation = useNavigation()
    const [code, setCode] = useState('');
    const onConfirmPressed = async (data) => {

        try {
            await Auth.confirmSignUp(data.username, data.code);
            Alert.alert('Sukces', "Zarejestrowano się pomyślnie, teraz zaloguj się na utworzone konto")
            navigation.navigate('SignIn')
        } catch (e) {
            Alert.alert('Błąd', e.message)
        }
    }
    const onResendPress = async () => {
        try {
            await Auth.resendSignUp(username)
            Alert.alert('Sukces', 'Kod został wysłany ponownie na podany adres e-mail')
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
                <Text style={styles.title}>Potwierdź swój email</Text>
                <CustomInput
                    name="username" placeholder="Wpisz nazwę użytkownika"
                    control={control} rules={{ required: 'Nazwa jest wymagana' }} />
                <CustomInput
                    name="code" placeholder="Wpisz kod potwierdzający"
                    control={control} rules={{ required: 'Kod jest wymagany' }} />
                <CustomButton text="Potwierdź" onPress={handleSubmit(onConfirmPressed)} />
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