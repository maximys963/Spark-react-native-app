import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigator } from "react-navigation";

import Swiper from "./Swiper";

export default class Screen extends Component {
  static navigationOptions= {
    title: "Screen",
    headerStyle: {
     backgroundColor: '#ecf0f1',
   },
   header: null,



  };
  render() {
    return (
      <Swiper navigation={this.props.navigation}>
        {/* First screen */}
        <View style={styles.slide}>
          <Icon name="ios-home" {...iconStyles} />
          <Text style={styles.header}>IMB</Text>
          <Text style={styles.text}>Forever</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Icon name="ios-people" {...iconStyles} />
          <Text style={styles.header}>Holly</Text>
          <Text style={styles.text}>ULM</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Icon name="ios-videocam" {...iconStyles} />
          <Text style={styles.header}>RL</Text>
          <Text style={styles.text}>watching you</Text>
        </View>
      </Swiper>
    );
  }
}
const iconStyles = {
  size: 100,
  color: "#FFFFFF"
};
const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#16a085"
  },
  // Header styles
  header: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15
  },
  // Text below header
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center"
  }
});
AppRegistry.registerComponent("Screen", () => Screen);
