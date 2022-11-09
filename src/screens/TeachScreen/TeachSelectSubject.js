import { View, Text, StyleSheet, useWindowDimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import BlackboardImage from '../../../assets/images/undraw_teaching_f-1-cm.svg'
import BasicInput from '../../components/BasicInput'

const data = ['język angielski', 'język polski', 'matematyka', 'fizyka', 'geografia', 'chemia', 'informatyka', 'przyroda',
  'biologia', 'język hiszpański', 'język niemiecki', 'język rosyjski', 'plastyka', 'muzyka']

const TeachSelectSubject = ({ route, navigation }) => {
  const { height } = useWindowDimensions()
  const { level } = route.params
  const [dataFromState, setData] = useState(data)
  // fix needed, its bugged because it doesn't update when user delete characters
  const searchName = (input) => {
    if (input) {
      let data = dataFromState
      let searchData = data.filter(
        function (item) {
          const itemData = item
            ? item.toUpperCase()
            : ''.toUpperCase();
          const textData = input.toUpperCase()
          return itemData.indexOf(textData) > -1
        }
      )
      setData(searchData)
    } else {
      setData(data)
    }
  }
  const onSubjectPressed = (subject) => {
    console.warn(subject + " pressed")
    navigation.navigate('TeachSelectLocation', { level: level, subject: subject })
  }
  return (
    <View style={styles.root}>
      <BlackboardImage style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
      <Text style={styles.heading}>Wybierz przedmiot</Text>
      <Text style={styles.text}>Wpisz w poniższym polu fragment nazwy przedmiotu, którego chcesz nauczać i wybierz przedmiot z propozycji</Text>
      <BasicInput setValue={(text) => searchName(text)}></BasicInput>

      <FlatList showsVerticalScrollIndicator={false} style={styles.list} data={dataFromState} renderItem={({ item }) => (
        <Text onPress={() => onSubjectPressed(item)} style={styles.item}>{item}</Text>
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
export default TeachSelectSubject