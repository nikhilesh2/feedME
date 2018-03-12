import React from 'react';
import {View, Text, StyleSheet, Platform, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Toolbar, ActionButton, Card } from 'react-native-material-ui';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, CardItem } from "native-base";

import { UITheme } from '../../utils/MuiTheme';
import AppBar from '../../components/AppBar';
import StrippedBar from '../../components/AppBar/StrippedAppBar.js';
import DescBar from '../../components/AppBar/DescriptionBar.js';
import ListItem from '../../components/ListItem';
import DescriptionItem from '../../components/ListItem/DescriptionItem.js';
import TimeItem from '../../components/ListItem/TimeItem.js';
import LocationItem from '../../components/ListItem/locationItem.js';
import FoodItem from '../../components/ListItem/foodItem.js';
import CommentItem from '../../components/ListItem/commentItem.js';

import {events} from '../../events.js';

import {
  StackNavigator,
} from 'react-navigation';



var {height, width} = Dimensions.get('window')

export default class HealthDescription extends React.Component {

  
  render() {
       
    // var {navigate} = this.prop.navigation;
    var array = [events[1]];
    var csc = "OOOOIIII";
    var delta = "Looking to rush for the spring 2018 semester? Stop by to learn more about our Fraternity";
    var AP = "Want to help raise awareness for mental illness? Come to your fundraiser and learn more about our organization!";
    const navigate = this.props.navigation;
    return (
     
      
      <View>
      
          <DescBar name = {events[1].name} navigation = {navigate}/>
           
          
              <ScrollView contentContainerStyle={{overflow:'scroll'}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', height: height/16 }}>
                  <Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Description</Text>
                </View>
               <DescriptionItem description = {events[1].description} />
    
                 <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
                  <Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Date and Time</Text>
                </View>
                  <TimeItem time = {events[1].time} date= {events[1].date} />
                 
                 <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
                  <Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Location</Text>
                </View>
                 <LocationItem location = {events[1].location} />
                 
                 <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
                  <Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Food</Text>
                </View>
                <FoodItem food = {events[1].foodDescription} />
                 
                 <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
                  <Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Additional Comments</Text>
                </View>
                <CommentItem comments = {events[1].comments} />

               <View style={row}>
                <TouchableWithoutFeedback onPress={() => navigate.navigate("singleItemMap", {event: array})}>
                <View style ={{backgroundColor: 'orange', width: '100%', height: 50, alignItems: 'center'}}>
                  <Text style={{ color: 'white', paddingTop: 15, fontWeight: 'bold', fontSize: 15}}>View on Map</Text>
                </View>
                </TouchableWithoutFeedback>
                </View>

              
                
                
        </ScrollView>     
            

          
          
       </View>
       
    );
  }
}







const styles = StyleSheet.create({
  container: {
    backgroundColor: UITheme.palette.secondaryColor,
    position: 'absolute',
    top: -340,
    right: -5,
  }

})

const info = {
  flexDirection: 'column',
  alignItems: 'center',
  flex: 3,
  backgroundColor: 'white'

}
const specs = {
  flexDirection: 'row',
  alignSelf: 'center',
  flex: 1,
}
const description = {
  flexDirection: 'row',
  alignSelf: 'center',
  flex: 3,
}

const votes = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: 'white'
}

const row = {
  flex: 1,
  width: '100%',
  height:  height/3.5,

  margin: 0,
  padding: 0,
  alignItems: 'center' 
 
}

const List = StyleSheet.create({
  contentContainer: {
  
    justifyContent: 'center',
  }

})
const paper = StyleSheet.create({
container: {

 top: -50, 
}
})
const style = {
     flex: 1,
    top: 175,
    flexDirection: 'column',
}