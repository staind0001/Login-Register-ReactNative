/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export const LoadingScreen = () => {
    return (

        <LinearGradient
        colors={['#350160','#9b87ab','#e03e5e','#f37790']} 
        style={{...StyleSheet.absoluteFillObject }} 
        start={{x:0.1,y:0.1}}
        end={{x:0.8, y:0.8}}
        >


        <View
            style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}
        >
                <ActivityIndicator 
                    size={120}
                    color='#4b0585'
                />

                <Text
                    style={{
                        fontFamily:'MontserratAlternates-ExtraBold',
                        color:'white',
                        fontSize:40
                        
                    }}
                >
                        Now Loading...
                </Text>

        </View>

        </LinearGradient>
    )
}
