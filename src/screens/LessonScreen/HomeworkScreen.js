import {
  View, Text, StyleSheet, FlatList, TouchableWithoutFeedback,
  TouchableOpacity,
  Alert
} from 'react-native'
import Dialog from "react-native-dialog";
import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Ionicons from '@expo/vector-icons/Ionicons'
import moment from 'moment'
import 'moment/locale/pl'
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'

const HomeworkScreen = ({ route, navigation }) => {
  const { lessonObj, isUserStudent, offerHasStudent } = route.params
  const [listHw, setListHw] = useState([])
  const [listChanged, setListChanged] = useState(false)
  const [dialogVisible, setDialogVisible] = useState(false)
  const [hwText, setHwText] = useState("")
  useEffect(() => {
    const offerId = lessonObj.id

    const fetchHomeworks = async () => {
      const query = await API.graphql(
        graphqlOperation(queries.listHomework, { filter: { lessonofferID: { eq: offerId } } })
      );
      setListHw(query.data.listHomework.items)
    }
    fetchHomeworks()
  }, [listChanged])

  const homeworkDialog = () => {
    if (!isUserStudent && offerHasStudent) {
      setDialogVisible(true)
    }
  }
  const deleteAlert = (item, description) => {
    if (!isUserStudent && offerHasStudent) {
      Alert.alert(
        "Usuwanie pracy domowej",
        "Czy na pewno chcesz usunąć pracę domową o treści: \n\n" + description,
        [
          {
            text: "Anuluj",
            onPress: () => null,
            style: "cancel"
          },
          { text: "OK", onPress: () => { deleteHomework(item) } }
        ]
      );
    }
  }
  const addHomework = async () => {
    if (!hwText.trim().length) {
      Alert.alert("Błąd", "Treść pracy domowej nie może być pusta")
    } else {
      try {
        const offer = await API.graphql(graphqlOperation(mutations.createHomework, {
          input: {
            lessonofferID: lessonObj.id,
            description: hwText,
            date: new Date().toISOString()
          }
        }))
        setListChanged(!listChanged)
        setDialogVisible(false)
      } catch (e) {
        console.log(e.message)
        Alert.alert("Błąd", e)
      }
    }
  }

  const deleteHomework = async (item) => {
    try {
      const deleted = await API.graphql({ query: mutations.deleteHomework, variables: { input: { id: item.id} } })
      setListChanged(!listChanged)
    } catch (e) {
      console.log(e.message)
      Alert.alert("Błąd", e)
    }
  }

  const Item = ({ description, date, item }) => (
    <TouchableWithoutFeedback onPress={() => {
      deleteAlert(item, description)
    }}>
      <View style={styles.item}>

        <Text style={styles.title}>{moment(date).format('LLLL')}</Text>
        <Text style={styles.descText}>{description}</Text>

      </View>
    </TouchableWithoutFeedback>
  );

  const renderItem = ({ item }) => (
    <Item
      description={item.description} date={new Date(item.date)} item={item}
    />
  );
  return (
    <View style={styles.root}>

      <View
        style={styles.topButtons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={{ fontSize: 35 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Prace domowe</Text>

        <TouchableOpacity onPress={() => homeworkDialog()}>
          <Ionicons name="add-outline" style={{ fontSize: 35, color: '#3493D9' }} />
        </TouchableOpacity>

      </View>

      <View styles={styles.box3}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          data={listHw}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Dodaj pracę domową</Dialog.Title>

        <Dialog.Input label="Wpisz treść pracy domowej" wrapperStyle="" onChangeText={(text) => setHwText(text)}>

        </Dialog.Input>
        <Dialog.Button label="Anuluj" onPress={() => { setDialogVisible(false) }} />
        <Dialog.Button label="Dodaj" onPress={addHomework} />
      </Dialog.Container>

    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
  item: {
    backgroundColor: '#c4c4c4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  descText: {
    marginTop: 5,
    fontSize: 15
  },
  valText: {
    fontWeight: 'normal'
  },
  topButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingVertical: 20
  },
})

export default HomeworkScreen