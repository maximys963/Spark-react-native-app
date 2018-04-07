import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, KeyboardAvoidingView} from 'react-native';


export default class Second extends Component{
  render(){
    return(

        <View style={styles.logoContainer}>
        <Text>Hello World !</Text>
          <Button style ={styles.buttonText}

            title="Go Login"
            color="#2ecc71"
            accessibilityLabel="Learn more about this purple button"
            />

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
