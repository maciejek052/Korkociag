import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'
import { Auth, DataStore, Hub } from 'aws-amplify'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../../redux/userInformation'

const SettingsScreen = () => {
  const { user, loading } = useSelector((state) => state.userInformation)
  const navigation = useNavigation()
  const { height } = useWindowDimensions();
  const [showStudent, setStudent] = useState(true)
  const [notificationsBtn, setNotificationsBtn] = useState(true)

  const goEditProfileScreen = () => {
    navigation.navigate('EditProfileScreen')
  }
  const goChangePasswordScreen = () => {
    navigation.navigate('ChangePasswordScreen')
  }

  const signOut = async () => {
    Auth.signOut()
  }

  /* 
    <CustomButton text={notificationsBtn ? "Powiadomienia: włączone" : "Powiadomienia: wyłączone"} btnSize="30"
      bgColor={notificationsBtn ? "green" : "red"} onPress={() => { setNotificationsBtn(!notificationsBtn) }} /> 
  */

  return (
    <>
      <View style={styles.box1}>
        <Image source={{ uri: user.attributes?.picture }} style={{ width: 200, height: 200, borderRadius: 400 }} />
        <Text style={styles.userNameHeading}>Witaj{'\n'}{user.attributes?.name}</Text>
      </View>
      <View style={styles.box2}>
        <CustomButton text="Edytuj profil" btnSize="30" onPress={goEditProfileScreen} />
        <CustomButton text="Zmień hasło" btnSize="30" onPress={goChangePasswordScreen} />

        <CustomButton text="Wyloguj się" btnSize="30" bgColor="#b5b3b9" fgColor="#555" onPress={signOut} />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: '#ffb600',
    alignItems: 'center'
  },
  box2: {
    flex: 1.5,
    paddingHorizontal: 30
  },
  profilePict: {
    maxWidth: 200,
    //maxHeight: 200,
    borderRadius: 400,
    margin: 10
  },
  userNameHeading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    color: '#4f89ff'
  },
  horizontalBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10
  }
})

export default SettingsScreen