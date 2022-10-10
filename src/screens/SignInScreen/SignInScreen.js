import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react'
import corkscrew from '../../../assets/images/corkscrew.png'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn("Sign in pressed")
    // validate user
    navigation.navigate('Home')
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
        <Image source={corkscrew} style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomButton text="Sign in" onPress={onSignInPressed} />
        <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
        <SocialSignInButtons />
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