/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
import React,{ useContext,useEffect } from 'react';
import  Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity,KeyboardAvoidingView, Text, Keyboard, Alert} from 'react-native';

import {useFormik} from 'formik';
import * as Yup from 'yup';

import { Background } from '../components/Background';
import { Logo } from '../components/Logo';
import { loginstyles } from '../theme/loginTheme';
import { Inputs } from '../components/Input';
import { FAB } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';





interface Props extends StackScreenProps<any,any> {}



export const LoginScreen = ({ navigation }:Props) => {

    const {signIn,errorMessage,removeError} = useContext(AuthContext);

    const formik = useFormik({
        
        onSubmit:({email,password}) => {
            //console.log(formData);
            Keyboard.dismiss();
            signIn({correo:email,password});
           

        },
        initialValues:{
        email:"",
        password:"",
        },
        validationSchema:Yup.object(validationSchema()),
    
    });

    useEffect(() => {

        if (errorMessage.length === 0) return;

        Alert.alert(
        'Login Fail! 😔', 
        'Oops something went wrong 😱',
        [
            {
                text: 'OK',
                onPress:removeError
            }
        ]

        );
       
    }, [errorMessage]);

    const onLogin = (value:any) => {
        
        formik.handleSubmit(value);
        Keyboard.dismiss();
       

    };


    return (
        <>  
            <Background />

            <KeyboardAvoidingView
                style={{flex:1}}
                behavior={'height'}
            >

            <View style={loginstyles.formContainer}>

            <Logo />

            <Text style={loginstyles.title}>Login</Text>


            <Inputs 
                title={'Email'}
                placeHolder={'Type your e-mail'}
                iconName={'mail-outline'}
                keyboardType='email-address'
                onChangeText={ (text) => formik.setFieldValue("email", text) }
                onsubmitEditing={onLogin}
                renderErrorMessage={false}
                errorMessage={formik.errors.email}
                value={formik.values.email}
            />
       

            <Inputs 
                title={'Password'}
                placeHolder={'password'}
                iconName={'key-outline'}
                keyboardType='default'
                secureTextEntry={true}
                onChangeText={ (text) => formik.setFieldValue("password", text) }
                onsubmitEditing={onLogin}
                errorMessage={formik.errors.password}
                value={formik.values.password}
                
            />

            <View >
             <FAB 
             title="Login"
            color='#2c1b4b'
            size='large'
            onPress={formik.handleSubmit}
            titleStyle={{fontFamily:"MontserratAlternates-Bold"}}
            activeOpacity={0.6}
            icon={<Icon name="log-in-outline" size={30} color="white" />}
            />
            </View>

            <View style={loginstyles.newAccountContainter}>
            <Text style={loginstyles.newAccountTxt}>Do not you have an account yet? 😱</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.replace('RegisterScreen')}
                >
                   
                    <Text style={loginstyles.newAccountbtn}>Register 💪</Text>
                </TouchableOpacity>
            </View>

            </View>

            </KeyboardAvoidingView>
        </>
    );   
};


function validationSchema() {
    return {
        email: Yup.string().email().required(),
        password: Yup.string().required(),

    };
}





