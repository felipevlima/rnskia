import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from './src/routes/router';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle='dark-content'/>
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
