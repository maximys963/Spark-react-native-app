import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";
import Profile from '../Profile/Profile';
import {YellowBox} from 'react-native';

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
    this.ColorChange1 = this.ColorChange1.bind(this);
    this.ColorChange2 = this.ColorChange2.bind(this);
    this.ColorChange3 = this.ColorChange3.bind(this);
    this.state =
     {isClicked: 1,
      isClicked1: false,
      isClicked2: false,
      isClicked3: false,
     };
}
     ColorChange(){

if(this.state.isClicked === 1){
      this.setState({
         isClicked: 2
      });
}
    else if(this.state.isClicked === 2){
      this.setState({
       isClicked: 3
         });
    }else if(this.state.isClicked === 3){
      this.setState({
       isClicked: 4
         });
    }else{
      this.setState({
       isClicked: this.state.isClicked
         });
    };
    };
    ColorChange1(){
     this.setState({
       isClicked1: !this.state.isClicked1
     });
   };
   ColorChange2(){
    this.setState({
      isClicked2: !this.state.isClicked2
    });
  };
  ColorChange3(){
   this.setState({
     isClicked3: !this.state.isClicked3
   });
 }

ColorShade(isClicked){
   if(isClicked === 1){
     return{
       backgroundColor:"#8e44ad",
       marginBottom:20,
         height: 60,
         width: 280,
         borderRadius: 0,
         borderColor: "#27ae60",
         position: "relative",
         marginLeft: 20,

     }
   }else if (isClicked === 2 ){
     return{
       backgroundColor:"#2980b9",
       marginBottom:20,
         height: 60,
         width: 280,
         borderRadius: 0,
         borderColor: "#27ae60",
         position: "relative",
         marginLeft: 20,

     }
   }else if(isClicked === 3){
     return{
       backgroundColor:"#e74c3c",
        marginBottom:20,
         height: 60,
         width: 280,
         borderRadius: 0,
         borderColor: "#2c3e50",
         position: "relative",
         marginLeft: 20

     }
   }else {
     return{
       backgroundColor:"#bdc3c7",
       marginBottom:20,
         height: 60,
         width: 280,
         borderRadius: 0,
         borderColor: "#bdc3c7",
         position: "relative",
         marginLeft: 20

     }
   }

 }


  render(){
    var {navigate} = this.props.navigation;
    return(

        <View style={styles.container}>
          <Text style={styles.titileText}>Виберіть пріорітетність діяльності</Text>

          <ButtonR
            textStyle={{color:"white"}}
            onPress={this.ColorChange}
            style={this.ColorShade(this.state.isClicked)}

            accessibilityLabel="Learn more about this purple button"
            >Спорт</ButtonR>

          <ButtonR
              textStyle={{color:"white"}}
              onPress={this.ColorChange1}
              style={this.state.isClicked1 ?{backgroundColor:"#27ae60",  marginBottom:20,
                height: 60,
                width: 280,
                borderRadius: 0,
                borderColor: "#27ae60",
                position: "relative",
                marginLeft: 20,}
                :{backgroundColor:"#bdc3c7",  marginBottom:20,
                height: 60,
                width: 280,
                borderRadius: 0,
                borderColor: "#bdc3c7",
                position: "relative",
                marginLeft: 20, }}

              accessibilityLabel="Learn more about this purple button"
              >Соціальне</ButtonR>
            <ButtonR
                textStyle={{color:"white"}}
                onPress={this.ColorChange2}
                style={this.state.isClicked2 ?{backgroundColor:"#27ae60",  marginBottom:20,
                  height: 60,
                  width: 280,
                  borderRadius: 0,
                  borderColor: "#27ae60",
                  position: "relative",
                  marginLeft: 20,}
                  :{backgroundColor:"#bdc3c7",  marginBottom:20,
                  height: 60,
                  width: 280,
                  borderRadius: 0,
                  borderColor: "#bdc3c7",
                  position: "relative",
                  marginLeft: 20, }}

                accessibilityLabel="Learn more about this purple button"
                >Творічість</ButtonR>
              <ButtonR
                  textStyle={{color:"white"}}
                  onPress={this.ColorChange3}
                  style={this.state.isClicked3 ?{backgroundColor:"#27ae60",  marginBottom:20,
                    height: 60,
                    width: 280,
                    borderRadius: 0,
                    borderColor: "#27ae60",
                    position: "relative",
                    marginLeft: 20,}
                    :{backgroundColor:"#bdc3c7",  marginBottom:20,
                    height: 60,
                    width: 280,
                    borderRadius: 0,
                    borderColor: "#bdc3c7",
                    position: "relative",
                    marginLeft: 20, }}

                  accessibilityLabel="Learn more about this purple button"
                  >Відпочинок</ButtonR>
                  <Button
                    title="Go to Profile"
                    color="#2ecc71"
                    accessibilityLabel="Learn more about this purple button"

                    onPress={
                       ()=> navigate("Third",{})
                    }/>

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
