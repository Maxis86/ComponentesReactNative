import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false // le quito todos los header a la plantalla
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      
    </Stack.Navigator>
  );
}