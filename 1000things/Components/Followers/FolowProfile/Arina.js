import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";



export default class Arina extends Component{
  static navigationOptions= {
    title: "Arina",
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

          <Image
              style={{
                width: 120,
                height: 120,
                marginTop: 30,
               marginBottom: 10,
              }}
                source={require('../../../logo/user.png')}
                />
              <Text style={{fontSize:24}}>Дяківа Орися</Text>
              <Text
                style={{
                  marginBottom: 20,
                  fontSize: 20,
                }}
                >"Lorem ipsum dolor"</Text>
              <View style={styles.mainButton}
                 ><Text style={{fontSize:16, color: 'white'}}

                 >Додати</Text></View>
                <View style={styles.menuBar}>
                <View style={styles.menuButton1}>
                  <Text style={{alignSelf:'center', fontSize:18,}}>5</Text>
                  <Text style={{alignSelf:'center'}}


                    >досягнень</Text>
                </View>
                <View  style={styles.menuButton2}>
                  <Text style={{alignSelf:'center', fontSize:18,}}>4</Text>
                  <Text style={{alignSelf:'center'}}

                    >публікацій</Text>
                </View>
                <View  style={styles.menuButton3}>
                <Text style={{alignSelf:'center', fontSize:18,}}>5</Text>
                <Text style={{alignSelf:'center'}}


                  >друзів</Text>
            </View>
            </View>
            <View style={styles.storyContainer}>
              <View style={styles.story}></View>
              <View style={styles.story}></View>
              <View style={styles.story}></View>
              <View style={styles.story}></View>


            </View>

      </View>

    );
  }
}
const styles  = StyleSheet.create({
  story:{
    backgroundColor: 'grey',
    width:75,
    height: 75,
    borderRadius: 25,
    marginRight:3,
  },
  storyContainer:{
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },

  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  menuBar:{
    flexDirection: 'row',
    height:60
  },
  menuButton1:{
    borderColor: '#7f8c8d',
     borderRadius: 0,
     width:110,
     height:60,
     borderStyle: 'solid',
     borderWidth: 1,
    marginRight: -1,
   justifyContent: 'center',
      flexDirection:'column',
      alignContent: 'center',

 },

menuButton2:{
  borderColor: '#7f8c8d',
  borderRadius: 0,
  width:110,
  height:60,
  borderStyle: 'solid',
  borderWidth: 1,
   justifyContent: 'center',
   alignContent: 'center',
      flexDirection:'column',
 },
 menuButton3:{
   borderColor: '#7f8c8d',
  borderRadius: 0,
  width:110,
  height:60,
  borderStyle: 'solid',
  borderWidth: 1,
  marginLeft: -1,
   justifyContent: 'center',
   flexDirection:'column',
   alignContent: 'center',

   },
   mainButton:{
     borderRadius: 25,
     width: 180,
     height: 45,
     // alignSelf: 'center',
     backgroundColor: '#27ae60',
     borderColor: '#27ae60',
     marginBottom: 20,
     justifyContent: 'center',
     alignItems: 'center'
   }






});
