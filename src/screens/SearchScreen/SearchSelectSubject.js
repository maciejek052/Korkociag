import { View, Text, StyleSheet, useWindowDimensions, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Subject, School } from '../../models'
import { DataStore, API, graphqlOperation } from 'aws-amplify';
import BlackboardImage from '../../../assets/images/undraw_teaching_f-1-cm.svg'
import BasicInput from '../../components/BasicInput'


const data = ['język angielski', 'język polski', 'matematyka', 'fizyka', 'geografia', 'chemia', 'informatyka', 'przyroda',
  'biologia', 'język hiszpański', 'język niemiecki', 'język rosyjski', 'plastyka', 'muzyka']

const SearchSelectSubject = ({ route, navigation }) => {
  const { height } = useWindowDimensions()
  const { level } = route.params


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
      // TODO replace with GraphQL queries
      // when i figure out how to filter by nested values
      const schools = await DataStore.query(School, s => s.name.eq(level))
      const subjects = await DataStore.query(Subject, s => s.subjectSchoolId.eq(schools[0].id))

      setMasterData(subjects)
      setFilteredData(subjects)
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