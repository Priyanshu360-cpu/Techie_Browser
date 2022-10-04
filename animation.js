import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect }from "react";
import { ImageBackground,Button, Image , Animated,StyleSheet, Text, TextInput, View } from 'react-native';
import icon from './assets/icon.png';
import bg from './assets/bg.gif';
function Appus() {
    const [count, setCount] = useState("");
    const name=["G","a","m","e","r","s","\n","T","e","c","h","i","e","s","\n","A","l","l"," ","P","u","r","p","o","s","e"," "];
    useEffect(() => {
      for(let i=0;i<name.length;i++)
      setTimeout(() => {
        if(name[i]=='\n') setCount((count)=>"");
        else
        setCount((count) => count + name[i]);
      }, (i+1)*1000);
    } ,[]);
    return  <Text>{count}</Text> ;
  }
 
export default function  Animater({navigation}) {
    const [count, setCount] = useState("");
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const FadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        useNativeDriver:true,
        duration: 5000
      }).start();
    };
    return (
      <>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <Animated.View
      style={[
        styles.fadingContainer,
        {
          opacity: fadeAnim
        }
      ]}
    >
      <View style={{width: 355, height: 300}} >
      <Image source={icon} onLoadEnd={FadeIn} style={{width: 180, height: 180,alignSelf:'center',position:'absolute',top:70}} />
       </View>
    </Animated.View>
    <Text style={styles.fadingText} >Browser For <Appus></Appus></Text>
    <View style={{height:80}}></View>
    <View style={{width:100,height:50,alignSelf:'center'}}>
    <Button title="Dive In" onPress={() =>
        navigation.navigate('browserwin', {url: 'https://www.google.com'})}/>
    </View>
    </ImageBackground>
    </>);
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#676d75',
      height: 80,
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    marker:{
      position:'relative',
      top:40,
      backgroundColor:"#ffffff",
      height:30
    },
    fadingText: {
      fontSize: 28,
      color:"#ffffff",
      alignSelf:'center',
      textDecorationLine: 'underline'

    },
  });
  