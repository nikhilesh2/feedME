import React from 'react';
import {View, Text, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';
import { Toolbar, ActionButton, Card } from 'react-native-material-ui';

import { UITheme } from '../../utils/MuiTheme';
import AppBar from '../../components/AppBar';
import ListItem from '../../components/ListItem';

var {height, width} = Dimensions.get('window')
export default class HomePage extends React.Component {
  render() {
  	var csc = "Our club will be recruiting new members for our club. We will also answer any questions you may have!";
  	var delta = "Looking to rush for the spring 2018 semester? Stop by to learn more about our Fraternity";
  	var AP = "Want to help raise awareness for mental illness? Come to your fundraiser and learn more about our organization!";
    return (
    	<View>
        	<AppBar />
    			
    		
       				<ScrollView>
       					<View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
       						<Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Today, November 16, 2017 </Text>
       					</View>
    		  			<ListItem org="Computer Science Club" time="12:00-2:00" food="Baked Goods" netVotes={24} description={csc} />
    		  			<ListItem org="Delta Sigma Phi" vote="down" time="2:15-3:00" food="Coffee" netVotes={18} description={delta} />
    		  			<ListItem org="NAMI" time="2:30-4:00" food="Pizza" netVotes={13} description={AP} />
    		  			<View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
    		  				<Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Tomorrow, November 17, 2017</Text>
    		  				</View>
    		  			
    		  			<ListItem org="Robotics Club"  time="3:00-4:30" food="Pizza" netVotes={4}/>
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
    top: -340,
    right: -5,
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