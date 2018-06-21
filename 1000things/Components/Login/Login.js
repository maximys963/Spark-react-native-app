import React, {Component} from 'react';
import {AppRegistry, Text, Button, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import LoginForm from './LoginForm'
import {StackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import ButtonR  from "apsl-react-native-button";
import ValidationComponent from 'react-native-form-validator';
import axios from 'axios';




export default class Login extends ValidationComponent{
  constructor(props){
    super(props);
    this.state = {
      SignEmail: '',
      SignPassword: '',
      validationDone: false,
      emailError: false,
      passwordError: false,
      ErrorEmailColor: '#e74c3c',
      NormEmailColor: 'rgba(46, 204, 113, 0.5)',
      ErrorPasswordColor: '#e74c3c',
      NormPasswordColor: 'rgba(46, 204, 113, 0.5)',
    }
  }
  static navigationOptions= {
    title: "Login",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
   header: null,
  };
  _onPressSighnIn = () => {
    console.log("validationDone before" + this.state.validationDone)
    this.validate({
      SignEmail:{required:true, email: true},
      SignPassword:{required: true, minlength:5}
    });
    this.setState({
      validationDone: true,
    })
    console.log("validationDone after" + this.state.validationDone)
    console.log(this.isFieldInError('SignEmail'));
    console.log(this.isFieldInError("SignPassword"));
    console.log(this.state.SignEmail);
    console.log(this.state.SignPassword);
  }

  render(){
  var {navigate} = this.props.navigation;
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../logo/spark.png')}
            />
        </View>
        <View style={styles.formContainer}>

          <View  style={styles.TextInputStyle} >
          <Icon style={styles.Icons} name="email" color='rgba(255,255,255, 0.9)' size={30} />

          <TextInput
            style={{  flexDirection: 'row',
              backgroundColor: 'rgba(46, 204, 113, 0.5)',
              height: 40,
              marginBottom: 10,
              width: 260,
              borderRadius: 20,
              paddingLeft:5,}}
            placeholderTextColor = 'rgba(255,255,255, 0.9)'
            placeholder="імейл адреса"
            keyboardType="email-address"
            underlineColorAndroid="rgba(0,0,0,0)"
            ref='SignEmail'
            onChangeText={(SignEmail) => this.setState({SignEmail})}
            />



          </View>
        <View style={styles.TextInputStyle}>

           <Icon style={styles.Icons} name="fingerprint" color='rgba(255,255,255, 0.9)' size={30} />

          <TextInput
            placeholder="пароль"
            secureTextEntry
            placeholderTextColor = 'rgba(255,255,255, 0.9)'
            underlineColorAndroid="rgba(0,0,0,0)"
            ref='SignPassword'
            style={{  flexDirection: 'row',
              backgroundColor: 'rgba(46, 204, 113, 0.5)',
              height: 40,
              marginBottom: 10,
              width: 260,
              borderRadius: 20,
              paddingLeft:5,}}
              onChangeText={(SignPassword) => this.setState({SignPassword})}

           />



       </View>

         <ButtonR style ={styles.buttonText}
          textStyle={{color:"white"}}
           onPress={this._onPressSighnIn}

           >Увійти</ButtonR>
         <TouchableHighlight>
           <Text
           style={{alignSelf: 'center', color:'grey'} }
           onPress={
             ()=>navigate("RegistrationForm")
           }

            >Зареєструватись тут</Text></TouchableHighlight>

        </View>
      </KeyboardAvoidingView>
    );
  }

}


const styles  = StyleSheet.create({
  Icons:{

  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},

  container:{
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 20,
    flexDirection:'column',
    justifyContent: 'flex-end',
    alignItems: 'center'


  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 150,
    height: 170,
    margin: 0,
  },
  input:{
    height: 40,
    width: 220,
    marginBottom: 10,
    paddingLeft: 5,
    color: 'white',




  },
  formContainer:{
    marginBottom:70,


  },
  buttonText:{
  borderColor: "#2ecc71",
  backgroundColor: "#2ecc71",
  borderRadius: 20,
  height:40,
  }

});
