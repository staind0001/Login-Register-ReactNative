/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import { Button } from 'react-native-elements';


export const HomeScreen = () => {
    return (

        <LinearGradient
        colors={['#b95722','#e0773e','#e03e5e','#f37790']} 
        style={{...StyleSheet.absoluteFillObject }} 
        start={{x:0.1,y:0.1}}
        end={{x:0.8, y:0.8}}
        >

        
    
    <View style={{alignItems:'center', paddingTop:0,alignContent:'center'}}>
     
         

     <Neomorph
             inner={true} // <- enable shadow inside of neomorph
             swapShadows={true} // <- change zIndex of each shadow color
             style={{

                 shadowRadius: 5,
                 borderRadius: 10,
                 backgroundColor: '#b95722',
                 width: 410,
                 height: 60,
                 flexDirection:'row',
                 alignContent:'center',
                 alignItems:'center',
                 
             }}
             >

         <Text style= {{
         fontSize:30,
         fontWeight:'bold',
         color:'white',
         textAlign:'center',
         alignContent:'center',
         paddingLeft:120,
         }}
         >Home</Text>
            
     </Neomorph>

     <Button title="Hey!" />

        </View>


       
    </LinearGradient>

       
    )
}
