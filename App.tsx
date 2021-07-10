import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/Navigator/Navigator';
import { ThemeProvider } from 'react-native-elements';



export const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
      <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  )
}
export default App;
