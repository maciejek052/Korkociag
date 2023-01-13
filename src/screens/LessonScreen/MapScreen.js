import { View, Text, StyleSheet } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import MapView, { Marker, Circle } from 'react-native-maps'
import Geocoder from 'react-native-geocoding';
import { GOOGLE_API_KEY } from '../../../api_keys'

const MapScreen = ({ route, navigation }) => {
  Geocoder.init(GOOGLE_API_KEY, { language: "pl" });
  const { lessonObj, candidate } = route.params
  console.log(lessonObj)
  const teacherRadius = lessonObj.locationRadius
  const teacherAddress = lessonObj.address
  const studentAddress = !candidate ?
    lessonObj.LessonStudent?.studentAddress : candidate.studentAddress
  const mapRef = useRef(null)
  const [teacherCoords, setTeacherCoords] = useState({ lat: 0, lng: 0 })
  const [studentCoords, setStudentCoords] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    Geocoder.from(teacherAddress)
      .then(json => {
        var location = json.results[0].geometry.location;
        moveTo(location.lat, location.lng)
        setTeacherCoords({ lat: location.lat, lng: location.lng })
      })
  }, [])
  useEffect(() => {
    if (studentAddress) {
      Geocoder.from(studentAddress)
        .then(json => {
          var location = json.results[0].geometry.location
          setStudentCoords({ lat: location.lat, lng: location.lng })
        })
    }
  }, [])

  const INITIAL_POSITION = {
    latitude: 53.143291,
    longitude: 23.164089,
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

  return (
    <View style={styles.root}>
      <MapView style={styles.map}
        provider='google' initialRegion={INITIAL_POSITION} ref={mapRef}>
        <Marker title={"Nauczyciel"} coordinate={{
          latitude: teacherCoords.lat, longitude: teacherCoords.lng
        }} />
        {studentAddress != null &&
          <Marker title={"Uczeń"} pinColor={'green'} coordinate={{
            latitude: studentCoords.lat, longitude: studentCoords.lng
          }} />
        }
        {teacherRadius &&
          <Circle center={{ latitude: teacherCoords.lat, longitude: teacherCoords.lng }}
            radius={teacherRadius * 1000} strokeWidth={2} strokeColor={'#1f29d1'} fillColor={"rgba(59,133,243,0.25)"}
          />
        }
      </MapView>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
  },
  map: {
    height: '100%',
    width: '100%',
  }
})