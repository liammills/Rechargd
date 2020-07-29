import * as React from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import NearbyStations from '../components/NearbyStations';
import NearbyStations1 from '../components/NearbyStations1';
import NearbyStations2 from '../components/NearbyStations2';


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
      <View>
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
              value={this.state.whereTo}
              onChangeText={this.handleLocationChange}
              placeholder="Where do you want to search?"
            />
          </View>
          <View style={{flexDirection:'row', marginHorizontal: 20, marginTop: 10, marginBottom: 5, alignItems:'center'}}>
            <Text style={styles.goToText} onPress={()=>this.props.navigation.navigate('Map')}>
              Go to current map
            </Text>
            {this.state.advSearch ? (
              <View style={{backgroundColor: 'rgba(95, 135, 189,0.6)', width: 320, borderRadius: 10, margin:5}}>
              <View style={styles.container}>
                <Text style={styles.text} onPress={() => this.toggleAdvSearch}>
                X
                </Text>
              </View>
            </View>
            ):
            (<Text style={styles.advSearchText} onPress={this.toggleAdvSearch}>
                Advanced Search
              </Text>)}
              <TouchableOpacity style={styles.goButton}
              onPress={()=>console.log(this.state.whereTo)}>
              <Text style={{color:'white', margin:5}}>
                Go
                </Text>
              </TouchableOpacity>
          </View>
          <ScrollView style={{marginTop:9}}>
            <NearbyStations />
            <NearbyStations1 />
            <NearbyStations2 />
          </ScrollView>
        </View>
        <View style={{alignItems: 'flex-start', position: 'absolute'}}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Text style={{transform:[{rotate: '-90deg'}], fontSize: 20, padding: 18, color: '#2F578D'}}>
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
    //flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 0,  
  },
  goButton: {
    backgroundColor: '#2F578D',
    paddingHorizontal:3,
    width: 35,
    borderRadius:4
  },
  search: {
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
    padding: 12,
    paddingLeft: 18,
    width: 360,
    backgroundColor: 'rgba(95, 135, 189,0.1)',
    marginTop: 52
  },
  goToText: {
    //margin: 20,
    fontSize: 13,
    //marginLeft: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#2F578D',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingRight: 40
  },
  advSearchText: {
    //margin: 20,
    fontSize: 13,
    textAlign: 'right',
    color: '#2F578D',
    //marginRight: 20,
    alignItems: 'flex-end',
    paddingLeft: 20,
    marginRight: 30
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
  text: {
    padding: 3,
    color: '#404040',
  }
});