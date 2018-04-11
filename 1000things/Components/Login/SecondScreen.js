import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import { Constants } from 'expo';
import Button  from "apsl-react-native-button";

// class Buttons extends Component{
//   constructor(props){
//     super(props)
//     render(){
//       return(
//
//
//       )
//     }
//   }
// }


export default class Second extends Component{
  constructor(props){
    super(props);
    this.ColorChange = this.ColorChange.bind(this);
    this.state = {isClicked: false};
}
     ColorChange(){
      this.setState({
        isClicked: !this.state.isClicked
      });
    }


  render(){
    return(

        <View style={styles.container}>
          <Text style={styles.titileText}>Виберіть пріорітетність діяльності</Text>

          <Button
            textStyle={{color:"white"}}
            onPress={this.ColorChange}
            style={this.state.isClicked ?{backgroundColor:"#e74c3c"}:{backgroundColor:"#bdc3c7"}}

            accessibilityLabel="Learn more about this purple button"
            >Спорт</Button>

            <Button
              style={styles.buttonSt}
              textStyle={{color:"white"}}



              accessibilityLabel="Learn more about this purple button"
              >Творчість</Button>
              <Button
                style={styles.buttonSt}
                textStyle={{color:"white"}}



                accessibilityLabel="Learn more about this purple button"
                >Соціальне</Button>
                <Button
                  style={styles.buttonSt}
                  textStyle={{color:"white"}}




                  accessibilityLabel="Learn more about this purple button"
                  >Відпочинок</Button>

        </View>

    );
  }
}
const styles  = StyleSheet.create({

  container:{
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',

  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  buttonSt:{
    marginBottom:20,
    height: 60,
    width: 280,
    borderRadius: 0,
    borderColor: "#bdc3c7",
    position: "relative",
    marginLeft: 20,

  },
  titileText:{
    marginBottom: 20,
    marginTop: 20,

  }


});

//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isShowingText: true};
//
//     // Toggle the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return { isShowingText: !previousState.isShowingText };
//       });
//     }, 1000);
//   }
//
//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }
