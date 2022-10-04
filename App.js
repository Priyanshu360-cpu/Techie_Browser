import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { WebView } from 'react-native-webview';
let uril="https://www.google.com";
let a="";
export default function App(){
  return (
<>
<View style={styles.container}>
<View style={styles.marker}>
<TextInput onChangeText={(text) => {a=text;console.log(a)}}
 numberOfLines={10}
 style={{ height:200, textAlignVertical: 'top',}}>
 {"  "+uril}
</TextInput>
</View>
</View>
  <WebView
        source={{ uri: uril}}
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
  }
});
