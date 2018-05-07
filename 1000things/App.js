import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import Login from "./Components/Login/Login";
import Second from "./Components/Login/SecondScreen";
import Profile from "./Components/Profile/Profile";
import Achives from "./Components/Achives/Achives";
import DoePub from "./Components/Publications/DoePub";
import DoeFol from "./Components/Followers/DoeFollow";
import Screen from "./Components/Login/app/components/Screen.js";
import Swiper from "./Components/Login/app/components/Swiper.js";
import Boiler from "./Components/Login/app/components/Boiler.js";
import Loading from "./Components/Loading/Loading";
import Tasks from "./Components/Tasks/Tasks";
import Alina from "./Components/Followers/FolowProfile/Alina";
import Arina from "./Components/Followers/FolowProfile/Arina";
import Max from "./Components/Followers/FolowProfile/Max";
import {StackNavigator} from 'react-navigation';

const Navigation = StackNavigator({

  DoePublications: {screen: DoePub},
  Loading: {screen: Loading},
  Zero: {screen: Screen},
  ZeroOne: {screen: Swiper},
  ZeroTwo: {screen: Boiler},
  First: {screen: Login},
  Second: {screen: Second},
  Third: {screen: Profile},
  Achiv: {screen: Achives},

  TaskPage: {screen: Tasks},
  DoeFollowers: {screen: DoeFol},
  MaxProfile: {screen: Max},
  ArinaProfile: {screen: Arina},
  AlinaProfile: {screen: Alina},




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
