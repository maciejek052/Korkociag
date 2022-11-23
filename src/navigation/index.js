import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import LandingScreen from '../screens/LandingScreen';
import TabNavigator from './TabNavigator';

import { Auth, Hub } from 'aws-amplify';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../redux/userInformation'

const Stack = createNativeStackNavigator();





const Navigation = () => {

  const [user, setUser] = useState(undefined)

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true })
      setUser(authUser)

    } catch (e) {
      setUser(null)
    }
  }

  useEffect(() => {
    checkUser()
  }, []);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    console.log("user fetched")
  }, []);


  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser()
      }
    }
    Hub.listen('auth', listener)
    return () => Hub.remove('auth', listener)
  }, [])

  // save user info in store to use in bunch of screens


  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        )}


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation 