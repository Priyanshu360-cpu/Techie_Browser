import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Image,TouchableOpacity, Animated,StyleSheet, Text, TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';
import roboincognito from './assets/roboincognito.png';
export default function App({navigation, route }){
    return (
    <>
    <Image source={roboincognito} style={{height:200,width:200,position:'relative',top:280,left:85}}></Image>
    <Text style={{position:'relative',top:300,left:133}}>Incognito Mode</Text>
    </>);}