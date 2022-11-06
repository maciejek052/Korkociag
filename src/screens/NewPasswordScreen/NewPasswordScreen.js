import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const PASSWORD_REGEX = /./

const NewPasswordScreen = () => {

    const { control, handleSubmit, watch } = useForm();
    const navigation = useNavigation()
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const onSubmitPressed = () => {
        navigation.navigate('Home')
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Resetuj swoje hasło</Text>
                <CustomInput
                    name="code" placeholder="Wpisz kod potwierdzający"
                    control={control} rules={{ required: 'Kod jest wymagany' }} />
                <CustomInput
                    name="password" placeholder="Hasło"
                    control={control} secureTextEntry rules={{
                        required: 'Hasło jest wymagane',
                        pattern: { value: PASSWORD_REGEX, message: "Hasło powinno zawierać..." }
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