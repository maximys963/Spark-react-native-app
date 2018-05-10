import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";



export default class Profile extends Component{
  static navigationOptions= {
    title: "John Doe",
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

      <View  style={styles.container}>

        <ImageBackground
          style={{ height: 300, marginBottom:-25, justifyContent:'center', alignItems: 'center', }}
          source={require('./sky.jpg')}
          >
          <Image
              style={{
                width: 120,
                height: 120,
                marginTop: 10,
               marginBottom: 10,
              }}
              source={require('../../logo/user.png')}
                />
              <Text style={{fontSize:24}}>Джон Доу</Text>
              <Text
                style={{
                  marginBottom: 20,
                  fontSize: 20,
                }}
                >"Lorem ipsum dolor"</Text>
              </ImageBackground>
              <View style={styles.mainButton}
                 ><Text style={{fontSize:16, color: 'white'}}
                 onPress={
                   ()=> navigate("TaskPage",{})
                 }
                 >Отримати завдання</Text></View>
                <View style={styles.menuBar}>
                <View style={styles.menuButton1}>
                  <Text style={{alignSelf:'center', fontSize:18,}}>5</Text>
                  <Text style={{alignSelf:'center'}}

                    onPress={
                      ()=> navigate("Achiv",{})
                    }
                    >досягнень</Text>
                </View>
                <View  style={styles.menuButton2}>
                  <Text style={{alignSelf:'center', fontSize:18,}}>4</Text>
                  <Text style={{alignSelf:'center'}}
                    onPress={
                      ()=> navigate("DoePublications",{})
                    }
                    >публікацій</Text>
                </View>
                <View  style={styles.menuButton3}>
                <Text style={{alignSelf:'center', fontSize:18,}}>5</Text>
                <Text style={{alignSelf:'center'}}
                  onPress={
                    ()=> navigate("DoeFollowers",{})
                  }

                  >друзів</Text>
            </View>
            </View>
            <ScrollView style={styles.storyContainer}
              horizontal={true}

              >
              <View style={styles.story}></View>
              <View style={styles.story}></View>
              <View style={styles.story}></View>
              <View style={styles.story}></View>


            </ScrollView>

      </View>

    );
  }
}
const styles  = StyleSheet.create({
  story:{
    backgroundColor: 'grey',
    width:100,
    height: 120,
    borderRadius: 25,
    marginRight:3,
    marginLeft:3,
  },
  storyContainer:{
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },

  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
    // justifyContent: 'flex-start',
    // alignItems: 'center',

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
     alignItems: 'center',
     alignSelf: 'center'
   }






});
