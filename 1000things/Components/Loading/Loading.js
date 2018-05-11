import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, Animated, Easing} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";
import LottieView from 'lottie-react-native';
import { Font } from 'expo';
import TimerMixin from 'react-timer-mixin';
import { createStackNavigator } from 'react-navigation';




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
      // this.loadChecking = this.loadChecking.bind(this);
      this.state = {
        progress: new Animated.Value(0),  
      };
    }
    // let {navigate} = this.props.navigation

      async componentDidMount(){
          this.animation.play();
        await Font.loadAsync({
          'open-sans-bold':require('../../fonts/Nunito-Regular.ttf')
        });
        this.setState({fontLoaded: true});

      }

    componentWillMount() {
      this.timerID = setInterval(
    () => this.tick(),
    7000
  );
    }

      tick() {
    this.setState({
      date: 1
    });
    this.props.navigation.navigate("Zero")
        console.log(`is works`);
        clearInterval(this.timerID);
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

          >Зачекайте</Text>): null
      }
        <View style={{width:100, height:100,marginRight:-25, marginBottom: -12}}>
        <LottieView source={require('./load.json')} ref={animation=>{this.animation = animation}} />
        </View>
      </View>
      </View>
      <View
        style={{ alignItems: 'center', justifyContent: 'space-between', width: 300,}}
        >
        {
          this.state.fontLoaded ? (
      <Text style={styles.text}>
      "Ніколи не пізно ставити нові цілі і мріяти про щось більше."
    </Text>
  ): null
    }
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
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'open-sans-bold'

  },
  buttonText:{
    marginTop: 10,
  }

});
