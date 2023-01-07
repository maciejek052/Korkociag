import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SingleLessonScreen from '../screens/LessonScreen/SingleLessonScreen'
import HomeworkScreen from '../screens/LessonScreen/HomeworkScreen'
import PendingLessonScreen from '../screens/LessonScreen/PendingLessonScreen';
import StudentAcceptanceScreen from '../screens/LessonScreen/StudentAcceptanceScreen';

const Stack = createNativeStackNavigator()
const HomeNavigation = () => {
    return <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="SingleLessonScreen" component={SingleLessonScreen} options={{headerShown: false}} />
        <Stack.Screen name="HomeworkScreen" component={HomeworkScreen} options={{headerShown: false}} />
        <Stack.Screen name="PendingLessonScreen" component={PendingLessonScreen} options={{headerShown: false}} />
        <Stack.Screen name="StudentAcceptanceScreen" component={StudentAcceptanceScreen} options={{headerShown: false}} />
    </Stack.Navigator>

}

export default HomeNavigation