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
// import ArtList from './Lists/ArtList';
import { SwipeListView } from 'react-native-swipe-list-view';



export default class Art extends Component{
  constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			listType: 'FlatList',
			listViewData: Array(20).fill('').map((_,i) => ({key: `${i}`, text: `item #${i}`})),
		};
	}

  static navigationOptions= {
    title: "Art",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
  };

  openRow = (rowRef) => {
   // Use an internal method to manually swipe the row open to whatever value you pass
   rowRef.manuallySwipeRow(50);
 }

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
          ({item})=>
					<Text>{item.key}</Text>

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
