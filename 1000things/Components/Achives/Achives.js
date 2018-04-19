import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";



export default class Achives extends Component{
  static navigationOptions= {
    title: "Achives",
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
      <Text>This is achives page</Text>
      </View>

    );
  }
}
const styles  = StyleSheet.create({





});
