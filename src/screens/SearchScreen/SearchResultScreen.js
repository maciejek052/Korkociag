import {
  View, Text, StyleSheet, Alert, FlatList, TouchableWithoutFeedback,
  Image, useWindowDimensions
} from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchImage from '../../../assets/images/undraw_web_search_re_efla.svg'
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../../graphql/queries'

const SearchResultScreen = ({ route, navigation }) => {
  const { height } = useWindowDimensions()
  const { level, subject, city, radius, address, placeStudent, placeTeacher, days, time } = route.params
  const daysOfWeek = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela']
  const timeIntervals2 = ['6:00 - 9:00', '9:00 - 12:00', '12:00 - 15:00', '15:00 - 18:00', '18:00 - 21:00', '21:00 - 24:00']

  const [queryResult, setQueryResult] = useState([])

  const filterDaysArray = () => {
    let ar = []
    for (var i = 0; i < days.length; i++) {
      if (days[i])
        ar.push({ days: { contains: daysOfWeek[i] } })
    }
    return ar
  }
  const filterTimeArray = () => {
    let ar = []
    for (var i = 0; i < time.length; i++) {
      if (time[i]) {
        ar.push({ hours: { contains: timeIntervals2[i] } })
      }
    }
    return ar
  }

  const filterPlaceArray = () => {
    let ar = []
    if (placeStudent)
      ar.push({ place: { eq: "student" } })
    if (placeTeacher)
      ar.push({ place: { eq: "teacher" } })
    return ar
  }


  useEffect(() => {
    findOffers()
  }, [])

  const findOffers = async () => {
    try {
      const query = await API.graphql(
        graphqlOperation(queries.listLessonOffers, {
          filter: {
            _deleted: { ne: true },
            or: filterDaysArray(),
            and: {
              or: filterTimeArray(),
              lessonOfferSubjectId: { eq: subject.id },
              city: { eq: city }, // its not optimal, consider changing this!!!!
              or: filterPlaceArray()
            }
          }
        })
      )
      console.log("searching complete. found " + query.data.listLessonOffers.items.length + " offers")
      //console.log(query.data.listLessonOffers.items)
      var ar = query.data.listLessonOffers.items
      // uncomment line below to filter lessons which already are assigned to student
      // ar = query.data.listLessonOffers.items.filter((o) => { return !o.LessonStudent })
      setQueryResult(ar)
    } catch (e) {
      Alert.alert("Błąd podczas pobierania ofert", e.message)
    }
  }

  const Item = ({ item, picture }) => (
    <TouchableWithoutFeedback onPress={() => {
      navigation.navigate('SearchLessonOfferScreen', {
        item: item
      });
    }}>
      <View style={styles.item}>
        <View style={styles.boxImg}>
          <Image source={{ uri: picture }}
            style={styles.profilePictSmall} />
        </View>
        <Text style={styles.title}>{item.LessonTeacher.UserInfo.name}</Text>
        <Text style={styles.descText}>Godziny: <Text style={styles.valText}>{item.hours.toString()}</Text></Text>
        <Text style={styles.descText}>Dni: <Text style={styles.valText}>{item.days.toString()}</Text></Text>
        <Text style={styles.descText}>Adres: <Text style={styles.valText}>{item.address}</Text></Text>
        <Text style={styles.descText}>Miejsce: <Text style={styles.valText}>
          {item.place === "student" ? "U ucznia" : "U nauczyciela"}</Text></Text>
      </View>
    </TouchableWithoutFeedback>
  )

  const renderItem = ({ item }) => (
    <Item
      item={item} picture={item.LessonTeacher.UserInfo.picture}
    />
  );

  return (
    <View style={styles.root}>
      <SearchImage style={[styles.logo, { maxHeight: height * 0.2 }]} />
      <Text style={styles.heading}>Wyniki wyszukiwania</Text>
      <Text style={styles.smalltxt}>Liczba znalezionych ofert: <Text style={styles.valText}>{queryResult.length}</Text></Text>
      <View styles={styles.box3}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          data={queryResult}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    //alignItems: 'center',
    //padding: 20,
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column'
  },
  box3: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
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
    width: 100, 
    height: 100,
    borderRadius: 400
  },
  boxImg: {
    position: 'absolute',
    right: 0,
    padding: 10
  },
  logo: {
    //width: '70%',
    maxWidth: 200,
    maxHeight: 150,
    marginTop: 30,
    alignSelf: 'center'
  },
  heading: {
    fontSize: 32,
    textAlign: "center",
    color: "#ffb600", // #ffb600
    fontWeight: "bold"
  },
  smalltxt: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
export default SearchResultScreen