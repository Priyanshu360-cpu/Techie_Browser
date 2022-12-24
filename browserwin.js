import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Image,TouchableOpacity, Animated,StyleSheet, Text, TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';
import next_button from './assets/next.png';
import bookmark from './assets/bookmark.png';
import error from './assets/error.gif';
let b={};
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
  onSubmitEditing={()=>{
    var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    if(a.match(regex))console.log(true);
    else console.log(false);
    console.log(a.match(regex));
    if(!a.includes(".com"))
    navigation.navigate('Browser',{url:`www.google.com/search?q=${a}`});
    else
    navigation.navigate('Browser', {url: a})}}
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
          onNavigationStateChange={(event) => {
            navigation.navigate('Browser', {url: event.url});
          }}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.log('WebViews error: ', nativeEvent);
            b=nativeEvent;
            return(<><Text>4048</Text></>);
          }}
          renderError={(errorName) => {
            console.log(b);
            return(
            <View style={{position:"relative",top:0,left:0,height:650,width:550,backgroundColor:"black"}}>
              <Image source={error} style={{height:650,width:370,position:'relative',top:0,left:0}}></Image>
            <View style={{position:"relative",top:0,left:0,height:150,width:50,backgroundColor:"white"}}>
            <Text style={{color:"white"}}>
              Hi{b.description}
            </Text>
            </View>
            </View>
              );
          }}
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
  