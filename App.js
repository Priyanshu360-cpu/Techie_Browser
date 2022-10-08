import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Image, Button, Animated,StyleSheet, Text, TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import surf from './assets/surf.png';
import Animater from './animation';
import Browserwin from './browserwin';
import hmp from './assets/icon.png'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function MyStack(){
    return(
          <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if(route.name=="Home")
            return <Image source={hmp} style={{height:30,width:30}}></Image>
            if(route.name=="Browser")
            return <Image source={surf} style={{height:30,width:30}}></Image>
          }})}>
             <Tab.Screen
               name="Home"
               component={Animater}
               options={{ title: 'Home'}}
             />
              <Tab.Screen name="Browser" 
              component={Browserwin}
              options={{headerShown: false}}
               />
               </Tab.Navigator>
         </NavigationContainer>
  );
};

