import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";



export default class Loading extends Component{
  static navigationOptions= {
    title: "Loading Page",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
      header: null,
  };
  constructor(props){
    super(props);
}
  render(){
    var {navigate} = this.props.navigation;
    return(

      <View style={styles.container}>
      <View>
      <Text style={styles.text}>
      "It matters not how strait the gate,
      How charged with punishments the scroll,
      I am the master of my fate:
      I am the captain of my soul."
      </Text>
      <Text
      style={{
        fontSize: 20,
        justifyContent: 'flex-end',

      }}

      >(c)William Ernest Henley</Text>
      </View>
      <Button style ={styles.buttonText}
        onPress={
          ()=> navigate("Zero",{})
        }
        title="Agree"
        color="#2ecc71"
        accessibilityLabel="Learn more about this purple button"
        />
      </View>

    );
  }
}
const styles  = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 20,
    flexDirection:'column',
    justifyContent: 'space-around',
  },
  text:{
    fontSize: 20,
  }





});
