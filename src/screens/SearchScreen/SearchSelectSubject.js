import { View, Text, StyleSheet, useWindowDimensions, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import BlackboardImage from '../../../assets/images/undraw_teaching_f-1-cm.svg'
import CustomInput from '../../components/CustomInput'

const data = ['język angielski', 'język polski', 'matematyka', 'fizyka']

const SearchSelectSubject = ({ route, navigation }) => {
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

  return (
    <View style={styles.root}>
      <BlackboardImage style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
      <Text style={styles.heading}>Wybierz przedmiot</Text>
      <Text style={styles.text}>Wpisz w poniższym polu fragment nazwy przedmiotu, którego chcesz się nauczyć i wybierz przedmiot z propozycji</Text>
      <CustomInput setValue={(text) => searchName(text)}></CustomInput>
      <FlatList data={dataFromState} renderItem={({ item }) => (
        <Text style={styles.item}>{item}</Text>
      )} />
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '100%',
    maxWidth: 350,
    maxHeight: 250,
    marginVertical: 15
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
  }
})
export default SearchSelectSubject