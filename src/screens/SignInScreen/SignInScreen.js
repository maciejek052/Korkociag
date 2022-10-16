import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import Corkscrew from '../../../assets/images/corkscrew.svg'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn("Sign in pressed")
    // validate user
    navigation.navigate('TabNavigator')
  }
  const onForgotPasswordPressed = () => {
    console.warn("Forgot password pressed")
    navigation.navigate('ForgotPassword')
  }
  const onSignUpPressed = () => {
    console.warn("Sign up pressed")
    navigation.navigate('SignUp')
  }

  const { height } = useWindowDimensions()
  const navigation = useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Corkscrew style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
        <CustomInput placeholder="Nazwa użytkownika" value={username} setValue={setUsername} />
        <CustomInput placeholder="Hasło" value={password} setValue={setPassword} secureTextEntry />
        <CustomButton text="Zaloguj się" onPress={onSignInPressed} />
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
    padding: 20
  },
  logo: {
    width: '70%',
    maxWidth: 250,
    maxHeight: 250,
    marginVertical: 15
  }
})

export default SignInScreen