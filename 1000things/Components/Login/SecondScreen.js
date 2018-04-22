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
      isClicked1: 1,
      isClicked2: 1,
      isClicked3: 1,
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
    }else if(this.state.isClicked === 4){
      this.setState({
       isClicked: 5
         });
    }else{
      this.setState({
       isClicked: this.state.isClicked
         });
    };
    };
    ColorChange1(){
      if(this.state.isClicked1 === 1){
            this.setState({
               isClicked1: 2
            });
      }
          else if(this.state.isClicked1 === 2){
            this.setState({
             isClicked1: 3
               });
          }else if(this.state.isClicked1 === 3){
            this.setState({
             isClicked1: 4
               });
          }else if(this.state.isClicked1 === 4){
            this.setState({
             isClicked1: 5
               });
          }else{
            this.setState({
             isClicked1: this.state.isClicked1
               });
          };
   };
   ColorChange2(){
     if(this.state.isClicked2 === 1){
           this.setState({
              isClicked2: 2
           });
     }
         else if(this.state.isClicked2 === 2){
           this.setState({
            isClicked2: 3
              });
         }else if(this.state.isClicked2 === 3){
           this.setState({
            isClicked2: 4
              });
         }else if(this.state.isClicked2 === 4){
           this.setState({
            isClicked2: 5
              });
         }else{
           this.setState({
            isClicked2: this.state.isClicked1
              });
         };

  };
  ColorChange3(){
    if(this.state.isClicked3 === 1){
          this.setState({
             isClicked3: 2
          });
    }
        else if(this.state.isClicked3 === 2){
          this.setState({
           isClicked3: 3
             });
        }else if(this.state.isClicked3 === 3){
          this.setState({
           isClicked3: 4
             });
        }else if(this.state.isClicked3 === 4){
          this.setState({
           isClicked3: 5
             });
        }else{
          this.setState({
           isClicked3: this.state.isClicked3
             });
        };
 }

ColorShade(isClicked){
   if(isClicked === 1){
     return{
       backgroundColor:"#bdc3c7",
       marginBottom:20,
         height: 60,
         width: 280,
         borderRadius: 0,
         borderColor: "#bdc3c7",
         position: "relative",
         alignSelf: 'center'


     }
   }else if (isClicked === 2 ){
     return{
       backgroundColor:"rgba(39, 174, 96,0.3)",
       marginBottom:20,
         height: 60,
         width: 280,
         borderRadius: 0,
         borderColor: "rgba(39, 174, 96,0.3)",
         position: "relative",
        alignSelf: 'center'


     }
   }else if(isClicked === 3){
     return{
       backgroundColor:"rgba(39, 174, 96,0.5)",
        marginBottom:20,
         height: 60,
         width: 280,
         borderRadius: 0,
         borderColor: "rgba(39, 174, 96,0.5)",
         position: "relative",
        alignSelf: 'center'


     }
   }else if(isClicked === 4){
     return{
       backgroundColor:"rgba(39, 174, 96,0.8)",
        marginBottom:20,
         height: 60,
         width: 280,
         borderRadius: 0,
         borderColor: "rgba(39, 174, 96,0.8)",
         position: "relative",
         alignSelf: 'center'


     }
   }else {
     return{
       backgroundColor:"rgba(39, 174, 96,1.0)",
       marginBottom:20,
         height: 60,
         width: 280,
         borderRadius: 0,
         borderColor: "rgba(39, 174, 96,1.0)",
         position: "relative",
         alignSelf: 'center'


     }
   }

 }
 Ready(first,second,third,fouth){
   if(first!== 1 && second!==1 && third!==1 && fouth!==1){
     return(false)
   }else{
     return(true)

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
              style={this.ColorShade(this.state.isClicked1)}

              accessibilityLabel="Learn more about this purple button"
              >Соціальне</ButtonR>
            <ButtonR
                textStyle={{color:"white"}}
                onPress={this.ColorChange2}
                style={this.ColorShade(this.state.isClicked2)}

                accessibilityLabel="Learn more about this purple button"
                >Творічість</ButtonR>
              <ButtonR
                  textStyle={{color:"white"}}
                  onPress={this.ColorChange3}
                  style={this.ColorShade(this.state.isClicked3)}

                  accessibilityLabel="Learn more about this purple button"
                  >Відпочинок</ButtonR>
                  <Button
                    title="Go to Profile"
                    color = "rgba(46, 204, 113,1.0)"

                    accessibilityLabel="Learn more about this purple button"
                    disabled = {this.Ready(this.state.isClicked,this.state.isClicked1,this.state.isClicked2,this.state.isClicked3)}

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
