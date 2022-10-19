import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchLandingScreen from '../screens/SearchScreen/SearchLandingScreen';
import SearchSelectSubject from '../screens/SearchScreen/SearchSelectSubject';
import SearchSelectLocalization from '../screens/SearchScreen/SearchSelectLocalization'
import SearchSelectSchedule from '../screens/SearchScreen/SearchSelectSchedule'
const Stack = createNativeStackNavigator()
const SearchNavigation = () => {
  return <Stack.Navigator>
      <Stack.Screen name="SearchLandingScreen" component={SearchLandingScreen} options={{headerShown: false}} />
      <Stack.Screen name="SearchSelectSubject" component={SearchSelectSubject} options={{headerShown: false}} />
      <Stack.Screen name="SearchSelectLocalization" component={SearchSelectLocalization} options={{headerShown: false}} />
      <Stack.Screen name="SearchSelectSchedule" component={SearchSelectSchedule} options={{headerShown: false}} />
    </Stack.Navigator>
  
}

export default SearchNavigation