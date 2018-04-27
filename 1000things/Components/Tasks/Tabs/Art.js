import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, FlatList} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";



export default class Art extends Component{
  constructor(props){
    super(props);
}

  static navigationOptions= {
    title: "DoePub",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
  };

  render(){
    const artTasks = [
      {key: "do something",
      time: '20s',
      done: false},
      {key: "run",
      time: '10s',
      done: false},
      {key: "swim",
      time: '40s',
      done: false},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
      {key: "sleep",
      time: '10h',
      done: true},
    ]
    return(

      <View style={styles.container}>
      <FlatList
        data={artTasks}
        renderItem={
          ({item})=> <Text style={{padding: 10, fontSize:18, height: 44, backgroundColor: '#55efc4', color:"white" }} >{item.key}  time={item.time} {item.done ?  'yes' : 'no'}</Text>
        }

        ></FlatList>
      </View>

    );
  }
}
const styles  = StyleSheet.create({





});
