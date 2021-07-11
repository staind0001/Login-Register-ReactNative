/* eslint-disable semi */
/* eslint-disable no-labels */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
import React, { createContext, useReducer,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import backendApi from '../api/BackendApi';
import { LoginData, LoginResponse, Usuario, RegisterData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './AuthReducer';
//import { Alert } from 'react-native';



type AuthContextProps= {
    errorMessage: string;
    token: string | null;
    user:  Usuario |null;
    status: 'checking' | 'authenticated' | 'unauthenticated';
    signUp: (RegisterData:RegisterData) => void;
    signIn: (LoginData: LoginData) => void;
    logout: () => void;
    removeError: () => void;
}


const authInitialState: AuthState = {
    status: 'checking',
    token:null,
    user:null,
    errorMessage:'',
}



export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: any ) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async() => {

       const token = await AsyncStorage.getItem('token')
        
       if( !token ) return dispatch({type:'unauthenticated'});

       //IF TOKEN   
       const resp = await backendApi.get('/auth');
       if (resp.status !== 200 ){
           return dispatch({type:'unauthenticated'});
       } 

       await AsyncStorage.setItem('token',resp.data.token);

       dispatch({type:'signUp',

       payload:{
           token:resp.data.token,
           user:resp.data.usuario,
       },


    });

    }


    const signUp = async ({correo,nombre,password}:RegisterData) => {

        try {

            const {data} = await backendApi.post<LoginResponse>('/usuarios',{correo,password,nombre});
            dispatch({type:'signUp',
            payload:{
                token:data.token,
                user:data.usuario,
            },
            
        });

        await AsyncStorage.setItem('token',data.token);

        } catch (error) {

            dispatch({type:'addError',
            payload:error.response.data.msg || 'oops something went wrong',
            });
  
        }


    };

    const signIn = async( { correo, password }: LoginData ) => {
        try {

            const {data} = await backendApi.post<LoginResponse>('/auth/login',{correo,password} );
            dispatch({type:'signUp',
            payload:{
                token:data.token,
                user:data.usuario,
            },
        });

        await AsyncStorage.setItem('token',data.token);
            
        } catch (error) {
            
            dispatch({type:'addError',
            payload:error.response.data.errors[0].msg || 'oops something went wrong',
        });
            
        }
    };

    const logout = async() => {

        await AsyncStorage.removeItem('token');
        dispatch({type:'logout'})
    };

    const removeError = () => {
        dispatch({type:'removeError'});
    };



    return(
        <AuthContext.Provider 
            value={{
                ...state,
                signUp,
                signIn,
                logout,
            removeError,

            }}
        >
            {children}
        </AuthContext.Provider>
    
    );
}