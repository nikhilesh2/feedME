import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { height, width } from '../../utils/getDimensions';
import { UITheme } from '../../utils/MuiTheme';

export default class ListItem extends React.Component {
  render() {
    return (
    	<View style={style}>
        <View style={row}>
          <View style={{width: 10, backgroundColor: this.props.verified ? UITheme.palette.primaryColor : '#BDBDBD' }}></View>
          <View style={info}>
    	       <Text style={{flex: 1, alignSelf: 'flex-start', fontWeight: 'bold', color: '#616161', paddingTop: 10, paddingLeft: 10 }}>{this.props.org}</Text>
             <MaterialIcons style={{ flex: 1, alignSelf: 'flex-start', paddingLeft: 10 }}name="clock" size={15} color="#666666"><Text style={{ color: '#999999', marginLeft: 10 }}>3:00-4:00</Text></MaterialIcons>
             <MaterialIcons style={{ flex: 1, alignSelf: 'flex-start', paddingLeft: 10 }}name="food" size={15} color="#666666"><Text style={{ color: '#999999', left: 10 }}>Baked Goods</Text></MaterialIcons>
          </View>
         
        </View>

      </View>
       
    );
  }
}

const style = {
  flexDirection: 'column',
  alignSelf: 'center',
  width: width, 
  height: height/8, 
  borderBottomWidth: 1,
  borderBottomColor: UITheme.palette.outline,
}

const info = {
  flexDirection: 'column',
  alignItems: 'center',
}

const row = {
  flex: 1,
  width: '100%',
  height:  height/8,
  flexDirection: 'row',
  margin: 0,
  padding: 0,
 
}