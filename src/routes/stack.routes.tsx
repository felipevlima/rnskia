import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';

export type RootStackParamList = {
  StackHome: undefined,
  Profile: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StackHome' component={Home} />
      <Stack.Screen name='Profile' component={Profile} /> 
    </Stack.Navigator>
  );
}