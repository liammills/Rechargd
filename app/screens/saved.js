import * as React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import NearbyStations from '../components/NearbyStations';

export default class Saved extends React.Component {
  
  render() {
    return (
    <View style={styles.container}>
      <View style={{marginTop:50}}>
        <ScrollView>
          <NearbyStations />
          <NearbyStations />
          <NearbyStations />
          <NearbyStations />
        </ScrollView>
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
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10
  },
});