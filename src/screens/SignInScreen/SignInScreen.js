import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import Corkscrew from '../../../assets/images/corkscrew.svg'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = data => {
    console.log(data)
    // validate user
    navigation.navigate('TabNavigator')
  }
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  }
  const onSignUpPressed = () => {
    navigation.navigate('SignUp')
  }

  const { control, handleSubmit, formState: { errors } } = useForm()

  const { height } = useWindowDimensions()
  const navigation = useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Corkscrew style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
        <CustomInput
          name="username" placeholder="Nazwa użytkownika"
          control={control} rules={{ required: 'Nazwa użytkownika jest wymagana' }} />
        <CustomInput
          name="password" placeholder="Hasło"
          control={control} secureTextEntry rules={{ required: 'Hasło jest wymagane' }} />
        <CustomButton text="Zaloguj się" onPress={handleSubmit(onSignInPressed)} />
        <CustomButton text="Zapomniałeś hasła?" onPress={onForgotPasswordPressed} type="TERTIARY" />
        <SocialSignInButtons />
        <CustomButton text="Nie masz konta? Załóż je teraz" onPress={onSignUpPressed} type="TERTIARY" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 250,
    maxHeight: 250,
    marginVertical: 15
  }
})

export default SignInScreen