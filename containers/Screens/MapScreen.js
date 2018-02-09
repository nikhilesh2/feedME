import React from 'react';
import {View, Text, StyleSheet, Platform, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Toolbar, ActionButton, Card } from 'react-native-material-ui';
import { Container, Header, Title, Left, Icon, Right, Body, Content, CardItem } from "native-base";

import { UITheme } from '../../utils/MuiTheme';
import AppBar from '../../components/AppBar';
import StrippedBar from '../../components/AppBar/StrippedAppBar.js';
import ListItem from '../../components/ListItem';
import {
  StackNavigator,
} from 'react-navigation';


import MapView, { Marker } from 'react-native-maps';

var {height, width} = Dimensions.get('window')

const util = require('util');


const { Component } = React;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    paddingLeft: 15,
    paddingTop: 0,
    backgroundColor: 'steelblue',

  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
       left: 0,
       right: 0,
       top: 0,
       bottom: 0,
       alignSelf: 'stretch',
         marginTop: 0,
       height: 500,
       width: 380,

     },
     main: {
          flex: 1,
          backgroundColor: 'red',
           backgroundColor: '#fff',
           alignItems: 'center',
          justifyContent: 'center',
        },

});


export default class MapScreen extends Component {
  state = {
    isOpen: false,
    selectedItem: 'About',
  };

  render() {
    
    return (
      <View>
       	<StrippedBar />
           <MapView style={styles.map}
       initialRegion={{
         latitude: 40.445025,
         longitude: -79.960803,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
       }}

       >
         <MapView.Marker
            coordinate={{latitude: 40.445025,
            longitude: -79.960803}}
            title={"Random Event"}
            description={"This event offers free pizza"}
           
            > 

            <Image
            	style={{width: 40, height: 40 }}
    			source={require('../../images/Pizza-icon.png')}

  			/>
            </MapView.Marker>

            <MapView.Marker
            coordinate={{latitude: 40.445042,
            longitude: -79.956612}}
            title={"Computer Science Event"}
            description={"This event offers free cookies"}
           
            > 

            <Image
            	style={{width: 30, height: 30 }}
    			source={require('../../images/cookie.png')}

  			/>
            </MapView.Marker>

             <MapView.Marker
            coordinate={{latitude: 40.439517,
            longitude: -79.961271}}
            title={"Computer Science Event"}
            description={"This event offers hot coffee"}
           
            > 

            <Image
            	style={{width: 40, height: 40 }}
    			source={require('../../images/coffee.png')}

  			/>
            </MapView.Marker>
     </MapView>
   </View>






       
 
    );
  }
};
