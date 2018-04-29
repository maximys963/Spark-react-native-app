import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Button, Image, TextInput, TouchableHighlight} from 'react-native';

export default class myapp extends Component{
  render(){
    return(
      <View style={styles.container}>
      <TextInput
        placeholderTextColor = 'rgba(255,255,255, 0.9)'
        placeholder="email or username"
        keyboardType="email-address"
        underlineColorAndroid="rgba(0,0,0,0)"

      style={styles.input}
        />
      <TextInput
        placeholder="password"
        secureTextEntry
        placeholderTextColor = 'rgba(255,255,255, 0.9)'
        underlineColorAndroid="rgba(0,0,0,0)"

      style={styles.input}
       />

       <Text>New User? Sign Up</Text>


     <Button style ={styles.buttonText}
       title="Login"
       color="#2ecc71"
       accessibilityLabel="Learn more about this purple button"
       />




      </View>
    );
  }
}
const styles  = StyleSheet.create({
container:{
flex: 1
},
input:{
  height: 40,
  marginBottom: 10,
  backgroundColor: 'rgba(46, 204, 113, 0.5)',
  paddingLeft: 5



},
buttonContainer:{

},
buttonText:{
textAlign: 'center',
}


});
