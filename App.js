import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import AppNavigator from './navigation/AppNavigator';

import { COLORS } from './styles/globalStyles';
export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={COLORS.background} />
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}
