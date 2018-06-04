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
import Vova from "./Components/Followers/FolowProfile/Vova"
import {StackNavigator} from 'react-navigation';
import Registration from './Components/Login/Registration';

const Navigation = StackNavigator({
  RegistrationForm: {screen: Registration},
  First: {screen: Login},
  Loading: {screen: Loading},
  Zero: {screen: Screen},
  ZeroOne: {screen: Swiper},
  ZeroTwo: {screen: Boiler},
  First: {screen: Login},
  Second: {screen: Second},
  Third: {screen: Profile},
  DoePublications: {screen: DoePub},
  Achiv: {screen: Achives},
  TaskPage: {screen: Tasks},
  DoeFollowers: {screen: DoeFol},
  VovaProfile: {screen: Vova},
  ArinaProfile: {screen: Arina},
  AlinaProfile: {screen: Alina},
  MaxProfile: {screen: Max},

});
export default Navigation;
