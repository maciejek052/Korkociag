import { View, Text, StyleSheet, FlatList, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import CustomCircleCheckbox from '../../components/CustomCircleCheckbox'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
const StudentAcceptanceScreen = ({ route, navigation }) => {
  const { lessonObj } = route.params
  const candidatesArray = lessonObj.LessonCandidates.items
  const [listArray, setListArray] = useState(candidatesArray)
  const [loading, setLoading] = useState(false)
  const acceptAlert = (item, user) => {
    Alert.alert(
      "Przypisanie ucznia do oferty",
      "Czy chcesz przypisać ucznia " + user?.name + " do oferty?\n" +
      "Jeżeli się zgodzisz, prośby pozostałych uczniów zostaną automatycznie odrzucone",
      [
        {
          text: "Anuluj",
          onPress: () => null,
          style: "cancel"
        },
        { text: "OK", onPress: () => { acceptQuery(item, user) } }
      ]
    );
  }
  const rejectAlert = (item, user) => {

    Alert.alert(
      "Odrzucenie ucznia",
      "Czy na pewno chcesz odrzucić prośbę ucznia " + user?.name + "?",
      [
        {
          text: "Anuluj",
          onPress: () => null,
          style: "cancel"
        },
        { text: "OK", onPress: () => { rejectQuery(item, user) } }
      ]
    );

  }
  const goToMap = () => {

  }

  const acceptQuery = async (item, user) => {
    try {
      // deleting all candidates
      const list = await API.graphql(
        graphqlOperation(queries.listLessonCandidates, { filter: { lessonofferID: { eq: item.lessonofferID } } })
      );
      const toremove = list.data.listLessonCandidates.items
      const txnMutation = toremove.map((txn, i) => {
        return `mutation${i}: deleteLessonCandidate(input: {id: "${txn.id}"}) { id }`;
      });

      const rem = await API.graphql(
        graphqlOperation(`
      mutation batchMutation {
        ${txnMutation}
      }
    `)
      );
      // create connection between student and lesson
      const obj = {
        id: item.lessonofferID,
        lessonStudentUserInfoId: item.lessonCandidateUserInfoId, 
        studentAddress: item.studentAddress
      }
      const newStudentQuery = await API.graphql({ query: mutations.createLessonStudent, variables: { input: obj } })
      Alert.alert("Sukces", "Połączono ucznia " + user.name + " z ofertą")
      navigation.popToTop()
    } catch (e) {
      Alert.alert("Błąd przy dodawaniu ucznia", e.message)
      console.log(e)
    }
  }

  const rejectQuery = async (item, user) => {
    try {
      const del = await API.graphql({ query: mutations.deleteLessonCandidate, variables: { input: { id: item.id } } })
      Alert.alert("Sukces", "Odrzucono prośbę ucznia " + user.name)
      //setListArray(candidatesArray.filter(e => e.id !== item.id))
      navigation.popToTop()
    } catch (e) {
      Alert.alert("Błąd przy odrzucaniu ucznia", e.message)
      console.log(e)
    }
  }

  // i know it could be coded much better but it works :p
  const Item = ({ user, createdAt, studentAddress, item }) => (
    <>
      <View style={[styles.item, { backgroundColor: '#c4c4c4' }]}>
        <View style={styles.boxImg}>
          <Image source={{ uri: user.picture }}
            style={styles.profilePictSmall} />
        </View>
        <Text style={styles.title}>{user.name}</Text>
        {
          lessonObj.place === 'student' &&
          <Text style={styles.descText}>Adres: <Text style={styles.valText}>{studentAddress}</Text></Text>
        }
        <Text style={styles.descText}>Data prośby o dołączenie: <Text style={styles.valText}>{createdAt.toLocaleString()}</Text></Text>
        <View style={styles.horizontalBox}>
          <CustomCircleCheckbox text="Akceptuj ucznia" bgColor={'#00ff00'} onPress={() => acceptAlert(item, user)} />
          <CustomCircleCheckbox text="Odrzuć ucznia" bgColor={'#ff2100'} onPress={() => rejectAlert(item, user)} />
          <CustomCircleCheckbox text="Pokaż mapę" bgColor={'#ffb600'} onPress={() => goToMapScreen(item)} />
        </View>
      </View>
    </>
  );

  const renderItem = ({ item }) => (
    <Item
      user={item.UserInfo} createdAt={new Date(item.createdAt)}
      studentAddress={item.studentAddress} item={item}
    />
  );

  const goToMapScreen = (item) => {
    navigation.navigate('MapScreen', {
      lessonObj: lessonObj,
      candidate: item
    });
  }
  return (
    <View style={styles.root}>

      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={listArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default StudentAcceptanceScreen

const styles = StyleSheet.create({
  root: {
    marginTop: 50
  },
  horizontalBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  descText: {
    fontWeight: 'bold',
    marginRight: 100
  },
  valText: {
    fontWeight: 'normal'
  },
  profilePictSmall: {
    width: 100, //100x100
    height: 100,
    borderRadius: 400
  },
  boxImg: {
    position: 'absolute',
    right: 0,
    padding: 10
  },

})