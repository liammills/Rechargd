import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import NearbyStations from './NearbyStations';
import AdvancedSearch from './AdvancedSearch';

export default class Search extends React.Component {
  state = {
    whereTo: '',
    advSearch: false
  }

  handleLocationChange = whereTo => { this.setState({whereTo}) }
  toggleAdvSearch = () => {
    this.setState(prevState => ({advSearch: !prevState.advSearch}))
  }
  
  render() {
    return (
    <View style={styles.container}>
      <View style={{position: 'absolute', right: 0}}>
        <Text style={styles.carText}>
          Tesla Model X
        </Text>
        <Text style={{fontSize: 13, textAlign: 'right', color: '#2F578D',marginRight: 20, paddingRight: 15}}>
          Change car model
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.search}
          onChangeText={this.handleLocationChange}
          placeholder="Where do you want to search?"
        />
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.goToText}>
          Go to current map
        </Text>
        <Text style={styles.advSearchText} onPress={this.toggleAdvSearch}>
          Advanced Search
        </Text>
        {this.state.advSearch && (<AdvancedSearch />)}
      </View>
      <ScrollView>
        <NearbyStations />
        <NearbyStations />
        <NearbyStations />
        <NearbyStations />
      </ScrollView>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    
  },
  carView: {
    justifyContent: 'right',
    alignItems: 'flex-end',
    margin:0
  },
  search: {
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
    padding: 15,
    paddingLeft: 10,
    width: 320,
    backgroundColor: 'rgba(95, 135, 189,0.1)',
    marginTop: 52
  },
  goToText: {
    margin: 20,
    fontSize: 13,
    marginLeft: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#2F578D',
  },
  advSearchText: {
    margin: 20,
    fontSize: 13,
    textAlign: 'right',
    color: '#2F578D',
    marginRight: 20,
  },
  carText: {
    margin: 20, 
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'gray',
    paddingRight: 15,
    marginBottom: 5
  },
});