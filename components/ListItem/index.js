import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { height, width } from '../../utils/getDimensions';
import { UITheme } from '../../utils/MuiTheme';

export default class ListItem extends React.Component {
  render() {
    const vote = this.props.vote ? this.props.vote: '';
    return (
    	<View style={style}>
        <View style={row}>
          {/*<View style={{width: 10, backgroundColor: this.props.verified ? UITheme.palette.primaryColor : '#BDBDBD' }}></View>*/}
          <View style={info}>
    	      <Text style={{flex: 1, alignSelf: 'flex-start', fontWeight: 'bold', color: '#4bce9c', paddingTop: 10, paddingLeft: 10 }}>{this.props.org}</Text>
            <View style={description}>
              <Text style={{ fontSize: 12, paddingLeft: 10, alignSelf: 'center' }}>{this.props.description}</Text>
            </View>
            <View style={specs}>
              <MaterialIcons style={{ flex: 1, alignSelf: 'flex-start', paddingLeft: 10 }} name="clock" size={12} color="#666666"><Text style={{ color: '#999999', marginLeft: 10 }}>{this.props.time}</Text></MaterialIcons>
              <MaterialIcons style={{ flex: 1, alignSelf: 'flex-start', paddingLeft: 10 }} name="food" size={12} color="#666666"><Text style={{ color: '#999999', left: 10 }}>{this.props.food}</Text></MaterialIcons>
            </View>
          </View>
           

           <View style={votes}>
             <FontAwesome style={{ alignSelf: 'center', paddingLeft: 10 }} name="angle-up" size={30} color={vote === 'up' ? '#8c8c8c' : '#cccccc'} />
             <Text style={{ alignSelf: 'center', paddingLeft: 10, color: '#73d9b2', fontWeight: 'bold' }}>{this.props.netVotes}</Text>
             <FontAwesome style={{  alignSelf: 'center', paddingLeft: 10 }}name="angle-down" size={30} color={vote === 'down' ? '#8c8c8c' : '#cccccc'} />
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
  height: height/6, 
  borderBottomWidth: 1,
  borderBottomColor: UITheme.palette.outline,
}

const info = {
  flexDirection: 'column',
  alignItems: 'center',
  flex: 3
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
  flex: 1
}

const row = {
  flex: 1,
  width: '100%',
  height:  height/8,
  flexDirection: 'row',
  margin: 0,
  padding: 0,
 
}