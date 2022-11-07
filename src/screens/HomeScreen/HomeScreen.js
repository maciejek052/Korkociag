import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import ProfilePicture from '../../../assets/images/sydney.jpg'

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  const [showStudent, setStudent] = useState(true)
  return (

    <>

      <View style={styles.box1}>
        <Image source={ProfilePicture} style={[styles.profilePict, { maxHeight: height * 0.2 }]} />
        <Text style={styles.userNameHeading}>Witaj{'\n'}Jan Kowalski!</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.horizontalBox}>
          <CustomCircleCheckbox text="Pobierane lekcje" onPress={() => { setStudent(true) }}
            fgColor={showStudent ? "#fff" : "#000"} bgColor={showStudent ? "#3b71f3" : "#fff"} />
          <CustomCircleCheckbox text="Dawane lekcje" onPress={() => { setStudent(false) }}
            fgColor={showStudent ? "#000" : "#fff"} bgColor={showStudent ? "#fff" : "#3b71f3"} />
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: '#f6c64e',
    alignItems: 'center'
  },
  box2: {
    flex: 1.5,
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

export default HomeScreen