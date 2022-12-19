import {
  View, Text, StyleSheet, Alert, Image,
  useWindowDimensions
} from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { useSelector } from 'react-redux'
import MapView, { Marker, Circle } from 'react-native-maps'
import Geocoder from 'react-native-geocoding';
import CustomButton from '../../components/CustomButton'

import * as mutations from '../../graphql/mutations'
import { GOOGLE_API_KEY } from '../../../api_keys'

const SearchLessonOfferScreen = ({ route, navigation }) => {

  Geocoder.init(GOOGLE_API_KEY, { language: "pl" }); // use a valid API key

  const { height } = useWindowDimensions()
  const { user } = useSelector((state) => state.userInformation)
  const { item, radius } = route.params
  const mapRef = useRef(null)
  const [getLat, setLat] = useState(52.9)
  const [getLng, setLng] = useState(23.2)
  const [getLatUser, setLatUser] = useState(0)
  const [getLngUser, setLngUser] = useState(0)
  const userID = user.attributes.sub

  const INITIAL_POSITION = {
    latitude: 52.143291,
    longitude: 21.164089,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }


  const moveTo = async (lat, lng) => {
    const camera = await mapRef.current?.getCamera()
    if (camera) {
      camera.center = { latitude: lat, longitude: lng }
      mapRef.current?.animateCamera(camera, { duration: 1000 })
    }
  }

  useEffect(() => {
    Geocoder.from(item.address)
      .then(json => {
        var location = json.results[0].geometry.location;
        moveTo(location.lat, location.lng)
        setLat(location.lat)
        setLng(location.lng)
      })
  }, [])

  useEffect(() => {
    if (user.attributes.address != "-") {
      Geocoder.from(user.attributes.address)
        .then(json => {
          var location = json.results[0].geometry.location;
          setLatUser(location.lat)
          setLngUser(location.lng)
        })
    }
  }, [])


  console.log(item)

  const assingAllert = () => {
    Alert.alert(
      "Powiązanie",
      "Czy na pewno chcesz zapisać się do tej lekcji?",
      [
        {
          text: "Anuluj",
          onPress: () => null,
          style: "cancel"
        },
        { text: "OK", onPress: () => { assignToOffer() } }
      ]
    );
  }

  const assignToOffer = async () => {
    try {
      if (item.LessonStudent?.lessonStudentUserInfoId === null) {
        const operation = await API.graphql({
          query: mutations.updateLessonStudent, variables: {
            input: {
              id: item.id,
              lessonStudentUserInfoId: userID,
              _version: item.LessonStudent._version
            }
          }
        })
      } else {
        const operation = await API.graphql(graphqlOperation(mutations.createLessonStudent, {
          input: {
            id: item.id,
            lessonStudentUserInfoId: userID
          }
        }))
      }
      Alert.alert("Sukces", "Pomyślnie zapisano użytkownika jako ucznia do oferty")
    } catch (e) {
      console.log(e)
      Alert.alert("Błąd przy zapisywaniu do oferty", e.message)
    }
  }

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>{item.Subject.name}</Text>
      <Text style={styles.descText}>Termin korepetycji: <Text style={styles.valText}>{item.days + ''}</Text></Text>
      <Text style={styles.descText}>Godziny korepetycji: <Text style={styles.valText}>{item.hours + ''}</Text></Text>
      <View style={styles.teacherBox}>
        <Text style={styles.teacherText2}>Nauczyciel:
          <Text style={styles.valText}> {item.LessonTeacher.UserInfo.name}</Text>
        </Text>
        <Image source={{ uri: item.LessonTeacher.UserInfo.picture }} style={styles.picture} />
      </View>

      <MapView style={[styles.map, { height: height * 0.25 }]}
        provider='google' initialRegion={INITIAL_POSITION} ref={mapRef}>
        <Marker title={"Nauczyciel"} coordinate={{
          latitude: getLat, longitude: getLng
        }} />
        <Marker title={"Uczeń"} pinColor={'green'} coordinate={{
          latitude: getLatUser, longitude: getLngUser
        }} />

        {item.place === 'student' &&
          <Circle center={{ latitude: getLat, longitude: getLng }}
            radius={item.locationRadius * 1000} strokeWidth={2} strokeColor={'#1f29d1'} fillColor={"rgba(59,133,243,0.25)"}
          />
        }
        {item.place === 'teacher' &&
          <Circle center={{ latitude: getLatUser, longitude: getLngUser }}
            radius={radius * 1000} strokeWidth={2} strokeColor={'#46ff33'} fillColor={"rgba(117, 242, 105, 0.25)"}
          />
        }
      </MapView>
      <Text style={styles.descText}>Adres: <Text style={styles.valText}>{item.address}</Text></Text>
      <Text style={styles.descText}>Miejsce: <Text style={styles.valText}>{item.place === 'student' ? "u studenta" : "u nauczyciela"}</Text></Text>
      {item.place === 'student' &&
        <Text style={styles.descText}>Promień dojazdu przez nauczyciela: <Text style={styles.valText}>{item.locationRadius} km</Text></Text>
      }
      <Text style={styles.descText}>Upewnij się, że znaczniki znajdują się w promieniu ustalonego zasięgu</Text>
      <CustomButton text={"Zapisz się do lekcji"} onPress={assignToOffer} />
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    //alignItems: 'center',
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
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
  teacherBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 400,
    paddingRight: 100,
  },
  teacherText2: {
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: "10%"
  },
  map: {
    paddingBottom: 10,
    width: '100%',
  }
})
export default SearchLessonOfferScreen