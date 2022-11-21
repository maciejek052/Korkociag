import {
  View, Text, StyleSheet, Image, useWindowDimensions,
  FlatList, TouchableWithoutFeedback, Alert, ActivityIndicator
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import ProfilePicture from '../../../assets/images/sydney.jpg'

import { Auth } from 'aws-amplify'

import { lessons } from '../../../mocks/lessons'
import { users } from '../../../mocks/users'
import { useSelector, useDispatch } from 'react-redux'

import { fetchUser } from '../../redux/userInformation'

const HomeScreen = () => {
  const { user, loading } = useSelector((state) => state.userInformation)

  // mock shit only to show progress at uni
  var lessonsAsStudent = [lessons[0], lessons[1]]
  var lessonsAsTeacher = [lessons[2]]

  const { height, width } = useWindowDimensions();
  const navigation = useNavigation()

  const [showStudent, setStudent] = useState(true)

  const [showList, setList] = useState(lessonsAsStudent);

  const updateList = (which) => {
    if (which == 0) {
      setStudent(true)
      setList(lessonsAsStudent)
    } else {
      setStudent(false)
      setList(lessonsAsTeacher)
    }
  }
  const goToLessonScreen = (id, student) => {
    navigation.navigate('SingleLessonScreen', {
      id: id,
      student: showStudent
    });
  }
  var img = user.attributes?.picture

  const Item = ({ title, time, days, person, avatarUrl, id }) => (
    <TouchableWithoutFeedback onPress={() => {
      goToLessonScreen(id)
    }}>
      <View style={styles.item}>
        <View style={styles.boxImg}>
          <Image source={{ uri: avatarUrl }}
            style={styles.profilePictSmall} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.descText}>Godziny: <Text style={styles.valText}>{time}</Text></Text>
        <Text style={styles.descText}>Dni: <Text style={styles.valText}>{days}</Text></Text>
        <Text style={styles.descText}>{showStudent ? 'Nauczyciel: ' + person : 'Uczeń: ' + person}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
  const renderItem = ({ item }) => (
    <Item title={item.subject} time={item.time} days={item.days} id={item.id}
      person={showStudent ? item.teacher.profileInfo.fullName : item.student.profileInfo.fullName}
      avatarUrl={showStudent ? item.teacher.profileInfo.avatarUrl : item.student.profileInfo.avatarUrl}
    />
  );
  return (

    <>

      <View style={styles.box1}>
        <Image source={{ uri: user.attributes?.picture }} style={{ width: 200, height: 200, borderRadius: 400 }} />
        <Text style={styles.userNameHeading}>Witaj{'\n'}{user.attributes?.name}</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.horizontalBox}>
          <CustomCircleCheckbox text="Pobierane lekcje" onPress={() => { updateList(0) }}
            fgColor={showStudent ? "#fff" : "#000"} bgColor={showStudent ? "#3b71f3" : "#fff"} />
          <CustomCircleCheckbox text="Dawane lekcje" onPress={() => { updateList(1) }}
            fgColor={showStudent ? "#000" : "#fff"} bgColor={showStudent ? "#fff" : "#3b71f3"} />
        </View>
        <View styles={styles.box3}>
          <FlatList
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
    alignItems: 'center'
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
    fontWeight: 'bold'
  },
  valText: {
    fontWeight: 'normal'
  },
  profilePictSmall: {
    width: 100,
    height: 100,
    borderRadius: 400
  },
  boxImg: {
    position: 'absolute',
    right: 0,
    padding: 10
  }
})

export default HomeScreen