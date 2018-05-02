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

	this.state = {
		isTapped: [],
	};
	}

	 

	 StyleChange(item){
		 console.log(`clicked ${item.key} isTapped ${item.wasTapped}`)
		 return(item.wasTapped = !item.wasTapped);
		 // console.log(`clicked ${item.key} isTapped ${item.wasTapped}`)

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
      done: false,
			wasTapped:false},
      {key: "run",
      time: '10s',
      done: false,
			wasTapped:false},
      {key: "swim",
      time: '40s',
      done: false,
			wasTapped:false},
      {key: "sleep",
      time: '10h',
      done: true,
			wasTapped:false},
      {key: "sleep1",
      time: '10h',
      done: true,
			wasTapped:false},
      {key: "sleep2",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep3",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep4",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep5",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep6",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep7",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep8",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep9",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep10",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep11",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep12",
      time: '10h',
      done: true,
		  wasTapped:false},
      {key: "sleep13",
      time: '10h',
      done: true,
		  wasTapped:false},
    ]
    return(

      <View style={styles.container}>
      <FlatList
        data={artTasks}
        renderItem={
					({item})=> <Text
					onPress={()=> this.StyleChange(item)}
         style={item.wasTapped ?
					 { padding: 10, fontSize:18, height: 44, backgroundColor: '#55efc4', color:"white" }:
					 { padding: 10, fontSize:18, height: 44, backgroundColor: 'green', color:"white" }
			 } >{item.key}  time={item.time} </Text>
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
