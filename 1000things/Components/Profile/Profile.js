import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import { Constants } from 'expo';
import Button  from "apsl-react-native-button";



export default class Profile extends Component{
  constructor(props){
    super(props);
}
  render(){
    return(

        <View style={styles.container}>
          <Text style={styles.titileText}>Hello Profile !</Text>
        </View>

    );
  }
}
const styles  = StyleSheet.create({

  container:{
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',

  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  buttonSt:{
    marginBottom:20,
    height: 60,
    width: 280,
    borderRadius: 0,
    borderColor: "#bdc3c7",
    position: "relative",
    marginLeft: 20,

  },
  titileText:{
    marginBottom: 20,
    marginTop: 20,

  }


});
