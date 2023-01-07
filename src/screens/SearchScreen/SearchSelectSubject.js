import { View, Text, StyleSheet, useWindowDimensions, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Subject, School } from '../../models'
import { DataStore, API, graphqlOperation } from 'aws-amplify';
import BlackboardImage from '../../../assets/images/undraw_teaching_f-1-cm.svg'
import BasicInput from '../../components/BasicInput'

import * as queries from '../../graphql/queries'

const primarySchoolID = 'd7b39472-2ba2-4ca5-9e79-f92fb3de4981'
const highSchoolID = 'fa562cc0-b374-4cf3-a6df-401f505d4462'
const collegeID = 'f2954893-80ee-4230-b439-bb1418bb4ec2'
const afterschoolID = '45a4b791-f7a4-41df-8bf4-a00c3db83885'

const SearchSelectSubject = ({ route, navigation }) => {
  const { height } = useWindowDimensions()
  const { level } = route.params
  const pickedSchoolID = () => {
    switch (level) {
      case 'Szkoła podstawowa':
        return primarySchoolID;
        break;
      case 'Szkoła średnia':
        return highSchoolID;
        break;
      case 'Studia':
        return collegeID;
        break;
      case 'Aktywności pozaszkolne':
        return afterschoolID;
        break;
    }
  }

  const [masterData, setMasterData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getSubjects()
  }, [])


  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      });
      setFilteredData(newData)
      setSearch(text)
    } else {
      setFilteredData(masterData)
      setSearch(text)
    }
  }

  const getSubjects = async () => {
    try {
      const subjects = await API.graphql(
        graphqlOperation(queries.listSubjects, { filter: { subjectSchoolId: { eq: pickedSchoolID() } } })
      );
      // const subjects = await DataStore.query(Subject, s => s.subjectSchoolId.eq(pickedSchoolID()))
      setMasterData(subjects.data.listSubjects.items)
      setFilteredData(subjects.data.listSubjects.items)
      //console.log(response)
    } catch (e) {
      console.log(e)
      Alert.alert("Błąd przy pobieraniu tematów", e.message)
    }
  }



  const onSubjectPressed = (subject) => {
    navigation.navigate('SearchSelectLocation', { level: level, subject: subject })
  }
  return (
    <View style={styles.root}>
      <BlackboardImage style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
      <Text style={styles.heading}>Wybierz przedmiot</Text>
      <Text style={styles.text}>Wpisz w poniższym polu fragment nazwy przedmiotu, którego chcesz się nauczyć i wybierz przedmiot z propozycji</Text>
      <BasicInput value={search} setValue={(text) => searchFilter(text)}></BasicInput>

      <FlatList showsVerticalScrollIndicator={false} style={styles.list} data={filteredData} keyExtractor={(item) => item.id} renderItem={({ item }) => (
        <Text onPress={() => onSubjectPressed(item)} style={styles.item}>{item.name}</Text>
      )} />
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
    flexGrow: 1
  },
  logo: {
    width: '100%',
    maxWidth: 350,
    maxHeight: 200,
    marginVertical: 0
  },
  heading: {
    fontSize: 40,
    textAlign: "center",
    color: "#0094ff", // #ffb600
    fontWeight: "bold"
  },
  text: {
    textAlign: 'center',
    margin: 20,
    fontSize: 16,
  },
  item: {
    padding: 3,
    color: '#0094ff',
    fontSize: 20,
  },
  list: {

  }
})
export default SearchSelectSubject