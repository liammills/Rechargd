import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Picker,
  ScrollView,
  Alert,
  FlatList,
  SafeAreaView,
  Button
} from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DateTimePicker from '@react-native-community/datetimepicker';

// navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');

//const GOOGLE_APIKEY = config.GOOGLE_API_KEY;

const data = [{
  label: 'Tesla Type 2 (Menneke)',
  value: 'tesla-menneke',
}, {
  label: 'Universal Charger',
  value: 'universal',
}, {
  label: 'Tritium Home Charger',
  value: 'tritium',
}];

export default class NewListing extends React.Component {
  state = {
    address: 'address',
    chargerType: 'universal',
    bio: 'bio',
    availability: [],
    day: 'mon',
    open: '00:00',
    close: '23:59',
    showOpen: false,
    showClose: false
  }



  handleAddressChange = address => { this.setState({ address }) }
  handleBioChange = bio => { this.setState({ bio }) }
  handleChargerChange = charger => { this.setState({ chargerType }) }

  // Time picker functions
  //updateTimeAvailability = (startTime, endTime, day) => {this.setState({day: [startTime, endTime]})}
  onCancel() {
    this.TimePicker.close();
  }
  onConfirmOpen = (event, date) => {
    this.setState({ open: date.toLocaleTimeString().substring(0,5)})
    this.setState({showOpen: false});
  }
  onConfirmClose = (event, date) =>  {
    this.setState({ close: date.toLocaleTimeString().substring(0,5) })
    this.setState({showClose: false});
  }
  appendAvailability = () => {
    let av = this.state.availability;
    let op = this.state.open;
    let cl = this.state.close;
    if (op < cl) {
      av.push({
        day: this.state.day,
        open: op,
        close: cl
      });
      this.setState({availability: av})
     } else {
        Alert.alert('Invalid time slot. Open must be before close.')
     }
    }
  removeAvailability = (avObj) => {
    let av = this.state.availability;
    let filteredAv = av.filter((item) => {
    return JSON.stringify(item) !== JSON.stringify(avObj)
    })
    this.setState({availability: filteredAv})
  }


  render() {
    return (
      <SafeAreaView>
      <View
      style={{width:'100%', height: '100%'}}
      keyboardShouldPersistTaps='handled'
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            List a station
        </Text>

        <GooglePlacesAutocomplete
          placeholder='Address'
          style={{width:300, margin: 10}}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: process.env.GOOGLE_API_KEY,
            language: 'en',
          }}
          minLength={3}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(95, 135, 189,0.3)',
              width: 300,
              height: 40,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              marginVertical: 7,
              borderRadius: 5
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 40,
              color: '#5d5d5d',
              fontSize: 15,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
        >
          {({ handleTextChange, locationResults }) => (
          <React.Fragment>
            {console.log('locationResults', locationResults)}
            <View>
              <TextInput
              style={styles.address}
              placeholder="address"
              placeholderTextColor= '#aaa'
              onChangeText={handleTextChange}
              />
            </View>
          </React.Fragment>
          )}
        </GooglePlacesAutocomplete>


          <TextInput
            style={styles.address}
            placeholder="Address"
            placeholderTextColor='#aaa'
            onChangeText={this.handleAddressChange}
          />
          <View style={{ margin: 10 }}>
            <Text style={styles.dayText}>Availability</Text>

            <View style={{marginBottom:8}}>
            {this.state.availability.map((item, index) => (
              <View style={styles.avView}>
                <Text style={styles.avText}>
                  <Text style={{fontWeight: '600'}}>{item.day.charAt(0).toUpperCase()+item.day.slice(1)}</Text>:  {item.open} - {item.close}
                </Text>
                <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={()=>this.removeAvailability(item)}>
                  <Text style={styles.btn2}>
                    -
                </Text>
                </TouchableOpacity>
              </View>
            ))}
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Picker
                selectedValue={this.state.day}
                prompt='Day'
                mode='dropdown'
                style={styles.dayPicker}
                onValueChange={value => this.setState({ day: value })}
                itemStyle={{ fontSize: 14 }}
              >
                <Picker.Item label="Mon" value="mon" />
                <Picker.Item label="Tue" value="tue" />
                <Picker.Item label="Wed" value="wed" />
                <Picker.Item label="Thu" value="thu" />
                <Picker.Item label="Fri" value="fri" />
                <Picker.Item label="Sat" value="sat" />
                <Picker.Item label="Sun" value="sun" />
              </Picker>

