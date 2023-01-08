import { View, Text, StyleSheet, Image, Linking, Alert, ScrollView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Calendar from "expo-calendar"
import { API } from 'aws-amplify'
import CustomButton from '../../components/CustomButton'
import NonePicture from '../../../assets/images/none.png'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import * as mutations from '../../graphql/mutations'


const SingleLessonScreen = ({ route, navigation }) => {

  const dispatch = useDispatch()
  const lessonObj = route.params
  const isStudent = lessonObj.id.item.LessonStudent?.UserInfo != null
  const isUserStudent = lessonObj.student
  const location = lessonObj.id.item.place === "teacher" ? "U nauczyciela" : "U ucznia"

  const [granted, setGranted] = useState(false)
  const [eventIdInCalendar, setEventIdInCalendar] = useState("")
  const [nearestLesson, setNearestLesson] = useState(new Date())

  async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }

  useEffect(() => {
    findNearestLesson()
    obtainCalendarPermission()
  }, [])

  const findNearestLesson = () => {
    const days = daysOfWeekArray()
    const today = new Date()
    const todaysDayOfWeek = today.getDay()
    const { timeStart, timeStop } = parseTime()
    // find the nearest day
    var nearestDay = 99
    for (var i = 0; i < days.length; i++) {
      var a = (days[i] - todaysDayOfWeek) % 7
      nearestDay = Math.min(a, nearestDay)
    }
    var dateOfNearestLesson = new Date()
    dateOfNearestLesson.setDate(today.getDate() + nearestDay)
    dateOfNearestLesson.setHours(timeStart, 0, 0)
    setNearestLesson(dateOfNearestLesson)
  }

  const obtainCalendarPermission = async () => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === 'granted') {
      const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
      //console.log(calendars)
      const foundCal = calendars.find(e => e.title === 'Korepetycje')
      if (foundCal) {
        setEventIdInCalendar(foundCal.id)
      } else {
        const defaultCalendarSource =
          Platform.OS === 'ios'
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: 'Korkociąg' };
        const newCalendarID = await Calendar.createCalendarAsync({
          title: 'Korepetycje',
          color: '#ffb600',
          entityType: Calendar.EntityTypes.EVENT,
          sourceId: defaultCalendarSource.id,
          source: defaultCalendarSource,
          name: 'internalCalendarName',
          ownerAccount: 'personal',
          accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });
        console.log(`Your new calendar ID is: ${newCalendarID}`);
        setEventIdInCalendar(newCalendarID)
      }
    }
  }
  const addReservationToCalendar = async () => {
    try {
      await Calendar.createEventAsync(eventIdInCalendar, {
        title: "Korepetycje z przemiotu " + lessonObj.id.item.Subject.name,
        startDate: nearestLesson,
        endDate: new Date(nearestLesson.getTime() + 180 * 60000),
        location: lessonObj.id.item.address, // TODO change to student location,
        notes: "Nauczyciel: " + lessonObj.id.item.LessonTeacher.UserInfo.name + '\nUczeń: ' +
          lessonObj.id.item.LessonStudent?.UserInfo?.name,
        timeZone: 'Europe/Warsaw',
      })
      Alert.alert("Sukces", "Pomyślnie dodano najbliższą lekcję do terminarza urządzenia")
    } catch (e) {
      Alert.alert("Błąd przy dodawaniu do terminarza", e.message)
      console.log(e)
    }

  }
  const daysOfWeekArray = () => {
    const strings = lessonObj.id.item.days
    var ints = []
    if (strings.find(e => e === "niedziela")) ints.push(0)
    if (strings.find(e => e === "poniedziałek")) ints.push(1)
    if (strings.find(e => e === "wtorek")) ints.push(2)
    if (strings.find(e => e === "środa")) ints.push(3)
    if (strings.find(e => e === "czwartek")) ints.push(4)
    if (strings.find(e => e === "piątek")) ints.push(5)
    if (strings.find(e => e === "sobota")) ints.push(6)
    return ints
  }
  const parseTime = () => {
    var timeStart = '', timeStop = ''
    const hours = lessonObj.id.item.hours
    if (hours[0] === '6:00 - 9:00') { timeStart = "6"; timeStop = "9" }
    if (hours[0] === '9:00 - 12:00') { timeStart = "9"; timeStop = "12" }
    if (hours[0] === '12:00 - 15:00') { timeStart = "12"; timeStop = "15" }
    if (hours[0] === '15:00 - 18:00') { timeStart = "15"; timeStop = "18" }
    if (hours[0] === '18:00 - 21:00') { timeStart = "18"; timeStop = "21" }
    if (hours[0] === '21:00 - 24:00') { timeStart = "21"; timeStop = "23" }
    return { timeStart, timeStop }
  }

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
  const addToCalendar = async () => {
    addReservationToCalendar()
  }
  const goToMapScreen = () => {
    navigation.navigate('MapScreen', {
      lessonObj: lessonObj.id.item
    });
  }
  const goToEditScreen = () => {
    navigation.navigate('EditLessonScreen', {
      lessonObj: lessonObj.id.item
    });
  }


  return (
    <ScrollView style={styles.root}>
      <Text style={styles.heading}>{lessonObj.id.item.Subject.name}</Text>
      <Text style={styles.descText}>Termin korepetycji: <Text style={styles.valText}>{lessonObj.id.item.days + ''}</Text></Text>
      <Text style={styles.descText}>Godziny korepetycji: <Text style={styles.valText}>{lessonObj.id.item.hours + ''}</Text></Text>
      <Text style={styles.descText}>Miasto: <Text style={styles.valText}>{lessonObj.id.item.city}</Text></Text>
      <Text style={styles.descText}>Adres: <Text style={styles.valText}>
        {lessonObj.id.item.place === "teacher" ? lessonObj.id.item.address : lessonObj.id.item.LessonStudent?.studentAddress}
      </Text></Text>
      <Text style={styles.descText}>Miejsce korepetycji: <Text style={styles.valText}>{location}</Text></Text>
      <Text style={styles.descText}>Cena za lekcję: <Text style={styles.valText}>{lessonObj.id.item.price} zł</Text></Text>
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
      <Text style={styles.descText}>Najbliższa lekcja: { }
        <Text style={styles.valText}>{nearestLesson.toLocaleString('pl-PL', {
          weekday: 'long',
          year: 'numeric', month: 'long', day: 'numeric'
        })}{ }</Text>
      </Text>
      <View style={{ paddingBottom: 50 }}>
        <CustomButton text="Prace domowe" bgColor={'green'} fgColor={'#fff'} onPress={goToHomeworkScreen} />
        <CustomButton text="Dodaj najbliższą lekcję do terminarza" bgColor={'violet'} fgColor={'#fff'} onPress={addToCalendar} />
        <CustomButton text="Wyświetl mapę" bgColor={'#3b71f3'} fgColor={'#fff'} onPress={goToMapScreen} />
        {
          !isUserStudent ?
            <>
              <CustomButton text="Zmień szczegóły korepetycji" bgColor={'#ffb600'} fgColor={'#000'} onPress={goToEditScreen} />
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