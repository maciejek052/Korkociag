import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'

const SearchLessonOfferScreen = ({ route, navigation }) => {
  const { item } = route.params
  console.log(item)
  return (
    <View style={styles.root}>
      <Text>{item.Subject.name}</Text>
      <Text>{item.LessonTeacher.UserInfo.name}</Text>
      <CustomButton text={"Zapisz się do lekcji"}/>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
})
export default SearchLessonOfferScreen