import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
//import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { PotectedScreen } from '../screens/PotectedScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator();

 export const Navigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
    }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="PotectedScreen" component={PotectedScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}