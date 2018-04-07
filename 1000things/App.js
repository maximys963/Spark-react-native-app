import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import Login from "./Components/Login/Login";
import Second from "./Components/Login/SecondScreen";
// import {StackNavigator} from 'react-navigation';

export default class myapp extends Component{
  render(){
    return(

        <Login/>

    );
  }
}

const styles  = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
AppRegistry.registerComponent('myapp', ()=> myapp);
