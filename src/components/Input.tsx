/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { Input } from 'react-native-elements';
import  Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardType,
        NativeSyntheticEvent, 
        StyleProp, Text, 
        TextInputSubmitEditingEventData, 
         View, 
        ViewStyle,
} from 'react-native';
import { loginstyles } from '../theme/loginTheme';




interface Props {
    iconName:string;
    placeHolder:string;
    keyboardType:KeyboardType;
    title:string;
    style?:StyleProp<ViewStyle>
    secureTextEntry?:boolean;
    onChangeText:((text: string) => void);
    onsubmitEditing:(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
    errorMessage:any;
    value:string;
    errorProps?:{},
    renderErrorMessage?:boolean;
 
}

export const Inputs = (
    {onChangeText,
    onsubmitEditing,
    secureTextEntry,
    errorMessage,
    keyboardType,
    errorProps,
    title,
    value,
    placeHolder,
    iconName,
    renderErrorMessage,
    style = {}}:Props
    ) => {


    return (
        <View style={{...style as any}}>

        <Text style={loginstyles.label}>{title}</Text>

        <Input
            style={loginstyles.input}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            onSubmitEditing={onsubmitEditing}
            value={value}
            errorMessage={errorMessage}
            renderErrorMessage={renderErrorMessage}
            keyboardAppearance='dark'
            autoCapitalize="none"
            autoCorrect={false}
            errorProps={errorProps}
            secureTextEntry={secureTextEntry}
            // underlineColorAndroid="white"
            placeholder={placeHolder}
            placeholderTextColor="rgba(255,255,255,0.4)"
            leftIcon={
            <Icon
            name={iconName}
            size={24}
            color='white'
            />
            }
        />
            
        </View>
    )
}
