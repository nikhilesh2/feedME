import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { UITheme } from '../../utils/MuiTheme';
import { height, width } from '../../utils/getDimensions';
// import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CalendarStrip from 'react-native-calendar-strip';

export default class AppBar extends React.Component {
  render() {
    return (
    	<View style={style}>
        <View style={displayOption}>
          <EntypoIcon name="menu" size={30} color="white" style={{ position: 'absolute', left: 10, top: -5 }} />
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 18, flex: 1, alignSelf: 'flex-end', fontWeight: 'bold' }}>Overview</Text>
          </View>
          <View flex="0.2" /> 
          
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 18, flex: 1, opacity: 0.7 }}>Map View</Text>
         </View>
         <View style={style}>
                <CalendarStrip />
              </View>
        </View>
        <View style={innerWrapper}>
    	   <Text style={{ color: 'white', fontSize: 24, flex: 1 }}>University of Pittsburgh</Text>
         <Text style={{ color: 'white', fontSize: 56, flex: 2 }}>14</Text>
         <Text style={{ color: 'white', fontSize: 18, flex: 3, opacity: 0.9 }}>Near you</Text>
        </View>

        <View>
               
            </View>
              
      </View>
       
    );
  }
}


const style = {
  height: (Platform.OS === 'ios') ? 100 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
  backgroundColor: UITheme.palette.primaryColor,
  height: height/2.5,
  paddingTop: (Platform.OS === 'ios') ? 30 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
}

const innerWrapper = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
}
const displayOption = {
  height: 50,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
 
}
const spacer = {
  flex: 0.2,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
}

