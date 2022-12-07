import { View, Text, StyleSheet, Image, Linking, Alert } from 'react-native'
import React, { useEffect } from 'react'
import CustomButton from '../../components/CustomButton'
import NonePicture from '../../../assets/images/none.png'
import { lessons } from '../../../mocks/lessons'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import { DataStore, Predicates } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { fetchLessonsAsTeacher } from '../../redux/lessonsAsTeacher'
import { LessonOffer, Subject, Homework } from '../../models'
import { API } from 'aws-amplify'
import * as mutations from '../../graphql/mutations'


const SingleLessonScreen = ({ route, navigation }) => {

  const dispatch = useDispatch()
  const lessonObj = route.params
  const isStudent = lessonObj.id.item.LessonStudent != null

  const deleteLessonAlert = () =>
    Alert.alert(
      "Usuwanie lekcji",
      "Czy na pewno chcesz usunąć tę lekcję?",
      [
        {
          text: "Anuluj",
          onPress: () => null,
          style: "cancel"
        },
        { text: "OK", onPress: deleteLesson }
      ]
    );

  const deleteLesson = async () => {
    console.log("wchodzimy")
    // console.log(lessonObj)
    const details = {
      id: lessonObj.id.item.id,
      _version: lessonObj.id.item._version
    };
    try {
      const deleted = await API.graphql({ query: mutations.deleteLessonOffer, variables: { input: details } })
      navigation.goBack()
    } catch (e) {
      console.log(e)
      Alert.alert("Błąd", e.message)
    }
  }

  const goToHomeworkScreen = () => {
    navigation.navigate('HomeworkScreen', {
      lessonObj: lessonObj.id.item, isStudent: isStudent
    });
  }

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>{lessonObj.id.item.Subject.name}</Text>
      <Text style={styles.descText}>Termin korepetycji: <Text style={styles.valText}>{lessonObj.id.item.days + ''}</Text></Text>
      <Text style={styles.descText}>Godziny korepetycji: <Text style={styles.valText}>{lessonObj.id.item.hours + ''}</Text></Text>
      <Text style={styles.descText}>Miasto: <Text style={styles.valText}>{lessonObj.id.item.city}</Text></Text>
      <Text style={styles.descText}>Adres: <Text style={styles.valText}>{lessonObj.id.item.address}</Text></Text>
      <Text style={styles.descText}>Cena: <Text style={styles.valText}>0 zł</Text></Text>
      <View style={styles.personBox}>
        {!isStudent && (
          <Image source={NonePicture} style={styles.profilePict} />
        )}
        {isStudent && (
          <Image source={{ uri: lessonObj.id.item.LessonStudent?.UserInfo.picture }} style={styles.profilePict} />
        )}
        <Text style={styles.descText}>{ }<Text style={styles.valText}>{isStudent ? "Student: " + lessonObj.id.item.LessonStudent?.UserInfo.name : "Student: brak"}</Text></Text>
        <View style={{ flexDirection: 'row' }}>
          <CustomCircleCheckbox text="Napisz wiadomość" bgColor={'#3b71f3'} fgColor={'#fff'} />
          <CustomCircleCheckbox text="Zadzwoń na telefon" bgColor={'#3b71f3'} fgColor={'#fff'} onPress={() => {
            if (isStudent)
              Linking.openURL('tel: ' + lessonObj.id.item.LessonStudent?.UserInfo.phone_number)
          }} />
        </View>
      </View>
      <View style={{ paddingVertical: 20 }}>
        <CustomButton text="Prace domowe" bgColor={'green'} fgColor={'#fff'} onPress={goToHomeworkScreen} />
        <CustomButton text="Zmień szczegóły korepetycji" bgColor={'#ffb600'} fgColor={'#000'} />
        <CustomButton text="Usuń lekcję" bgColor={'red'} fgColor={'#fff'} onPress={deleteLessonAlert} />
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