              <TouchableOpacity
                onPress={() => this.setState({ showOpen: true })}
                style={styles.dayPicker}
              >
                <Text style={{ textAlign: 'center', fontSize: 15, padding: 2 }}>{this.state.open}</Text>
              </TouchableOpacity>
              {this.state.showOpen && <DateTimePicker
                testID="openTimePicker"
                value={new Date(0)}
                mode='time'
                minuteInterval={5}
                display="spinner"
                onChange={this.onConfirmOpen}
              />}
              <TouchableOpacity
                onPress={() => this.setState({ showClose: true })}
                style={styles.dayPicker}
              >
                <Text style={{ textAlign: 'center', fontSize: 15, padding: 2 }}>{this.state.close}</Text>
              </TouchableOpacity>
              {this.state.showClose && <DateTimePicker
                testID="closeTimePicker"
                value={new Date(0)}
                mode='time'
                minuteInterval={5}
                display="spinner"
                onChange={this.onConfirmClose}
              />}
              <TouchableOpacity
              onPress={() => this.appendAvailability() }
              >
                <Text style={styles.btn}>+</Text>
              </TouchableOpacity>
            </View>




          </View>
          <TouchableOpacity style={{ margin: 10, backgroundColor: 'rgba(95, 135, 189,0.3)' }}>
            <Picker
              selectedValue={this.state.chargerType}
              prompt='Charger Type'
              mode='dropdown'
              style={{ position: 'relative', height: 40, width: 300, color: '#aaa' }}
              onValueChange={value => this.setState({ chargerType: value })}
              itemStyle={{ fontSize: 14 }}
            >
              <Picker.Item label="Charger Type" value="" />
              <Picker.Item label="Tesla" value="tesla" />
              <Picker.Item label="Tesla Type 2 (Menneke)" value="tesla-menneke" />
              <Picker.Item label="Universal Charger" value="universal" />
              <Picker.Item label="J1772" value="j1772" />
              <Picker.Item label="Tritium Home Charger" value="tritium" />
              <Picker.Item label="CCS" value="ccs" />
              <Picker.Item label="CCHAdeMO" value="chademo" />
            </Picker>
          </TouchableOpacity>
          <TextInput
            style={styles.bio}
            onChangeText={this.handleBioChange}
            placeholder="Bio (max 300 characters)"
            placeholderTextColor='#aaa'
            multiline={true}
            maxLength={300}
          />
          <TouchableOpacity style={{ margin: 10, backgroundColor: 'rgba(95, 135, 189,0.3)' }}>
            <Picker
              selectedValue={this.state.chargerType}
              prompt='Amount of chargers'
              mode='dropdown'
              style={{ position: 'relative', height: 40, width: 300, color: '#aaa' }}
              onValueChange={value => this.setState({ chargerType: value })}
              itemStyle={{ fontSize: 14 }}
            >
              <Picker.Item label="Amount of chargers" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />

            </Picker>
          </TouchableOpacity>
          <Text style={{ color: '#5f87bd', textDecorationLine: 'underline', margin: 10 }}>
            Upload photos
        </Text>
          <TouchableOpacity style={styles.submit} onPress={() => Alert.alert("Station will be reviewed by team.\nYou will receive a message if listed.")}>
            <Text style={{ color: 'white' }}>
              Submit
              </Text>
          </TouchableOpacity>
          <View style={{ position: 'absolute', left: 20, top: 30 }}>
            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
              <Text style={{ transform: [{ rotate: '-90deg' }], fontSize: 20, padding: 5, color: '#2F578D' }}>
                |||
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 12,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2F578D',
  },
  dayPicker: {
    height: 30,
    width: 50,
    marginHorizontal: 2,
    backgroundColor: 'rgba(95, 135, 189,0.3)',
    borderRadius: 5
  },
  dailyAvailability: {
    height: 30,
    width: 40,
    paddingLeft: 10,
    backgroundColor: 'rgba(95, 135, 189,0.3)',
    borderRadius: 5,
    marginHorizontal: 3
  },
  bio: {
    height: 120,
    width: 300,
    paddingLeft: 10,
    marginVertical: 7,
    backgroundColor: 'rgba(95, 135, 189,0.3)',
    borderRadius: 5
  },
  address: {
    height: 40,
    width: 300,
    paddingLeft: 10,
    marginVertical: 7,
    backgroundColor: 'rgba(95, 135, 189,0.3)',
    borderRadius: 5
  },
  submit: {
    margin: 10,
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#5f87bd',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 45,
  },
  avView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingVertical: 2
  },
  avText: {
    color: '#5f87bd',
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center'
  },
  dayText: {
    color: '#5f87bd',
    marginBottom: 7,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center'
  },
  btn: {
    color: '#2F578D',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'right',
    marginLeft: 10, 
  },
  btn2: {
    color: '#821432',
    fontWeight: '700',
    marginLeft: 15,
  }
});


/* ADD: Google Autocomplete

<GooglePlacesAutocomplete
          placeholder='Search'
          style={{width:300, margin: 10}}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: GOOGLE_APIKEY,
            language: 'en',
          }}
          debounce={500}
          minLength={3}
        >
          {({ handleTextChange, locationResults }) => (
          <React.Fragment>
            {console.log('locationResults', locationResults)}
            <View>
              <TextInput
              style={styles.address}
              placeholder="address"
              placeholderTextColor= '#aaa'
              onChangeText={handleTextChange}
              />
            </View>
          </React.Fragment>
          )}
        </GooglePlacesAutocomplete>
        */