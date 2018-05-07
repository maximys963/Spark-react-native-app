import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";
import { Icon } from 'react-native-elements';



export default class DoePub extends Component{
  static navigationOptions= {
    title: "DoePub",
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
  <ScrollView>
      <ImageBackground style={styles.publication}
        source={require('./PubImg/plant.jpg')}>
      </ImageBackground>
      <Image style={styles.publication}
        source={require('./PubImg/running.jpg')}
        ></Image>
      <Image style={styles.publication}
        source={require('./PubImg/fire.jpg')}
        ></Image>
      <Image style={styles.publication}
        source={require('./PubImg/forest.jpg')}
        ></Image>

      </ScrollView>
        </View>

    );
  }
}
const styles  = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: window.width,

  },
  publication:{
    width: 270,
    height:300,
    backgroundColor: 'grey',
    marginTop: 20,
    borderRadius: 10,

  }





});
