import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Button, Animated,StyleSheet, Text, TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animater from './animation';
import Browserwin from './browserwin';
const Stack = createNativeStackNavigator();
export default function MyStack(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Animater}
          options={{ title: 'Welcome to Techie'}}
        />
         <Stack.Screen name="browserwin" 
         component={Browserwin}
         options={{headerShown: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

