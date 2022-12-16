import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import GraduationImage from '../../../assets/images/undraw_graduation_re_gthn.svg'
import CustomButton from '../../components/CustomButton'

const SearchLandingScreen = () => {
  const { height } = useWindowDimensions()
  const onLevelPressed = (level) => {
    navigation.navigate('SearchSelectSubject', { level: level })
  }
  const navigation = useNavigation()

  return (
    <View style={styles.root}>
      <GraduationImage style={[styles.logo, { height: height * 0.5 }]} resizeMode="contain" />
      <Text style={styles.heading}>Wybierz swój etap nauki</Text>
      <Text style={styles.text}>Aby dobrać Ci jak najlepszego nauczyciela w naszej aplikacji występuje podział na poziomy. Wybierz odpowiedni poziom, a jeżeli
        interesują cię korepetycje z zagadnień pozaszkolnych wybierz ostatnią opcję
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

export default SearchLandingScreen