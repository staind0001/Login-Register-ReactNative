/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
import React from 'react'
import {  View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = () => {



    return (
        <View>

        <LinearGradient
        colors={['#4300b8','#b494f0','#b53b3b']} 
        style={{position:'absolute',
        width:1000,
        height:1200,
        top:-400,
        transform:[{
            rotate:'-65deg',
        }]
                
    }} 
        start={{x:0.1,y:0.1}}
        end={{x:0.9, y:0.9}}
        >

    </LinearGradient>
            
        </View>
    )
}
