/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { FAB } from 'react-native-elements';
import  Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { AuthContext } from '../context/AuthContext';

export const PotectedScreen = () => {

    const {user,token,logout} = useContext(AuthContext);


    return (

        <LinearGradient
        colors={['#14853f','#12d35c','#12d35c','#3bbf6d']} 
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
           

                <Text
                    style={{
                        fontFamily:'MontserratAlternates-ExtraBold',
                        color:'white',
                        fontSize:40
                        
                    }}
                >
                      Welcome!
                </Text>

             <View >
             <FAB 
             title="Logout"
            color='#2c1b4b'
            size='large'
            onPress={logout}
            titleStyle={{fontFamily:"MontserratAlternates-Bold"}}
            activeOpacity={0.6}
            icon={<Icon name="log-out-outline" size={30} color="white" />}
            />
            </View>
                    <View
                         style={{
                          
                            alignItems:'center',
                            justifyContent:'center',
                            marginHorizontal:30,
                        }}
                    >
                        <Text
                             style={{
                                fontFamily:'MontserratAlternates-ExtraBold',
                                color:'#2c1b4b',
                                fontSize:15
                                
                            }}
                        >
                            {JSON.stringify(user,null,5)}
                        </Text>

                        <Text
                             style={{
                                fontFamily:'MontserratAlternates-ExtraBold',
                                color:'#2c1b4b',
                                fontSize:15
                                
                            }}
                        >
                            {JSON.stringify(token,null,5)}
                        </Text>

                    </View>


        </View>

        </LinearGradient>
    )
}
