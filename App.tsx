import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import Route from './src/routes'
import light from './src/theme/light';
import dark from './src/theme/dark';


const Stack = createStackNavigator();

export default function App() {
  return (
      <ThemeProvider theme={light}>
        <Route/>
      </ThemeProvider>
  );
}