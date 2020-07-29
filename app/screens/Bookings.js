import * as React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import EventCalendar from 'react-native-events-calendar';

let { width } = Dimensions.get('window')

export default class Bookings extends React.Component {
  
  state = {
    events: [
      { start: '2020-07-21 00:30:00', end: '2020-07-21 01:30:00', title: 'John Smith', summary: 'Booking', color: 'blue'},
      { start: '2020-07-21 01:30:00', end: '2020-07-21 02:20:00', title: 'Jane Smith', summary: 'Booking' },
      { start: '2020-07-21 04:10:00', end: '2020-07-21 04:40:00', title: 'John Doe', summary: 'Booking' },
      { start: '2020-07-21 01:05:00', end: '2020-07-21 01:45:00', title: 'Jane Doe', summary: 'Booking' },
    ]
  }
  
  render() {
    return (
    <View style={{flex:1, backgroundColor: '#ecf0f1'}}>
         <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', right: 0, marginBottom: 20}}>
            <Text style={styles.addressText}>
              123 Main St
            </Text>
            <Text style={{fontSize: 13, textAlign: 'right', color: '#2F578D',marginRight: 20, paddingRight: 15}}>
              Change charging station
            </Text>
          </View>
        <View style={styles.container}>
            <EventCalendar
              eventTapped={console.log('broken')}
              events={this.state.events}
              width={width}
              initDate={'2020-07-21'}
              headerStyle={{backgroundColor:'black'}}
            />
            <Text style={{justifyContent:'center', alignItems: 'center', marginTop: 120}}>
                You have no bookings.
              </Text>
            {/*<Text style={{justifyContent:'center', alignItems: 'center', fontWeight: 'bold', marginTop: 100}}>
                Bookings to be listed in calendar-esque form
              </Text>*/}
      </View>
      <View style={{position: 'absolute', left: 20, top: 30}}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Text style={{transform:[{rotate: '-90deg'}], fontSize: 20, padding: 5, color: '#2F578D'}}>
              |||
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 0
  },
  addressText: {
    margin: 20, 
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'gray',
    paddingRight: 15,
    marginBottom: 0
  }
});