import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeachLandingScreen from '../screens/TeachScreen/TeachLandingScreen';
const Stack = createNativeStackNavigator()
const TeachNavigation = () => {
    return <Stack.Navigator>
        <Stack.Screen name="TeachLandingScreen" component={TeachLandingScreen} options={{headerShown: false}} />
    </Stack.Navigator>

}

export default TeachNavigation