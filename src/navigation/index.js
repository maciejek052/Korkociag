import { View, Text, ActivityIndicator, Alert } from 'react-native'
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

import { Auth, Hub, DataStore, API, graphqlOperation } from 'aws-amplify';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../redux/userInformation'

import { LessonOffer } from '../models';

import { fetchLessonsAsTeacher, setValue } from '../redux/lessonsAsTeacher';

import { getUserInfo } from '../graphql/queries'
import { createUserInfo } from '../graphql/mutations';

const Stack = createNativeStackNavigator();


const Navigation = () => {

  const [user, setUser] = useState(undefined)

  const [dataFetched, setDataFetched] = useState(false)

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true })
      syncUserData(authUser)
      setUser(authUser)
      dispatch(fetchUser());
    } catch (e) {
      setUser(null)
    }
  }

  // function to sync cognito user data and database user data
  // should be triggered only once when user signs in for the 1st time
  // the best way to implement that would be to write dedicated lambda function
  // but i'm too lazy to do that :p 
  const syncUserData = async (authUser) => {
    const userData = await API.graphql(
      graphqlOperation(getUserInfo, { id: authUser.attributes.sub })
    )
    // console.log(userData)
    if (userData.data.getUserInfo) {
      //console.log("User exists in DB")
      return
    }
    const newUser = {
      id: authUser.attributes.sub,
      name: authUser.attributes.preferred_username, // TODO add name attribute during registration!
      address: "-",
      phone_number: authUser.attributes.phone_number,
      picture: authUser.attributes.picture,
    }
    const newUserResponse = await API.graphql(
      graphqlOperation(createUserInfo, { input: newUser })
    )

  }

  useEffect(() => {
    checkUser()
  }, []);


  const dispatch = useDispatch();


  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser()
      }
    }
    Hub.listen('auth', listener)
    return () => Hub.remove('auth', listener)
  }, [])

  useEffect(() => {
    // syncUserData()
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