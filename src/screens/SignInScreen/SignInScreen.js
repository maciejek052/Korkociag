import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import corkscrew from '../../../assets/images/corkscrew.png'

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn("Sign in pressed")
  }
  const onForgotPasswordPressed = () => {
    console.warn("Forgot password pressed")
  }
  const onSignInFacebook = () => {
    console.warn("Sign in Facebook pressed")
  }
  const onSignInGoogle = () => {
    console.warn("Sign in Google pressed")
  }
  const onSignInApple = () => {
    console.warn("Sign in Apple pressed")
  }
  const onSignUpPressed = () => {
    console.warn("Sign up pressed")
  }

  const { height } = useWindowDimensions()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={corkscrew} style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomButton text="Sign in" onPress={onSignInPressed} />
        <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
        <CustomButton text="Sign in with Facebook" onPress={onSignInFacebook} bgColor='#E7EAF4' fgColor='#4765A9' />
        <CustomButton text="Sign in with Google" onPress={onSignInGoogle} bgColor='#FAE9EA' fgColor='#DD4D44' />
        <CustomButton text="Sign in with Apple" onPress={onSignInApple} bgColor='#e3e3e3' fgColor='#363636' />
        <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
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
    maxHeight: 250
  }
})

export default SignInScreen