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
      <View><Text style={{fontSize:16, alignSelf: 'center'}}>Ваші досягнення</Text></View>
      <View style={styles.rowcontainer}>
        <View style={styles.achivcontainer}>
          <View style={styles.acheevka}></View>
          <Text style={styles.achText}>Lorem ipsum dolor</Text>
        </View>
        <View style={styles.achivcontainer}>
          <View style={styles.acheevka}></View>
          <Text style={styles.achText}>Lorem ipsum dolor</Text>
        </View>
        <View style={styles.achivcontainer}>
          <View style={styles.acheevka}></View>
          <Text style={styles.achText}>Lorem ipsum dolor</Text>
        </View>
      </View>
      <View style={styles.rowcontainer}>
        <View style={styles.achivcontainer}>
          <View style={styles.acheevka}></View>
          <Text style={styles.achText}>Lorem ipsum dolor</Text>
        </View>
        <View style={styles.achivcontainer}>
          <View style={styles.acheevka}></View>
          <Text style={styles.achText}>Lorem ipsum dolor</Text>
        </View>
        <View style={styles.achivcontainer}>
          <View style={styles.acheevka}></View>
          <Text style={styles.achText}>Lorem ipsum dolor</Text>
        </View>
      </View>
      <View style={styles.rowcontainer}>
        <View style={styles.achivcontainer}>
          <View style={styles.acheevka}></View>
          <Text style={styles.achText}>Lorem ipsum dolor</Text>
        </View>
        <View style={styles.achivcontainer}>
          <View style={styles.acheevka}></View>
          <Text style={styles.achText}>Lorem ipsum dolor</Text>
        </View>
        <View style={styles.achivcontainer}>
          <View style={styles.acheevka}></View>
          <Text style={styles.achText}>Lorem ipsum dolor</Text>
        </View>
      </View>


      </View>

    );
  }
}
const styles  = StyleSheet.create({
container:{
  flex:1,
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignContent: 'space-around',
},
rowcontainer:{
  flexDirection: 'row',
  justifyContent: 'space-around',
},
achivcontainer:{
  flexDirection: 'column',

},
acheevka:{
  backgroundColor: 'grey',
  width: 70,
  height: 80,
},
achText:{
  width: 70,
  height: 40,
  fontSize: 12,
}




});
