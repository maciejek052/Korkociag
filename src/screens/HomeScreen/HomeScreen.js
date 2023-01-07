import {
  View, Text, StyleSheet, Image, useWindowDimensions,
  FlatList, TouchableWithoutFeedback, Alert, ActivityIndicator,

} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import NonePicture from '../../../assets/images/none.png'
import { API, graphqlOperation } from 'aws-amplify'
import { fetchUser } from '../../redux/userInformation'
import { useSelector, useDispatch } from 'react-redux'


import * as queries from '../../graphql/queries'


const HomeScreen = () => {

  const dispatch = useDispatch();


  const { user } = useSelector((state) => state.userInformation)


  const { height, width } = useWindowDimensions();
  const navigation = useNavigation()

  const [showStudent, setStudent] = useState(true)

  const [showList, setList] = useState([]);

  const [loading, setLoading] = useState(false)
  const [lessonsAsTeacher, setLessonsAsTeacher] = useState([]);
  const [lessonsAsStudent, setLessonsAsStudent] = useState([]);


  useEffect(() => {
    setLoading(true)
    if (user?.attributes !== undefined) {
      reload()

    }
  }, [user])



  const reload = async () => {
    setLoading(true)
    const lessonAsTeacherQuery = await API.graphql(
      graphqlOperation(queries.listLessonOffers, { filter: { ownerCognitoID: { eq: user.attributes.sub } } })
    );
    //setLessonsAsTeacher(lessonAsTeacherQuery)
    // sort to show pending lessons at the first places
    var result = lessonAsTeacherQuery.data.listLessonOffers.items.sort((a,b) => b.LessonCandidates.items.length - a.LessonCandidates.items.length)
    setLessonsAsTeacher(result)
    console.log(lessonAsTeacherQuery)
    console.log("Lessons as teacher fetched")
    // TODO replace that abomination with a proper GraphQL query
    // i did this in this way because filtering by nested obj value is a big pain in a butt in aws appsync
    var offersArray = []

    const waitingForAccept = await API.graphql(
      graphqlOperation(queries.listLessonCandidates, { filter: { lessonCandidateUserInfoId: { eq: user.attributes.sub } } })
    );

    for (const e of waitingForAccept.data.listLessonCandidates.items) {
      const query = await API.graphql(
        graphqlOperation(queries.getLessonOffer, { id: e.lessonofferID })
      );
      query.data.getLessonOffer.isPending = true
      offersArray.push(query.data.getLessonOffer)
    }
    const query = await API.graphql(
      graphqlOperation(queries.listLessonStudents, { filter: { lessonStudentUserInfoId: { eq: user.attributes.sub } } })
    );
    //console.log(query)
    for (const e of query.data.listLessonStudents.items) {
      const query2 = await API.graphql(
        graphqlOperation(queries.getLessonOffer, { id: e.id })
      );
      //console.log(query2)
      offersArray.push(query2.data.getLessonOffer)
    }
    var ar = offersArray.sort((a,b) => a.LessonCandidates.items.length - b.LessonCandidates.items.length)
    setLessonsAsStudent(ar)
    console.log("Lessons as student fetched")
    setLoading(false)
    // setStudent(true)
    //console.log(user)
    //console.log(lessonsAsStudent)
    //console.log(lessonsAsTeacher)
    showStudent ? setList(offersArray) : setList(lessonAsTeacherQuery.data.listLessonOffers.items)
  }


  const updateList = (which) => {
    if (!loading) {
      if (which == 0) {
        setStudent(true)
        setList(lessonsAsStudent)
      } else {
        setStudent(false)
        setList(lessonsAsTeacher)
      }
    }
  }
  const goToLessonScreen = (id, student) => {
    navigation.navigate('SingleLessonScreen', {
      id: id,
      student: showStudent
    });
  }
  var img = user?.attributes?.picture

  // i know it could be coded much better but it works :p
  const Item = ({ title, student, item, isStudent, isTeacher, teacher, isStudent2, isPending }) => (
    <TouchableWithoutFeedback onPress={() => {

      goToLessonScreen({ item, title, isTeacher })
    }}>
      <View style={[styles.item, { backgroundColor: isPending ? '#fff900' : '#c4c4c4' }]}>
        <View style={styles.boxImg}>

          {!showStudent && (
            <>
              <Image source={(isStudent && isStudent2) ? { uri: student.UserInfo?.picture } : NonePicture}
                style={styles.profilePictSmall} />
            </>
          )}
          {showStudent && (
            <>
              <Image source={isTeacher ? { uri: teacher.UserInfo?.picture } : NonePicture}
                style={styles.profilePictSmall} />
            </>
          )}
        </View>
        {isPending && <Text style={styles.descText}>OFERTA OCZEKUJĄCA</Text>}
        <Text style={styles.title}>{item.Subject.name}</Text>
        <Text style={styles.descText}>Godziny: <Text style={styles.valText}>{item.hours.toString()}</Text></Text>
        <Text style={styles.descText}>Dni: <Text style={styles.valText}>{item.days.toString()}</Text></Text>

        {!showStudent && (
          <>
            <Text style={styles.descText}>Student: {(isStudent && isStudent2) ? student.UserInfo?.name : 'brak'}</Text>
          </>
        )}
        {showStudent && (
          <>
            <Text style={styles.descText}>Nauczyciel: {isTeacher ? teacher?.UserInfo.name : 'brak'}</Text>
          </>
        )}


      </View>
    </TouchableWithoutFeedback>
  );
  const renderItem = ({ item }) => (
    <Item
      student={item.LessonStudent} teacher={item.LessonTeacher} item={item}
      isStudent={item.LessonStudent != null} isTeacher={item.LessonTeacher != null}
      avatarUrl={showStudent ? '' : ''} isStudent2={item.LessonStudent?.lessonStudentUserInfoId !== null}
      isPending={item.isPending || item.LessonCandidates.items.length != 0}
    />
  );
  return (

    <>

      <View style={styles.box1}>
        <Image source={{ uri: user?.attributes?.picture }} style={{ width: 200, height: 200, borderRadius: 400 }} />
        <Text style={styles.userNameHeading}>Witaj{'\n'}{user?.attributes?.name}</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.horizontalBox}>
          <CustomCircleCheckbox text="Pobierane lekcje" onPress={() => { updateList(0) }}
            fgColor={showStudent ? "#fff" : "#000"} bgColor={showStudent ? "#3b71f3" : "#fff"} />
          <CustomCircleCheckbox text="Dawane lekcje" onPress={() => { updateList(1) }}
            fgColor={showStudent ? "#000" : "#fff"} bgColor={showStudent ? "#fff" : "#3b71f3"} />
        </View>
        <View styles={styles.box3}>
          {!loading ?
            <FlatList
              contentContainerStyle={{ paddingBottom: 100 }}
              data={showList}
              extraData={loading}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              onRefresh={reload}
              refreshing={loading}
            /> :
            <ActivityIndicator size='large' />
          }

        </View>
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
  },
  box3: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
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
  },
  item: {
    //backgroundColor: '#c4c4c4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  descText: {
    fontWeight: 'bold',
    marginRight: 100
  },
  valText: {
    fontWeight: 'normal'
  },
  profilePictSmall: {
    width: 80, //100x100
    height: 80,
    borderRadius: 400
  },
  boxImg: {
    position: 'absolute',
    right: 0,
    padding: 10
  }
})

export default HomeScreen