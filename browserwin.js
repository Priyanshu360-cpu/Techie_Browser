import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Button, Animated,StyleSheet, Text, TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';
let a="";
export default function App({navigation, route }) {
    return (
  <>
  <View style={styles.container}>
  <View style={styles.marker}>
  <TextInput onChangeText={(text) => {a=text;console.log(a)}}
   numberOfLines={10}
   style={{ height:200, textAlignVertical: 'top',}}>
   {"  "+route.params.url}
  </TextInput>
  </View>
  </View>
    <WebView
          source={{ uri: route.params.url}}
        />
  </>
       
    );
  }
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#676d75',
      height: 80,
    },
    marker:{
      position:'relative',
      top:40,
      backgroundColor:"#ffffff",
      height:30
    },
    fadingText: {
      fontSize: 28
    },
  });
  