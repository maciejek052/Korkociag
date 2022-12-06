import {
  View, Text, StyleSheet, Image, useWindowDimensions,
  FlatList, TouchableWithoutFeedback, Alert, ActivityIndicator
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import ProfilePicture from '../../../assets/images/sydney.jpg'
import NonePicture from '../../../assets/images/none.png'
import { API, graphqlOperation } from 'aws-amplify'

import { LessonOffer, Subject, School } from '../../models'

import { lessons } from '../../../mocks/lessons'
import { users } from '../../../mocks/users'
import { useSelector, useDispatch } from 'react-redux'

import { fetchLessonsAsTeacher } from '../../redux/lessonsAsTeacher'
import { fetchUser } from '../../redux/userInformation'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'

import * as queries from '../../graphql/queries'


const HomeScreen = () => {

  const dispatch = useDispatch();


  useEffect(() => {

  }, [])

  useEffect(() => {

  }, [])


  const { user, loading } = useSelector((state) => state.userInformation)


  // mock shit only to show progress at uni


  const { height, width } = useWindowDimensions();
  const navigation = useNavigation()

  const [showStudent, setStudent] = useState(true)

  const [showList, setList] = useState([]);


  const [lessonsAsTeacher, setLessonsAsTeacher] = useState([]);

  const reload = async () => {
    const lessonQuery = await API.graphql(
      graphqlOperation(queries.listLessonOffers, { ownerCognitoId: user.attributes.sub })
    );
    setLessonsAsTeacher(lessonQuery)
    console.log(lessonQuery.data.listLessonOffers.items[1])
  }

  const updateList = (which) => {
    if (which == 0) {
      setStudent(true)
      setList([])
    } else {
      setStudent(false)
      setList(lessonsAsTeacher.data.listLessonOffers.items)
      // console.log(JSON.parse(lessonsAsTeacher))
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
  const Item = ({ title, student, item, isStudent, isTeacher }) => (
    <TouchableWithoutFeedback onPress={() => {
      goToLessonScreen({ item, title })
    }}>
      <View style={styles.item}>
        <View style={styles.boxImg}>

          {!showStudent && (
            <>
              <Image source={isStudent ? { uri: student.UserInfo.picture } : NonePicture}
                style={styles.profilePictSmall} />
            </>
          )}
          {showStudent && (
            <>
              <Image source={isTeacher ? { uri: teacher.UserInfo.picture } : NonePicture}
                style={styles.profilePictSmall} />
            </>
          )}
        </View>
        <Text style={styles.title}>{item.Subject.name}</Text>
        <Text style={styles.descText}>Godziny: <Text style={styles.valText}>{item.hours.toString()}</Text></Text>
        <Text style={styles.descText}>Dni: <Text style={styles.valText}>{item.days.toString()}</Text></Text>

        {!showStudent && (
          <>
            <Text style={styles.descText}>Student: {isStudent ? student.UserInfo.name : 'brak'}</Text>
          </>
        )}
        {showStudent && (
          <>
            <Text style={styles.descText}>Nauczyciel: {isTeacher ? teacher.UserInfo.name : 'brak'}</Text>
          </>
        )}


      </View>
    </TouchableWithoutFeedback>
  );
  const renderItem = ({ item }) => (
    <Item
      student={item.LessonStudent} teacher={item.LessonTeacher} item={item}
      isStudent={item.LessonStudent != null} isTeacher={item.LessonTeacher != null}
      avatarUrl={showStudent ? '' : ''}
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
          <CustomCircleCheckbox text="Reload" onPress={() => { reload() }}
            fgColor='white' bgColor='green' />
        </View>
        <View styles={styles.box3}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 100 }}
            data={showList}
            extraData={showStudent}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
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
    backgroundColor: '#c4c4c4',
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