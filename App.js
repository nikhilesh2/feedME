import React from 'react';
import Expo from "expo";
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { ThemeProvider } from 'react-native-material-ui';


import { UITheme } from './utils/MuiTheme';
import { StackNavigator } from 'react-navigation';
import MapScreen from './containers/Screens/MapScreen';
import Login from './containers/Screens/Login';
import Template from './containers/Screens/DescriptionTemplate';
import HomeScreen from './containers/Screens/HomeScreen.js';
import Health from './containers/Screens/HealthDescription.js';
import RandomClub from './containers/Screens/RandomClub.js';
import singleItemMap from './containers/Screens/singleItemMap.js';


const Navigation = StackNavigator({
  Overview: {screen: HomeScreen},
  Login: {screen: Login},
  
  Map: {screen: MapScreen},
  Template: {screen: Template},
  Health: {screen: Health},
  singleItemMap: {screen: singleItemMap},
  RandomClub: {screen: RandomClub}
  
}, { headerMode: 'none',
    
    transitionConfig : () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }) 
},
  
);


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
        <Navigation />
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





