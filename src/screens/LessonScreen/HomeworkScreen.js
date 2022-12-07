import {
  View, Text, StyleSheet, FlatList, TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Ionicons from '@expo/vector-icons/Ionicons'

import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'

const HomeworkScreen = ({ route, navigation }) => {
  const homeworks = route.params
  const [listHw, setListHw] = useState([])
  useEffect(() => {
    const offerId = homeworks.lessonObj.id

    const fetchHomeworks = async () => {
      const query = await API.graphql(
        graphqlOperation(queries.listHomework, { filter: { lessonofferID: { eq: offerId } } })
      );
      setListHw(query.data.listHomework.items)
    }
    console.log(listHw)
    fetchHomeworks()
  }, [])


  const Item = ({ description, date }) => (
    <TouchableWithoutFeedback onPress={() => {

    }}>
      <View style={styles.item}>

        <Text style={styles.title}>{date.toLocaleDateString('pl-PL')}</Text>
        <Text style={styles.descText}>{description}</Text>

      </View>
    </TouchableWithoutFeedback>
  );

  const renderItem = ({ item }) => (
    <Item
      description={item.description} date={new Date(item.date)}
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

        <TouchableOpacity>
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
    marginTop: 10,
    marginRight: 100
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