import React from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, TouchableWithoutFeedback, TextInput, Modal } from 'react-native';


import IonIcon from 'react-native-vector-icons/Ionicons';
import { UITheme } from '../../utils/MuiTheme';



export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }

    // this.handleCreate = this.handleCreate.bind(this);
    this.handleCloseAndCreate = this.handleCloseAndCreate.bind(this);
  }

  

  handleCloseAndCreate(){
    this.props.handleCreateEvent({name: this.state.nameOfEvent, date: this.state.date, time: this.state.time, location: this.state.location, shortDescription: this.state.description, food: this.state.food});
    this.props.handleClose();
  }
  render() {
    
    return (
    	
      <ScrollView>
      <View style={{ height: '100%', marginTop: 0}}>
        <View style={{ flexDirection: 'column', backgroundColor: UITheme.palette.primaryColor, flex: 0.4, height: '100%', alignItems: 'flex-start', padding: 25  }}>
          <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'flex-end', marginTop: 0  }}>
            <TouchableWithoutFeedback onPress={() => this.props.handleClose()}>
              <IonIcon name="ios-close" size={60} color='white' />
            </TouchableWithoutFeedback>
          </View>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', alignSelf: 'center', marginTop: 10  }}>Create an Event</Text>
        </View>
      <View style={{paddingTop:50}}>
      </View>
       
            <TextInput
              style={{ padding: 10, width: '92%', alignSelf:'center', height: 40, borderWidth: 0, backgroundColor: '#F7F8FC' }}
              value={this.state.nameOfEvent}
              onChangeText={(nameOfEvent) => this.setState({nameOfEvent})}
              placeholder="Name of Event" />
        
          <View style={{ flexDirection: 'column', flex: 0.8, height: '100%' }}>
            <View style={{ flexDirection: 'row', flex: 1, padding: 15 }}>
              <TextInput
                style={{ padding: 10, width: '100%', marginTop: 20, height: 50, borderWidth: 0, backgroundColor: '#F7F8FC' }}
                placeholder="Date" 
                onChangeText={(date) => this.setState({date})}
                multiline={true}/>
            </View>
          </View>
          
          <View style={{ flexDirection: 'column', flex: 0.8, height: '100%' }}>
            <View style={{ flexDirection: 'row', flex: 1, padding: 15 }}>
              <TextInput
                style={{ padding: 10, width: '100%', marginTop: 20, height: 50, borderWidth: 0, backgroundColor: '#F7F8FC' }}
                placeholder="Time" 
                onChangeText={(time) => this.setState({time})}
                multiline={true}/>
            </View>
          </View>

          <View style={{ flexDirection: 'column', flex: 0.8, height: '100%' }}>
            <View style={{ flexDirection: 'row', flex: 1, padding: 15 }}>
              <TextInput
                style={{ padding: 10, width: '100%', marginTop: 20, height: 75, borderWidth: 0, backgroundColor: '#F7F8FC' }}
                placeholder="Location" 
                onChangeText={(location) => this.setState({location})}
                multiline={true}/>
            </View>
          </View>

          <View style={{ flexDirection: 'column', flex: 0.8, height: '100%' }}>
            <View style={{ flexDirection: 'row', flex: 1, padding: 15 }}>
              <TextInput
                style={{ padding: 10, width: '100%', marginTop: 20, height: 100, borderWidth: 0, backgroundColor: '#F7F8FC' }}
                placeholder="Description"
                onChangeText={(description) => this.setState({description})}
                multiline={true}/>
            </View>
          </View>

          <View style={{ flexDirection: 'column', flex: 0.8, height: '100%' }}>
            <View style={{ flexDirection: 'row', flex: 1, padding: 15 }}>
              <TextInput
                style={{ padding: 10, width: '100%', marginTop: 20, height: 100, borderWidth: 0, backgroundColor: '#F7F8FC' }}
                placeholder="Food"
                onChangeText={(food) => this.setState({food})}
                multiline={true}/>
            </View>
          </View>

           <View style={{ flexDirection: 'column', flex: 1, height: '100%', paddingTop: 15, paddingLeft: 25, paddingRight: 25}}>
              <TouchableWithoutFeedback onPress={() => {this.handleCloseAndCreate()}}>
                <View style={{ backgroundColor: UITheme.palette.primaryColor, height: 60, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20}}>Create</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
      </View>
      </ScrollView>

       
    );
  }
}