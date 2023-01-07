import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify';
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const ChangePasswordScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('newPassword')
    const navigation = useNavigation()

    const changePwdPressed = async (data) => {
        const { oldPassword, newPassword } = data
        try {
            const user = await Auth.currentAuthenticatedUser()
            await Auth.changePassword(user, oldPassword, newPassword)
            Alert.alert('Sukces', 'Hasło zostało pomyślnie zmienione')
            navigation.goBack()
        } catch (e) {
            Alert.alert('Błąd', e.message)
        }
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Zmień hasło</Text>
            <CustomInput
                name="oldPassword" placeholder="Stare hasło"
                control={control} secureTextEntry rules={{ required: 'Wpisz stare hasło' }} />
            <CustomInput
                name="newPassword" placeholder="Nowe hasło"
                control={control} secureTextEntry rules={{
                    required: 'Hasło jest wymagane',
                    pattern: { value: PASSWORD_REGEX, message: "Hasło powinno zawierać 8 znaków w tym małą i wielką literę, cyfrę i symbol" }
                }} />
            <CustomInput
                name="repeatPassword" placeholder="Powtórz nowe hasło"
                control={control} secureTextEntry rules={{
                    validate: value =>
                        value === pwd || 'Hasła się nie zgadzają'
                }} />
            <CustomButton text="Potwierdź" onPress={handleSubmit(changePwdPressed)} />
            <CustomButton text="Powrót" onPress={() => navigation.goBack()} type="TERTIARY" />
        </View>
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

export default ChangePasswordScreen