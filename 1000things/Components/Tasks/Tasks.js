import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import { Constants } from 'expo';
import ButtonR  from "apsl-react-native-button";
import Art from "./Tabs/Art";
import Rest from "./Tabs/Rest";
import Social from "./Tabs/Social";
import Sport from "./Tabs/Sport";
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';


const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <Art style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <Rest style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <Social style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const FouthRoute = () => <Sport style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;



export default class DoePub extends Component{
  state = {
  index: 0,
  routes: [
    { key: 'first', title: 'Art' },
    { key: 'second', title: 'Rest' },
    { key: 'third', title: 'Social' },
    { key: 'fouth', title: 'Sport' },
  ],
};

_handleIndexChange = index => this.setState({ index });

_renderHeader = props => <TabBar {...props} />;

_renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fouth: FouthRoute,
});

render() {
  return (
    <TabViewAnimated
      navigationState={this.state}
      renderScene={this._renderScene}
      renderHeader={this._renderHeader}
      onIndexChange={this._handleIndexChange}
      initialLayout={initialLayout}
    />
  );
}
}
const styles  = StyleSheet.create({

  container: {
     flex: 1,
   },



});
