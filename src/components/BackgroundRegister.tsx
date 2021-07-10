/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
import React from 'react'
import {  View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const BackgroundRegister = () => {



    return (
        <View>

        <LinearGradient
        colors={['#bd520a','white']} 
        style={{position:'absolute',
        width:1000,
        height:1200,
        top:-300,
        transform:[{
            rotate:'-75deg',
        }]
                
    }} 
        start={{x:0.1,y:0.1}}
        end={{x:0.9, y:0.9}}
        >

    </LinearGradient>
            
        </View>
    )
}
