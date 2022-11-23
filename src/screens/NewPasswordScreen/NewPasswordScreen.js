import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify'
const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const NewPasswordScreen = () => {
    const route = useRoute()
    const { control, handleSubmit, watch } = useForm({ defaultValues: { username: route?.params?.username } });
    const navigation = useNavigation()
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const onSubmitPressed = async (data) => {
        try {
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password)
            Alert.alert("Sukces", "Hasło zostało zmienione")
            navigation.navigate('SignIn')
        } catch (e) {
            Alert.alert("Błąd", e.message)
        }
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Resetuj swoje hasło</Text>
                <CustomInput
                    name="username" placeholder="Wpisz nazwę użytkownika"
                    control={control} rules={{ required: 'Nazwa jest wymagana' }} />
                <CustomInput
                    name="code" placeholder="Wpisz kod potwierdzający"
                    control={control} rules={{ required: 'Kod jest wymagany' }} />
                <CustomInput
                    name="password" placeholder="Hasło"
                    control={control} secureTextEntry rules={{
                        required: 'Hasło jest wymagane',
                        pattern: { value: PASSWORD_REGEX, message: "Hasło powinno zawierać 8 znaków w tym małą i wielką literę, cyfrę i symbol" }
                    }} />
                <CustomButton text="Wyślij" onPress={handleSubmit(onSubmitPressed)} />
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

export default NewPasswordScreen