import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Image,TouchableOpacity, Animated,StyleSheet, Text, TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';
import next_button from './assets/next.png';
import bookmark from './assets/bookmark.png';
let a="https://www.google.com";
export default function App({navigation, route }) {
    return (
  <>
  <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
  <Image source={{uri:route.params.url+'/favicon.ico'}} style={{height:30,width:30,position:'relative',top:45,left:8}}></Image>
  <>
  <View style={styles.marker}>
  <TextInput onChangeText={(text) => {a=text.trim();}
  }
  onSubmitEditing={()=>{navigation.navigate('Browser', {url: a})}}
   numberOfLines={10}
   style={{ height:100, textAlignVertical: 'top',}}>
   {"  "+route.params.url}
  </TextInput>
  </View>
  </>
  <TouchableOpacity onPress={()=>{navigation.navigate('Browser', {url: a})}}>
  <Image source={next_button} style={styles.next_button}/> 
  </TouchableOpacity>
  <Image source={bookmark} style={styles.booked}/>
  </View>
    <WebView
            originWhitelist={['*']}
          source={{ uri: route.params.url}}
          onHttpError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
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
      top:15,
      left:42,
      backgroundColor:"#ffffff",
      height:30,
      width:270
    },
    next_button:{
      position:'relative',
      top:-9,
      left:286,
      height:20,
      width:20
    },
    booked:{
      position:'relative',
      top:-29,
      left:320,
      height:20,
      width:20
    },
    fadingText: {
      fontSize: 28
    },
  });
  