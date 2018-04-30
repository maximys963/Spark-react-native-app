import React, {Component} from 'react';
import{
	AppRegistry,
	Dimensions,
	ListView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View,
  FlatList
} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";
import { SwipeListView } from 'react-native-swipe-list-view';



export default class Art extends Component{
  constructor(props) {
		super(props);
	 this.ColorChanger = this.ColorChanger.bind(this);
	this.state = {
		isTapped: false,
	};
	}

	ColorChanger(){
if(this.state.isTapped === false){
	 this.setState({
				isTapped: true
	 })
}else{
	this.setState({
			isTapped: false
 })
}
};

	 ColorDif(isTapped){
		 if(isTapped === false){
			 return{ padding: 10, fontSize:18, height: 44, backgroundColor: '#55efc4', color:"white" }
		 }else{
			 return{ padding: 10, fontSize:18, height: 44, backgroundColor: 'green', color:"white" }
		 }
	 }

  static navigationOptions= {
    title: "Art",
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
      {key: "sleep1",
      time: '10h',
      done: true},
      {key: "sleep2",
      time: '10h',
      done: true},
      {key: "sleep3",
      time: '10h',
      done: true},
      {key: "sleep4",
      time: '10h',
      done: true},
      {key: "sleep5",
      time: '10h',
      done: true},
      {key: "sleep6",
      time: '10h',
      done: true},
      {key: "sleep7",
      time: '10h',
      done: true},
      {key: "sleep8",
      time: '10h',
      done: true},
      {key: "sleep9",
      time: '10h',
      done: true},
      {key: "sleep10",
      time: '10h',
      done: true},
      {key: "sleep11",
      time: '10h',
      done: true},
      {key: "sleep12",
      time: '10h',
      done: true},
      {key: "sleep13",
      time: '10h',
      done: true},
    ]
    return(

      <View style={styles.container}>
      <FlatList
        data={artTasks}
        renderItem={
					({item})=> <Text
					onPress={this.ColorChanger}
         style={this.ColorDif(this.state.isTapped)} >{item.key}  time={item.time} </Text>
         }
        ></FlatList>
      </View>

    );
  }
}
const styles  = StyleSheet.create({

constainer:{
  flex: 1
}




});
