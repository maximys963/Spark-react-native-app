import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default class myapp extends Component{
  render(){
    return(
      <View style={styles.container}>
      <TextInput
        placeholderTextColor = 'rgba(255,255,255, 0.8)'
        placeholder="email or username"

      style={styles.input}
        />
      <TextInput
        placeholder="password"
        placeholderTextColor = 'rgba(255,255,255, 0.8)'
      style={styles.input}
       />
     <TouchableOpacity >
       <Text color="rgba(255,255,255, 0.9)">Login</Text>
     </TouchableOpacity>



      </View>
    );
  }
}
const styles  = StyleSheet.create({
container:{
padding: 20
},
input:{
  height: 40,
  marginBottom: 10,

}


});
