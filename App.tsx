import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/Navigator/Navigator';
import { ThemeProvider } from 'react-native-elements';
import { AuthProvider } from './src/context/AuthContext';


const AppState = ({children}:{ children: JSX.Element |  JSX.Element[] }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};



export const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AppState>
      <Navigator />
       </AppState>
      </ThemeProvider>
    </NavigationContainer>
  )
}
export default App;
