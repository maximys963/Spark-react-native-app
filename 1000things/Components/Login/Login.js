import React, {Component} from 'react';
import {AppRegistry, Text, Button, TextInput, View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm'
import {StackNavigator} from 'react-navigation';




export default class myapp extends Component{
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../logo/world.png')}
            />
        </View>
        <View style={styles.formContainer}>

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
         <Button style ={styles.buttonText}
           title="Login"
           color="#2ecc71"
           accessibilityLabel="Learn more about this purple button"
           />




          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles  = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 100,
    height: 100
  },
  container:{
  paddingHorizontal: 20,
  marginBottom:120


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
