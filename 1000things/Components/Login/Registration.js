import React, {Component} from 'react';
import {AppRegistry, Text, Button, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import LoginForm from './LoginForm'
import {StackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import ButtonR  from "apsl-react-native-button";




export default class Registration extends Component{
  static navigationOptions={
    title: "Registaration",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
   header: null,



  };
  render(){
  var {navigate} = this.props.navigation;
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>



        <View style={styles.formContainer}>

          <View style={styles.TopInputsContainer}>
              <View style={styles.avatar}></View>
              <View style={styles.TopInputs}>
              <View  style={styles.NameSurname}>
              <TextInput
                style={styles.input}
                placeholderTextColor = 'rgba(255,255,255, 0.9)'
                placeholder="Введіть ваше ім'я"
                keyboardType="email-address"
                underlineColorAndroid="rgba(0,0,0,0)"
                />
              </View>
              <View  style={styles.NameSurname} >

              <TextInput
                style={styles.input}
                placeholderTextColor = 'rgba(255,255,255, 0.9)'
                placeholder="Введіть ваше прізвище"
                keyboardType="email-address"
                underlineColorAndroid="rgba(0,0,0,0)"

                />
              </View>
              </View>

          </View>

          <View  style={styles.TextInputStyle} >

          <TextInput
            style={styles.input}
            placeholderTextColor = 'rgba(255,255,255, 0.9)'
            placeholder="Введіть ваш імейл"
            keyboardType="email-address"
            underlineColorAndroid="rgba(0,0,0,0)"

            />
          </View>
        <View style={styles.TextInputStyle}>



          <TextInput
            placeholder="Введіть ваш пароль"
            secureTextEntry
            placeholderTextColor = 'rgba(255,255,255, 0.9)'
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.input}
           />


       </View>
       <View style={styles.TextInputStyle}>



         <TextInput
           placeholder="Повторіть пароль"
           secureTextEntry
           placeholderTextColor = 'rgba(255,255,255, 0.9)'
           underlineColorAndroid="rgba(0,0,0,0)"
           style={styles.input}
          />


      </View>

         <ButtonR style ={styles.buttonText}
          textStyle={{color:"white"}}
           onPress={
             ()=> navigate("First",{})
           }
           >Зареєструватися</ButtonR>
    </View>
      </KeyboardAvoidingView>
    );
  }

}


const styles  = StyleSheet.create({
  TopInputs:{
    marginLeft:10,
    height:90,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  TopInputsContainer:{
    flexDirection: 'row',
    marginBottom:10,
  },
  avatar:{
    width: 95,
    height: 95,
    backgroundColor: "grey",
    borderRadius: 50,
  },
  TextInputStyle:{
    flexDirection: 'row',
    backgroundColor: 'rgba(46, 204, 113, 0.5)',
    height: 40,
    marginBottom: 10,
    width: 285,
    borderRadius: 20,
    paddingLeft:5,
  },
  NameSurname:{
    flexDirection: 'row',
    backgroundColor: 'rgba(46, 204, 113, 0.5)',
    height: 40,
    width: 180,
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
    justifyContent: 'flex-start',
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

    marginTop:40,


  },
  buttonText:{
  borderColor: "#2ecc71",
  backgroundColor: "#2ecc71",
  borderRadius: 20,
  height:40,
  width:200,
  alignSelf: 'center',
  }

});
