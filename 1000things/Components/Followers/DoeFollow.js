import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";



export default class DoeFol extends Component{
  static navigationOptions= {
    title: "DoeFollowers",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
  };
  constructor(props){
    super(props);
}
  render(){
    return(
      <View style={styles.container}>
      <Text>This is DoeFollowers</Text>
      </View>
    );
  }
}
const styles  = StyleSheet.create({





});
