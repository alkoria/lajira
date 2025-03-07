import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header'; 

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <Text>Welcome to My App!</Text>
    </View>
  );
}
