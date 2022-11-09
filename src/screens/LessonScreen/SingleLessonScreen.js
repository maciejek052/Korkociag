import { View, Text, StyleSheet, Image, Linking } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'

import { lessons } from '../../../mocks/lessons'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'

const SingleLessonScreen = ({ route, navigation }) => {

  const id = route.params.id
  const isStudent = route.params.student
  const lesson = lessons.find(e => e.id === id)
  const avatar = isStudent ?
    lesson.teacher.profileInfo.avatarUrl
    : lesson.student.profileInfo.avatarUrl
  const who = isStudent ? 'Nauczyciel: ' : 'Uczeń: '
  const name = isStudent ?
    lesson.teacher.profileInfo.fullName
    : lesson.student.profileInfo.fullName
  const phone = isStudent ?
    lesson.teacher.profileInfo.phoneNumber
    : lesson.student.profileInfo.phoneNumber

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>{lesson.subject}</Text>
      <Text style={styles.descText}>Termin korepetycji: <Text style={styles.valText}>{lesson.days}</Text></Text>
      <Text style={styles.descText}>Godziny korepetycji: <Text style={styles.valText}>{lesson.time}</Text></Text>
      <Text style={styles.descText}>Lokalizacja: <Text style={styles.valText}>{lesson.location}</Text></Text>
      <Text style={styles.descText}>Cena: <Text style={styles.valText}>{lesson.price} zł</Text></Text>
      <View style={styles.personBox}>
        <Image source={{ uri: avatar }} style={styles.profilePict} />
        <Text style={styles.descText}>{who}<Text style={styles.valText}>{name}</Text></Text>
        <View style={{ flexDirection: 'row' }}>
          <CustomCircleCheckbox text="Napisz wiadomość" bgColor={'#3b71f3'} fgColor={'#fff'} />
          <CustomCircleCheckbox text="Zadzwoń na telefon" bgColor={'#3b71f3'} fgColor={'#fff'} onPress={() => {
            Linking.openURL('tel: ' + phone)
          }} />
        </View>
      </View>
      <View style={{ paddingVertical: 20 }}>
        <CustomButton text="Prace domowe" bgColor={'green'} fgColor={'#fff'} />
        <CustomButton text="Zmień szczegóły korepetycji" bgColor={'#ffb600'} fgColor={'#000'} />
        <CustomButton text="Zrezygnuj z korepetycji" bgColor={'red'} fgColor={'#fff'} />
      </View>
    </View>
  )
}

export default SingleLessonScreen

const styles = StyleSheet.create({
  root: {
    padding: 20
  },
  heading: {
    textAlign: 'center',
    color: '#3b71f3',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 20
  },
  descText: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5
  },
  valText: {
    fontWeight: 'normal'
  },
  profilePict: {
    width: 200,
    height: 200,
    borderRadius: 400
  },
  personBox: {
    alignItems: 'center',
  },
  bottomButtons: {

  }
})