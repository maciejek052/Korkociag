import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import SearchNavigation from './SearchNavigation';
import SettingsNavigation from './SettingsNavigation'

import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#3b71f3' }} >
            <Tab.Screen name="Home" component={HomeNavigation} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                )
            }} />
            <Tab.Screen name="Szukaj" component={SearchNavigation} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="search" size={size} color={color} />
                )
            }} />
            <Tab.Screen name="Ustawienia" component={SettingsNavigation} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={size} color={color} />
                )
            }} />

        </Tab.Navigator>
    );
}

export default TabNavigator