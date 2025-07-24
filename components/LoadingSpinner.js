import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { globalStyles, COLORS } from '../styles/globalStyles';

export default function LoadingSpinner() {
  return (
    <View style={[globalStyles.container, globalStyles.center]}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}
