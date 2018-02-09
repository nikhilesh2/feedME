import React from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { UITheme } from '../../utils/MuiTheme';
import { height, width } from '../../utils/getDimensions';
// import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class AppBar extends React.Component {
  render() {
    return (
    	<View style={style}>
        <View style={displayOption}>
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 25, flex: 1, fontWeight: 'bold'}}>Computer Science Event</Text>
          </View>
           </View>
          <View style={innerWrapper}>
         <Text style={{ color: 'white', fontSize: 20, flex: 1.25, paddingBottom: 30, textAlign: 'center'}}>Today</Text>
        </View>
         
        
       
      </View>
       
    );
  }
}
const dayActiveOuter = {
  borderRadius: 200,
  alignItems:'center', 
  flex: 1.25,
}
const dayActiveInner = {
  backgroundColor: 'white',
  overflow: 'hidden',
  borderRadius: 200,
  alignSelf:'center', 
  width: 30,
  height: 30,

}
const dayStyle = {
  color: 'white', 
  fontSize: 20,
  opacity: 1,
  flex: 1.25,
  textAlign: 'center',
}

const dowStyle = {
  color: 'white', 
  fontSize: 12,
  opacity: 0.9,
  flex: 1.25,
  textAlign: 'center',
}

const style = {
  height: (Platform.OS === 'ios') ? 100 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
  backgroundColor: UITheme.palette.primaryColor,
  height: height/6,
  paddingTop: (Platform.OS === 'ios') ? 30 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
}
const calendarStrip = StyleSheet.create({
  contentContainer: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30

  }
});

const innerWrapper = {
  flex: 0.5,
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

