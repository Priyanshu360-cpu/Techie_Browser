import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Image,TouchableOpacity, Animated,StyleSheet, Text, TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';
import next_button from './assets/next.png';
let a="https://www.google.com";
export default function App({navigation, route }) {
  
    return (
  <>
  <View style={styles.container}>
  <View style={styles.marker}>
  <TextInput onChangeText={(text) => {a=text;}
  }
  onSubmitEditing={()=>{navigation.navigate('browserwin', {url: a})}}
   numberOfLines={10}
   style={{ height:100, textAlignVertical: 'top',}}>
   {"  "+route.params.url}
  </TextInput>

  </View>
  <TouchableOpacity onPress={()=>{navigation.navigate('browserwin', {url: a})}}>
  <Image source={next_button} style={styles.next_button}/>
  </TouchableOpacity>
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
      height:30,
      width:270
    },
    next_button:{
      position:'relative',
      top:17,
      left:280,
      height:20,
      width:20
    },

    fadingText: {
      fontSize: 28
    },
  });
  