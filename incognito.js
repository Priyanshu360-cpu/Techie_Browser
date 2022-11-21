import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Image,TouchableOpacity, Animated,StyleSheet, Text, TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';
import roboincognito from './assets/roboincognito.png';
export default function App({navigation, route }){
    return (
    <>
    <View style={{width: 455, height: 1000,backgroundColor:"#302e2e"}}>
    <View style={{position:'relative',top:50,left:50,backgroundColor:"white",height:28,width:255}}>
        <TextInput onChangeText={(text)=>{console.log(text)}}></TextInput>
    </View>
    <Image source={roboincognito} style={{height:200,width:200,position:'relative',top:280,left:85}}></Image>
    <Text style={{position:'relative',top:290,left:138,color:"white"}}>Incognito Mode</Text>
    </View>
    </>);
    }