/* eslint-disable no-trailing-spaces */
import React,{ useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
//import { HomeScreen } from '../screens/HomeScreen';
import { AuthContext } from '../context/AuthContext';

import { LoginScreen } from '../screens/LoginScreen';
import { PotectedScreen } from '../screens/PotectedScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

 export const Navigator = () => {

  const {status} =  useContext(AuthContext);

  if (status === 'checking') return <LoadingScreen />

 

  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
    }}
    >

      {
        ( status !== 'authenticated')
         ?  
         (
          <>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
         )
         :
        (
          <Stack.Screen name="PotectedScreen" component={PotectedScreen} />
        )
      }

    
      
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}