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
          <Icon name="ios-walk-outline" {...iconStyles} />
          <Text style={styles.header}>НАБЕРИСЬ МУЖНОСТІ</Text>
          <Text style={styles.text}>Вийди із своєї зони комфорту</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Icon name="ios-bonfire" {...iconStyles} />
          <Text style={styles.header}>ДОЛАЙ СТЕРЕОТИПИ</Text>
          <Text style={styles.text}>Зроби себе щасливішим, а світ кращим</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Icon name="ios-people" {...iconStyles} />
          <Text style={styles.header}>ЗНАХОДЬ ДРУЗІВ</Text>
          <Text style={styles.text}>Обмінюйтесь враженнями і викликами</Text>
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
    backgroundColor: "#2ecc71"
  },
  // Header styles
  header: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",

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
