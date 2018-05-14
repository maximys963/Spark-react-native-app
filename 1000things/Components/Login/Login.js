import React, {Component} from 'react';
import {AppRegistry, Text, Button, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import LoginForm from './LoginForm'
import {StackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import ButtonR  from "apsl-react-native-button";




export default class Login extends Component{
  static navigationOptions= {
    title: "Login",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
   header: null,



  };
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
            style={styles.input}
            placeholderTextColor = 'rgba(255,255,255, 0.9)'
            placeholder="імейл адреса"
            keyboardType="email-address"
            underlineColorAndroid="rgba(0,0,0,0)"
            onSubmitEditing={
               ()=> navigate("Second",{})
            }


            />
          </View>
        <View style={styles.TextInputStyle}>

           <Icon style={styles.Icons} name="fingerprint" color='rgba(255,255,255, 0.9)' size={30} />

          <TextInput
            placeholder="пароль"
            secureTextEntry
            placeholderTextColor = 'rgba(255,255,255, 0.9)'
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.input}
            onSubmitEditing={
               ()=> navigate("Second",{})
            }
           />


       </View>

         <ButtonR style ={styles.buttonText}
          textStyle={{color:"white"}}
           onPress={
             ()=> navigate("Second",{})
           }

           >Увійти</ButtonR>
         <TouchableHighlight>
           <Text
           style={{alignSelf: 'center', color:'grey'} }

            >Зареєструватись тут</Text></TouchableHighlight>

        </View>
      </KeyboardAvoidingView>
    );
  }

}


const styles  = StyleSheet.create({
  Icons:{

  },
  TextInputStyle:{
    flexDirection: 'row',
    backgroundColor: 'rgba(46, 204, 113, 0.5)',
    height: 40,
    marginBottom: 10,
    width: 260,
    borderRadius: 20,
    paddingLeft:5,
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
