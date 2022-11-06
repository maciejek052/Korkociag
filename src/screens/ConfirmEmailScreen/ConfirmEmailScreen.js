import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const ConfirmEmailScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const navigation = useNavigation()
    const [code, setCode] = useState('');
    const onConfirmPressed = () => {
        navigation.navigate('Home')
    }
    const onResendPress = () => {
        console.warn("Resend pressed")
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Potwierdź swój email</Text>
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