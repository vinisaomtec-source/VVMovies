import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreens';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <navigatorConatiner>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    opitions={{headerShown: false}}
                    component={{HomeScreen}} />
            </Stack.Navigator>
        </navigatorConatiner>
    )
}