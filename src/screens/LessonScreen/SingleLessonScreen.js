import { View, Text, StyleSheet, Image, Linking, Alert, ScrollView } from 'react-native'
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
  const isStudent = lessonObj.id.item.LessonStudent?.UserInfo != null
  console.log(lessonObj)
  const isUserStudent = lessonObj.student
  const location = lessonObj.id.item.place === "teacher" ? "U nauczyciela" : "U ucznia"

  const deleteLessonAlert = () => {
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
  }

  const deleteLesson = async () => {
    console.log("wchodzimy")
    // console.log(lessonObj)
    const details = {
      id: lessonObj.id.item.id,
    };
    try {
      const delStudent = await API.graphql({ query: mutations.deleteLessonStudent, variables: { input: { id: lessonObj.id.item.id } } })
      const deleted = await API.graphql({ query: mutations.deleteLessonOffer, variables: { input: details } })
      Alert.alert("Sukces", "Usunięto ofertę")
      navigation.goBack()
    } catch (e) {
      console.log(e)
      Alert.alert("Błąd", e.message)
    }
  }

  const goToHomeworkScreen = () => {
    if (isStudent) {
      navigation.navigate('HomeworkScreen', {
        lessonObj: lessonObj.id.item, isUserStudent: lessonObj.student, offerHasStudent: isStudent
      });
    } else {
      Alert.alert("Błąd", "Nie możesz przejść do prac domowych, kiedy z ofertą nie jest powiązany żaden uczeń")
    }
  }
  const studentResignAlert = () => {
    Alert.alert(
      "Rezygnacja z lekcji",
      "Czy na pewno chcesz zrezygnować z tej lekcji?",
      [
        {
          text: "Anuluj",
          onPress: () => null,
          style: "cancel"
        },
        { text: "OK", onPress: studentResignQuery }
      ]
    );
  }
  const studentResignQuery = async () => {
    try {
      const deleted = await API.graphql({
        query: mutations.deleteLessonStudent, variables: {
          input: {
            id: lessonObj.id.item.LessonStudent.id
          }
        }
      })
      Alert.alert("Suckes", "Zrezygnowano z oferty")
      navigation.goBack()
    } catch (e) {
      console.log(e)
      Alert.alert("Błąd", e.message)
    }
  }
  const goToCandidatesScreen = () => {
    navigation.navigate('StudentAcceptanceScreen', {
      lessonObj: lessonObj.id.item
    });
  }

  // <Text style={styles.descText}>Cena: <Text style={styles.valText}>0 zł</Text></Text>
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.heading}>{lessonObj.id.item.Subject.name}</Text>
      <Text style={styles.descText}>Termin korepetycji: <Text style={styles.valText}>{lessonObj.id.item.days + ''}</Text></Text>
      <Text style={styles.descText}>Godziny korepetycji: <Text style={styles.valText}>{lessonObj.id.item.hours + ''}</Text></Text>
      <Text style={styles.descText}>Miasto: <Text style={styles.valText}>{lessonObj.id.item.city}</Text></Text>
      <Text style={styles.descText}>Adres nauczyciela: <Text style={styles.valText}>{lessonObj.id.item.address}</Text></Text>
      <Text style={styles.descText}>Miejsce korepetycji: <Text style={styles.valText}>{location}</Text></Text>
      {
        lessonObj.id.item.LessonCandidates?.items?.length > 0 &&
        <CustomButton bgColor={'#fff900'} fgColor={'black'}
          text="Pokaż uczniów proszących o dodanie do lekcji" onPress={goToCandidatesScreen} />
      }

      {
        !isUserStudent ?
          <View style={styles.personBox}>
            {!isStudent && (
              <Image source={NonePicture} style={styles.profilePict} />
            )}
            {isStudent && (
              <Image source={{ uri: lessonObj.id.item.LessonStudent?.UserInfo?.picture }} style={styles.profilePict} />
            )}
            <Text style={styles.descText}>{ }<Text style={styles.valText}>{isStudent ? "Student: " + lessonObj.id.item.LessonStudent?.UserInfo.name : "Student: brak"}</Text></Text>
            <View style={{ flexDirection: 'row' }}>
              <CustomCircleCheckbox text="Napisz wiadomość" bgColor={'#3b71f3'} fgColor={'#fff'} />
              <CustomCircleCheckbox text="Zadzwoń na telefon" bgColor={'#3b71f3'} fgColor={'#fff'} onPress={() => {
                if (isStudent)
                  Linking.openURL('tel: ' + lessonObj.id.item.LessonStudent?.UserInfo.phone_number)
              }} />
            </View>
          </View> :
          <View style={styles.personBox}>
            {!isStudent && (
              <Image source={NonePicture} style={styles.profilePict} />
            )}
            {isStudent && (
              <Image source={{ uri: lessonObj.id.item.LessonTeacher?.UserInfo.picture }} style={styles.profilePict} />
            )}
            <Text style={styles.descText}>{ }<Text style={styles.valText}>{isStudent ? "Nauczyciel: " + lessonObj.id.item.LessonTeacher?.UserInfo.name : "Nauczyciel: brak"}</Text></Text>
            <View style={{ flexDirection: 'row' }}>
              <CustomCircleCheckbox text="Napisz wiadomość" bgColor={'#3b71f3'} fgColor={'#fff'} />
              <CustomCircleCheckbox text="Zadzwoń na telefon" bgColor={'#3b71f3'} fgColor={'#fff'} onPress={() => {
                if (isStudent)
                  Linking.openURL('tel: ' + lessonObj.id.item.LessonTeacher?.UserInfo.phone_number)
              }} />
            </View>
          </View>
      }
      <View style={{ paddingVertical: 20 }}>
        <CustomButton text="Prace domowe" bgColor={'green'} fgColor={'#fff'} onPress={goToHomeworkScreen} />
        <CustomButton text="Wyświetl mapę" bgColor={'#3b71f3'} fgColor={'#fff'} onPress={() => null} />
        {
          !isUserStudent ?
            <>
              <CustomButton text="Zmień szczegóły korepetycji" bgColor={'#ffb600'} fgColor={'#000'} />
              <CustomButton text="Usuń lekcję" bgColor={'red'} fgColor={'#fff'} onPress={deleteLessonAlert} />
            </> :
            <>
              <CustomButton text="Zrezygnuj z korepetycji" bgColor={'red'} fgColor={'#fff'} onPress={studentResignAlert} />
            </>
        }
      </View>
    </ScrollView>
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
    width: 175,
    height: 175,
    borderRadius: 400
  },
  personBox: {
    alignItems: 'center',
  },
  bottomButtons: {

  }
})