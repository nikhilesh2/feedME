import React from 'react';
import {View, Text, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';
import { Toolbar, ActionButton, Card } from 'react-native-material-ui';

import { UITheme } from '../../utils/MuiTheme';
import AppBar from '../../components/AppBar';
import ListItem from '../../components/ListItem';

var {height, width} = Dimensions.get('window')
export default class HomePage extends React.Component {
  render() {
    return (
    	<View>
        	<AppBar />
    			
    		
       				<ScrollView>
       					<View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
       						<Text style={{ color: '#73d9b2', fontWeight: 'bold', left: 15 }}>Today, November 16, 2017 </Text>
       					</View>
    		  			<ListItem org="Computer Science Club" />
    		  			<ListItem org="AMF" />
    		  			<ListItem org="American Red Cross" verified />
    		  			<View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
    		  				<Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Tomorrow, November 17, 2017</Text>
    		  				</View>
    		  			
    		  			<ListItem org="Delta Sigma Phi" />
    		  			<ListItem org="Club Football" />
    		  			<ListItem />
    		  			<ListItem />
    		  			<ListItem />
    		  			<ListItem />
    		  			<ListItem />
    		  			<ListItem />
    		  		</ScrollView>     
      			

    			
          	<View>
          		<ActionButton style={styles}/>
        	</View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: UITheme.palette.secondaryColor,
    position: 'absolute',
    top: -325,
    right: 0,
  }

})
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