import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm'

export default class myapp extends Component{
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../logo/network.png')}
            />
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles  = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#2ecc71'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 100,
    height: 100
  }

});
