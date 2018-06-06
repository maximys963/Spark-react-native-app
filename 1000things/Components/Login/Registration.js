import React, {Component} from 'react';
import {AppRegistry, Text, Button, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import LoginForm from './LoginForm'
import {StackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import ButtonR  from "apsl-react-native-button";
import ValidationComponent from 'react-native-form-validator';
import axios from 'axios';

export default class Registration extends ValidationComponent{

  constructor(props){
    super(props);
    this.state = {
      name: '12',
      surname: 'Panasenko',
      email: 'maxim.jsdev@gmail.com',
      password: '11223344',
      repeatepassword: '11223344',
      validationDone: false,
      validatonPermission: false,
      nameError: false,
      surnameError: false,
      emailError: false,
      passwordError: false,
      repeatepasswordError: false,
      passwordIdentity: false,
    }
  }

handleSubmit = event => {

  if (this.state.validatonPermission === true){
  event.preventDefault();
  axios.post('https://spark787.herokuapp.com/sign-up', JSON.stringify({
  name: this.state.name,
  surname: this.state.surname,
  email: this.state.email,
  password: this.state.password
  }))
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    // console.log(error);
  });
}

}
  _onPressRegistration = () => {
    this.validate({
      name:{required: true, minlength:3 },
      surname:{ required:true, minlength:3},
      email:{required:true, email: true},
      password:{required: true, minlength:5},
      repeatepassword:{required:true},
    });

    this.setState({
     validationDone: true,
       });
     console.log(this.isFieldInError('name'));
     console.log(this.isFieldInError("surname"));
     console.log(this.isFieldInError('email'));
     console.log(this.isFieldInError('password'));
     console.log(this.isFieldInError('repeatepassword'));

     if ( this.isFieldInError('name')){
       this.setState({nameError: true})
     }else if(this.isFieldInError("surname")){
       this.setState({surnameError: true})
     }else if(this.isFieldInError('email')){
       this.setState({emailError: true})
     }else if(this.isFieldInError('password')){
       this.setState({passwordError: true})
     }else if(this.isFieldInError('repeatepassword')){
       this.setState({repeatepasswordError: true})
     }
  }

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
                ref='name'
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
                />
              {this.isFieldInError('name') && this.getErrorsInField('name').map(errorMessage => <Text>{errorMessage}</Text>) }
              </View>
              <View  style={styles.NameSurname} >

              <TextInput
                style={styles.input}
                placeholderTextColor = 'rgba(255,255,255, 0.9)'
                placeholder="Введіть ваше прізвище"
                keyboardType="email-address"
                underlineColorAndroid="rgba(0,0,0,0)"
                ref='surname'
                onChangeText={(surname) => this.setState({surname, validationDone: false})  }
                value={this.state.surname}
                />
              {this.isFieldInError('surname') && this.getErrorsInField('surname').map(errorMessage => <Text>{errorMessage}</Text>) }
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
            ref="email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            />
            </View>
            {this.isFieldInError('email') && this.getErrorsInField('email').map(errorMessage => <Text>{errorMessage}</Text>) }
        <View style={styles.TextInputStyle}>

          <TextInput
            placeholder="Введіть ваш пароль"
            secureTextEntry
            placeholderTextColor = 'rgba(255,255,255, 0.9)'
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.input}
            ref='password'
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
           />

       </View>
       {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text>{errorMessage}</Text>) }
       <View style={styles.TextInputStyle}>

         <TextInput
           placeholder="Повторіть пароль"
           secureTextEntry
           placeholderTextColor = 'rgba(255,255,255, 0.9)'
           underlineColorAndroid="rgba(0,0,0,0)"
           style={styles.input}
           ref='repeatepassword'
           onChangeText={(repeatepassword) => this.setState({repeatepassword})}
           value={this.state.repeatepassword}
           />

      </View>
      {this.isFieldInError('repeatepassword') && this.getErrorsInField('repeatepassword').map(errorMessage => <Text>{errorMessage}</Text>) }

         <ButtonR style ={styles.buttonText}
          textStyle={{color:"white"}}
           onPress={this._onPressRegistration}
           >Зареєструватися</ButtonR>

         <Text style={styles.ErrorsMassage}>{this.getErrorMessages()}</Text>
    </View>


      </KeyboardAvoidingView>
    );
  }

}


const styles  = StyleSheet.create({
ErrorsMassage:{
  color: 'red',
},
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
