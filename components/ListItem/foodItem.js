import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { height, width } from '../../utils/getDimensions';
import { UITheme } from '../../utils/MuiTheme';

export default class foodItem extends React.Component {
  render() {
    const vote = this.props.vote ? this.props.vote: '';
    return (
    	<View style={style}>
        <View style={row}>
          {/*<View style={{width: 10, backgroundColor: this.props.verified ? UITheme.palette.primaryColor : '#BDBDBD' }}></View>*/}
          <View style={info}>
    	      
            <View style={description}>
              <Text style={{ fontSize: 13, paddingLeft: 17, paddingTop: 10}}>{this.props.food}</Text>
             
            </View>
            
          </View>
           

           
         
        </View>

      </View>
       
    );
  }
}

const style = {
  flexDirection: 'column',

  width: width, 
  height: height/12, 
  borderBottomWidth: 1,
  borderBottomColor: UITheme.palette.outline,
}

const info = {
  flexDirection: 'column',

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
  height:  height/8,
  flexDirection: 'row',
  margin: 0,
  padding: 0,
 
}