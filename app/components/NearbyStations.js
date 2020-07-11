import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

let station = {
    address: '123 Main St',
    distance: 2.5,
    img: require('../assets/profile.png'),
    type: 'Universal Charger',
    bio: 'Hello I am Tom',
    cost: 42,
    rating: 4.5
  }
  
let station2 = {
  address: '1 Fake St',
  distance: 3.2,
  img: '../assets/rechargd blue logo.png',
  type: 'Tesla Type 2 (Menneke)',
  bio: 'We have a study space',
  cost: 70,
  rating: 4,
}

export default function NearbyStations() {

  return (
    <View style={{backgroundColor: 'rgba(95, 135, 189,0.6)', width: 320, borderRadius: 10, flexDirection: 'row', margin:5}}>
      <View style={styles.container1}>
        <Text style={styles.text}>{station2.address}</Text>
        <Text style={styles.text}>{station2.type}</Text>
        <Text style={styles.text}>{station2.bio}</Text>
        <Image />
      </View>
      <View style={styles.container2}>
        <Text style={{color: '#404040', textAlign: 'right', paddingRight: 3}}>
          {station2.distance}km away
        </Text>
        <Image 
          style={{height:70, width:160, margin:8, borderWidth:0.5, borderColor:'gray', backgroundColor:'white'}}
          source={station.img}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: 120,
    alignItems: 'left',
    margin: 8,
    padding: 3
  },
  container2: {
    width: 200,
    margin: 0,
    padding: 8,
    paddingRight: 30
  },
  text: {
    margin: 3,
    color: '#404040'
  }
});

const fuck_you = 123;