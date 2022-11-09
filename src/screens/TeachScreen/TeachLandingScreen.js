import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TeacherImage from '../../../assets/images/undraw_teaching_re_g7e3.svg'
import CustomButton from '../../components/CustomButton'

const TeachLandingScreen = () => {
  const { height } = useWindowDimensions()
  const onLevelPressed = (level) => {
    navigation.navigate('TeachSelectSubject', { level: level })
  }
  const navigation = useNavigation()

  return (
    <View style={styles.root}>
      <TeacherImage style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
      <Text style={styles.heading}>Wybierz poziom nauczania</Text>
      <Text style={styles.text}>Aby trafić do odpowiedniej grupy uczniów, wybierz proszę na jakim poziomie chcesz udzielać korepetycji.
      Jeżeli planujesz uczyć czegoś niezwiązanego z przedmiotami szkolnymi wybierz ostatnią opcję
      </Text>
      <CustomButton text="Szkoła podstawowa" bgColor={'#ffb600'} onPress={() => onLevelPressed('Szkoła podstawowa')} />
      <CustomButton text="Szkoła średnia" bgColor={'#1ca600'} onPress={() => onLevelPressed('Szkoła średnia')} />
      <CustomButton text="Studia" bgColor={'#ff0f0f'} onPress={() => onLevelPressed('Studia')} />
      <CustomButton text="Aktywności pozaszkolne" onPress={() => onLevelPressed('Aktywności pozaszkolne')} />

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
    marginVertical: 0
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

export default TeachLandingScreen