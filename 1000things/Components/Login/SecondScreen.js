import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';


export default class Second extends Component{
  render(){
    return(

        <View style={styles.logoContainer}>
        <Text>Hello World !</Text>
        </View>

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
  }

});
