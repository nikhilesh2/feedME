import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MapScreen from "./MapScreen.js";
import DescriptionTemplate from "./DescriptionTemplate.js";
import { StackNavigator } from "react-navigation";

const Navigation = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Map: { screen: MapScreen },


  
  }, { headerMode: 'none' }
);
export default Navigation;