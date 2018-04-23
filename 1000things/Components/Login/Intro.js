import React, {Component} from 'react';
import {AppRegistry, Text, Button, TextInput, View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm'
import {StackNavigator} from 'react-navigation';




export default class Intro extends Component{
  static navigationOptions= {
    title: "Intro",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
   header: null,



  };
  render(){
  var {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
      <Button style ={styles.buttonText}
        onPress={
          ()=> navigate("First",{})
        }
        title="Sign in"
        color="#2ecc71"
        accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );
  }

}
//  StackNavigator({
//   Login: {
//     screen: Login,
//   },
// });

const styles  = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 20,
    flexDirection:'column',
    justifyContent: 'center',

  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 100,
    height: 100,
    margin: 0,
  },
  input:{
    height: 40,
    marginBottom: 10,
    backgroundColor: 'rgba(46, 204, 113, 0.5)',
    paddingLeft: 5



  },
  formContainer:{
    marginBottom:70,


  },
  buttonText:{
  textAlign: 'center',
  }

});
