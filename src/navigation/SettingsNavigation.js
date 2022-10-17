import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen'
const Stack = createNativeStackNavigator()
const HomeNavigation = () => {
    return <Stack.Navigator>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown: false}} />
    </Stack.Navigator>

}

export default HomeNavigation