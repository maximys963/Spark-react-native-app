import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import Login from "./Components/Login/Login";
import Second from "./Components/Login/SecondScreen";
import Profile from "./Components/Profile/Profile";
import Achives from "./Components/Achives/Achives";
import DoePub from "./Components/Publications/DoePub";
import DoeFol from "./Components/Followers/DoeFollow";
import Intro from "./Components/Login/Intro";
import Tasks from "./Components/Tasks/Tasks";
import {StackNavigator} from 'react-navigation';

const Navigation = StackNavigator({
  Zero: {screen: Intro},
  First: {screen: Login},
  Second: {screen: Second},
  Third: {screen: Profile},
  Achiv: {screen: Achives},
  DoePublications: {screen: DoePub},
  DoeFollowers: {screen: DoeFol},
  TaskPage: {screen: Tasks},
});
export default Navigation;
// export default class myapp extends Component{
//   render(){
//     return(
//
//         <Login/>
//
//     );
//   }
// }
//
// const styles  = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });
// AppRegistry.registerComponent('myapp', ()=> myapp);
