import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';

import { Home } from './src/screens/Home'

import light from './src/theme/light';
import dark from './src/theme/dark';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}