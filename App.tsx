import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import Route from './src/routes'
import light from './src/styles/theme/light';
import dark from './src/styles/theme/dark';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Route />
    </ThemeProvider>
  );
}