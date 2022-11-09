import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeachLandingScreen from '../screens/TeachScreen/TeachLandingScreen';
import TeachSelectSubject from '../screens/TeachScreen/TeachSelectSubject';
import TeachSelectLocation from '../screens/TeachScreen/TeachSelectLocation';
import TeachSelectSchedule from '../screens/TeachScreen/TeachSelectSchedule';
import TeachSummaryScreen from '../screens/TeachScreen/TeachSummaryScreen';
import TeachOfferConfirmation from '../screens/TeachScreen/TeachOfferConfirmation';

const Stack = createNativeStackNavigator()
const TeachNavigation = () => {
    return <Stack.Navigator>
        <Stack.Screen name="TeachLandingScreen" component={TeachLandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TeachSelectSubject" component={TeachSelectSubject} options={{ headerShown: false }} />
        <Stack.Screen name="TeachSelectLocation" component={TeachSelectLocation} options={{ headerShown: false }} />
        <Stack.Screen name="TeachSelectSchedule" component={TeachSelectSchedule} options={{ headerShown: false }} />
        <Stack.Screen name="TeachSummaryScreen" component={TeachSummaryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TeachOfferConfirmation" component={TeachOfferConfirmation} options={{ headerShown: false }} />
    </Stack.Navigator>

}

export default TeachNavigation