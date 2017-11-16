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
          <EntypoIcon name="menu" size={30} color="white" style={{ position: 'absolute', left: 10, top: -5 }} />
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 18, flex: 1, alignSelf: 'flex-end', fontWeight: 'bold' }}>Overview</Text>
          </View>
          <View flex="0.2" /> 
          
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 18, flex: 1, opacity: 0.7 }}>Map View</Text>
         </View>
        </View>
        <View style={innerWrapper}>
    	   <Text style={{ color: 'white', fontSize: 24, flex: 1.25 }}>University of Pittsburgh</Text>
         <Text style={{ color: 'white', fontSize: 56, flex: 2.25 }}>14</Text>
        {/*} <Text style={{ color: 'white', fontSize: 18, flex: 1, opacity: 0.9 }}>Near you</Text>*/}
        </View>
        <ScrollView contentContainerStyle={calendarStrip.contentContainer}>
           <Text style={{ color: 'white', fontSize: 18, paddingBottom: 10 }}>November</Text>
           <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
             <Text style={dowStyle}>Sun</Text>
             <Text style={dowStyle}>Mon</Text>
             <Text style={dowStyle}>Tue</Text>
             <Text style={dowStyle}>Wed</Text>
             <Text style={dowStyle}>Thur</Text>
             <Text style={dowStyle}>Fri</Text>
             <Text style={dowStyle}>Sat</Text>
           </View>
           <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
             <Text style={dayStyle}>12</Text>
             <Text style={dayStyle}>13</Text>
             <Text style={dayStyle}>14</Text>
             <Text style={dayStyle}>15</Text>
             <View style={dayActiveOuter}>
              <View style={dayActiveInner}>
                <Text style={{ color: UITheme.palette.primaryColor, fontSize: 20, textAlign: 'center', top: 3}}>16</Text>
              </View>
            </View>
             <Text style={dayStyle}>17</Text>
             <Text style={dayStyle}>18</Text>
             
           </View>
          
        </ScrollView>
        
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
  height: height/2.35,
  paddingTop: (Platform.OS === 'ios') ? 30 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
}
const calendarStrip = StyleSheet.create({
  contentContainer: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 35
  }
});

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

