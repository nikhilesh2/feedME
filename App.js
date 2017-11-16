import React from 'react';
import Expo from "expo";
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-material-ui';

import HomePage from './containers/HomePage';
import { UITheme } from './utils/MuiTheme';


export default class App extends React.Component {
   constructor() {
      super();
      this.state = {
        isReady: false
      };
    }
   async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return (
        <Text>Loading Assets</Text>  
      );
    }
    return (
      <ThemeProvider uiTheme={UITheme}>
        <HomePage />
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
