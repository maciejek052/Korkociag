import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import GraduationImage from '../../../assets/images/undraw_graduation_re_gthn.svg'
import CustomButton from '../../components/CustomButton'

const SearchLandingScreen = () => {
  const { height } = useWindowDimensions()
  const onPrimarySchoolPressed = () => {
    console.warn("Primary school pressed")
    navigation.navigate('SearchSelectSubject', {level: 'Szkoła podstawowa'})
  }
  const onHighSchoolPressed = () => {
    console.warn("High school pressed")
    navigation.navigate('SearchSelectSubject', {level: 'Szkoła średnia'})
  }
  const onCollegePressed = () => {
    console.warn("College pressed")
    navigation.navigate('SearchSelectSubject', {level: 'Studia'})
  }
  const onAfterSchoolPressed = () => {
    console.warn("After-school pressed")
    navigation.navigate('SearchSelectSubject', {level: 'Aktywności pozaszkolne'})
  }
  const navigation = useNavigation()

  return (
    <View style={styles.root}>
      <GraduationImage style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
      <Text style={styles.heading}>Wybierz swój etap nauki</Text>
      <Text style={styles.text}>Aby dobrać Ci jak najlepszego nauczyciela w naszej aplikacji występuje podział na poziomy. Wybierz odpowiedni poziom, a jeżeli
        interesują cię korepetycje z zagadnień pozaszkolnych wybierz ostatnią opcję
      </Text>
      <CustomButton text="Szkoła podstawowa" bgColor={'#ffb600'} onPress={onPrimarySchoolPressed} />
      <CustomButton text="Szkoła średnia" bgColor={'#1ca600'} onPress={onHighSchoolPressed} />
      <CustomButton text="Studia" bgColor={'#ff0f0f'} onPress={onCollegePressed} />
      <CustomButton text="Aktywności pozaszkolne" onPress={onAfterSchoolPressed} />

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
    color: "#ffb600", // #ffb600
    fontWeight: "bold"
  },
  text: {
    textAlign: 'center',
    marginVertical: 15
  }
})

export default SearchLandingScreen