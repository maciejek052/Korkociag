import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchLandingScreen from '../screens/SearchScreen/SearchLandingScreen';
import SearchSelectSubject from '../screens/SearchScreen/SearchSelectSubject';
import SearchSelectLocation from '../screens/SearchScreen/SearchSelectLocation'
import SearchSelectSchedule from '../screens/SearchScreen/SearchSelectSchedule'
import SearchSummaryScreen from '../screens/SearchScreen/SearchSummaryScreen'
const Stack = createNativeStackNavigator()
const SearchNavigation = () => {
  return <Stack.Navigator>
      <Stack.Screen name="SearchLandingScreen" component={SearchLandingScreen} options={{headerShown: false}} />
      <Stack.Screen name="SearchSelectSubject" component={SearchSelectSubject} options={{headerShown: false}} />
      <Stack.Screen name="SearchSelectLocation" component={SearchSelectLocation} options={{headerShown: false}} />
      <Stack.Screen name="SearchSelectSchedule" component={SearchSelectSchedule} options={{headerShown: false}} />
      <Stack.Screen name="SearchSummaryScreen" component={SearchSummaryScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  
}

export default SearchNavigation