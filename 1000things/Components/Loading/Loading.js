import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, Animated, Easing} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";
import LottieView from 'lottie-react-native';
import { Font } from 'expo';



export default class Loading extends Component{
  static navigationOptions= {
    title: "Loading Page",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
      header: null,
  };
  constructor(props) {
      super(props);
      this.state = {
        progress: new Animated.Value(0),
        fontLoaded: false,
      };
    }





    // componentDidMount() {
      // Animated.timing(this.state.progress, {
      //   toValue: 1,
      //   duration: 500,
      //   easing: Easing.linear,
      //   loop: true,
      // }).start();

      // };

      async componentDidMount(){
          this.animation.play();
        await Font.loadAsync({
          'open-sans-bold':require('../../fonts/Nunito-Regular.ttf')
        });
        this.setState({fontLoaded: true});
      }








  render(){
    var {navigate} = this.props.navigation;
    return(

      <View style={styles.container}>
      <View>
        <View
          style={{backgroundColor: "lightgrey", width:110, height:110, alignSelf: 'center'}}
          ></View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
          {
              this.state.fontLoaded ? (
        <Text
          style={{fontSize: 24, marginRight:-25, color: '#2d3435', fontFamily: 'open-sans-bold'}}

          >Loading</Text>): null
      }
        <View style={{width:100, height:100,marginRight:-25, marginBottom: -12}}>
        <LottieView source={require('./load.json')} ref={animation=>{this.animation = animation}} />
        </View>
      </View>
      </View>
      <View
        style={{ alignItems: 'center', justifyContent: 'space-between'}}
        >
        {
          this.state.fontLoaded ? (
      <Text style={styles.text}>
      "Just make yourself better..."
    </Text>
  ): null
    }
      <Button style ={styles.buttonText}
        onPress={
          ()=> navigate("Zero",{})
        }
        title="Agree"
        color="#2ecc71"
        accessibilityLabel="Learn more about this purple button"
        />
      </View>
      </View>

    );
  }
}
const styles  = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 20,
    flexDirection:'column',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  text:{
    fontSize: 34,
    textAlign: 'center',
    fontFamily: 'open-sans-bold'

  },
  buttonText:{
    marginTop: 10,
  }





});
