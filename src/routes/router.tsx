import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Payments } from '../screens/Payments';
import { FontAwesome5 } from '@expo/vector-icons'
import { RouteProp } from '@react-navigation/native';
import { GenZ } from '../screens/GenZ';
import { StackRoute } from './stack.routes';

export type RootStackParamList = {
  Home: undefined,
  Cartões: undefined
  GenZ: undefined
}

const iconsName = { 'Home': 'home', 'Cartões': 'credit-card', 'GenZ': 'bed' }

const Tab = createBottomTabNavigator<RootStackParamList>();

const ScreenOptions = (route: RouteProp<RootStackParamList, keyof RootStackParamList>) => {
  return {
    headerShown: false, 
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      iconName = iconsName[route.name]
      return <FontAwesome5 name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "#4A69C4",
    tabBarInactiveTintColor: '#7c7c7c',
  }
}

export function Router() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ScreenOptions(route)}>
      <Tab.Screen name='Home' component={StackRoute} />
      <Tab.Screen name='Cartões' component={Payments} /> 
      <Tab.Screen name='GenZ' component={GenZ} />
    </Tab.Navigator>
  );
}