/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
import React,{ useContext, useEffect } from 'react';
import { KeyboardAvoidingView, Text, View ,Keyboard,TouchableOpacity, Alert} from 'react-native';
import { BackgroundRegister } from '../components/BackgroundRegister';
import { Inputs } from '../components/Input';
import  Icon from 'react-native-vector-icons/Ionicons';
import { loginstyles } from '../theme/loginTheme';
import { FAB } from 'react-native-elements';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { StackScreenProps } from '@react-navigation/stack';
//import { Logo } from '../components/Logo';
import { AuthContext } from '../context/AuthContext';



interface Props extends StackScreenProps<any,any> {}


export const RegisterScreen = ({ navigation }:Props) => {

    const {signUp,errorMessage,removeError} = useContext(AuthContext);

    
    const formik = useFormik({
        onSubmit:({email,username,password}) => {
            //console.log(formData);
            Keyboard.dismiss();
            signUp({correo:email,nombre:username,password});

        },
        initialValues:{
        email:"",
        password:"",
        repeatPassword:"",
        username:"",
        },
        validationSchema:Yup.object(validationSchema()),
    
    });

    useEffect(() => {

        if (errorMessage.length === 0) return;

        Alert.alert(
        'Register Fail! 😔', 
        'Oops something went wrong some of the fields is not correct 😱',
        [
            {
                text: 'OK',
                onPress:removeError
            }
        ]
        );
    
    }, [errorMessage]);

    const onRegister = (value:any) => {
        
        formik.handleSubmit(value);
        Keyboard.dismiss();

    };




    return (
        <>  
            <BackgroundRegister />

            <KeyboardAvoidingView
                style={{flex:1}}
                behavior={'height'}
            >

            <View style={loginstyles.registerContainer}>

            {/* <Logo /> */}

            <Text style={loginstyles.title}>Register</Text>

            
            <Inputs 
                title={'Username'}
                placeHolder={'username'}
                iconName={'person-outline'}
                keyboardType='default'
                onChangeText={ (text) => formik.setFieldValue("username", text) }
                onsubmitEditing={onRegister}
                errorMessage={formik.errors.username}
                value={formik.values.username}
                
            />


            <Inputs 
                title={'Email'}
                placeHolder={'e-mail'}
                iconName={'mail-outline'}
                keyboardType='email-address'
                onChangeText={ (text) => formik.setFieldValue("email", text) }
                onsubmitEditing={onRegister}
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
                onsubmitEditing={onRegister}
                errorMessage={formik.errors.password}
                value={formik.values.password}
                
            />

            <Inputs 
                title={'Repeat your password'}
                placeHolder={'repeat your password'}
                iconName={'key-outline'}
                keyboardType='default'
                secureTextEntry={true}
                onChangeText={ (text) => formik.setFieldValue("repeatPassword", text) }
                onsubmitEditing={onRegister}
                errorMessage={formik.errors.repeatPassword}
                value={formik.values.repeatPassword}
                
            />

            <View >
             <FAB 
             title="sign up"
            color='#853805'
            size='large'
            onPress={formik.handleSubmit}
            titleStyle={{fontFamily:"MontserratAlternates-Bold"}}
            activeOpacity={0.6}
            icon={<Icon name="trail-sign-outline" size={30} color="white" />}
            />
            </View>

            <View style={loginstyles.newAccountContainter}>
            <Text style={loginstyles.newAccountTxt}>Do you already have an account 🤔</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.replace('LoginScreen')}
                >
                   
                    <Text style={loginstyles.newAccountbtn}> sign in </Text>
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
        username: Yup.string().required(),
        password: Yup.string().required(),
        repeatPassword:Yup.string().required().oneOf([Yup.ref("password")]),
    
    };
}
