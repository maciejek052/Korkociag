import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchLandingScreen from '../screens/SearchScreen/SearchLandingScreen';
import SearchSelectSubject from '../screens/SearchScreen/SearchSelectSubject';
const Stack = createNativeStackNavigator()
const SearchNavigation = () => {
  return <Stack.Navigator>
      <Stack.Screen name="SearchLandingScreen" component={SearchLandingScreen} options={{headerShown: false}} />
      <Stack.Screen name="SearchSelectSubject" component={SearchSelectSubject} options={{headerShown: false}} />
    </Stack.Navigator>
  
}

export default SearchNavigation