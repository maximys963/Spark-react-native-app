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
    var {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
    <View style={styles.follower}>
      <View style={styles.followImage}></View>
      <View style={styles.textContainer}>
      <Text style={{fontSize:16,  } }
        onPress={
          ()=> navigate("AlinaProfile",{})
        }
        >Богун Аліна</Text>
      <Text style={{color: '#2ecc71', alignSelf: 'flex-end'}}>online</Text>
      </View>
    </View>
    <View style={{ width:window.width, height: 2, backgroundColor:'grey'}}></View>
    <View style={styles.follower}>
      <View style={styles.followImage}></View>
      <View style={styles.textContainer}>
      <Text style={{fontSize:16, } }
        onPress={
          ()=> navigate("ArinaProfile",{})
        }
      >Дяківа Орися</Text>
      <Text style={{color: '#2ecc71'}}>online</Text>
      </View>
    </View>
    <View style={{ width:window.width, height: 2, backgroundColor:'grey'}}></View>
    <View style={styles.follower}>
      <View style={styles.followImage}></View>
      <View style={styles.textContainer}>
      <Text style={{fontSize:16, } }
        onPress={
          ()=> navigate("MaxProfile",{})
        }
        >Панасенко Максим</Text>
      <Text style={{color: '#2ecc71'}}>online</Text>
      </View>
    </View>
      <View style={{ width:window.width, height: 2, backgroundColor:'grey'}}></View>
      </View>
    );
  }
}
const styles  = StyleSheet.create({
container:{
  flex: 1,
},
follower:{
  width: window.width,
  height: 80,
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'flex-start',
  alignItems: 'center',
},
followImage:{
  height: 60,
  width: 60,
  borderRadius: 45,
  backgroundColor: 'grey',
  marginLeft: 5,
},
textContainer:{
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 10,
  width: 220,


}




});
