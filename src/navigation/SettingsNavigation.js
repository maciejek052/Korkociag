import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen'
import EditProfileScreen from '../screens/EditProfileScreen';
import ChangePasswordScreen from '../screens/EditProfileScreen/ChangePasswordScreen';

const Stack = createNativeStackNavigator()
const SettingsNavigation = () => {
    return <Stack.Navigator>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown: false}} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{headerShown: false}} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{headerShown: false}} />
    </Stack.Navigator>

}

export default SettingsNavigation