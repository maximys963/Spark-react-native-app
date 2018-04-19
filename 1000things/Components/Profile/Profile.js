import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import { Constants } from 'expo';
import Button  from "apsl-react-native-button";



export default class Profile extends Component{
  static navigationOptions= {
    title: "Profile",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
   header: null,



  };
  constructor(props){
    super(props);
}
  render(){
    return(

        <View style={styles.container}>
          <Image
            style={{

              width: 120,
              height: 120,
            }}
            source={require('../../logo/user.png')}

            ></Image>
          <Text>Lorem ipsum dolor</Text>

          <View style={styles.menuBar}>
              <View style={styles.menuButton}/>
              <View  style={styles.menuButton}/>
              <View  style={styles.menuButton}/>
          </View>
        </View>

    );
  }
}
const styles  = StyleSheet.create({

  container:{
flex:1,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 20,
    flexDirection: 'column',
   justifyContent: 'space-between',

  },
  menuBar:{
    flex:1,
    flexDirection: 'row',
  },
  menuButton:{
     borderRadius: 0,
     width:110,
     height:60,
     backgroundColor: 'gray'


  },



});
