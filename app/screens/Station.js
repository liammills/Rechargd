import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker,
  Alert
} from 'react-native';
import Constants from 'expo-constants';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let station = {
  address: '1 Fake St',
  distance: 3.2,
  img: require('../assets/station.jpg'),
  type: 'Tesla Type 2 (Menneke)',
  bio: 'The charging station is right out the front of our house. Feel free to park in the driveway. There are lovely cafes nearby where you can do some work or grab a bite to eat.\n\nIf you want any more information or need any help, send me a message or call me on 0412123123.',
  cost: 70,
  rating: 4.5,
}

let firstDay = 1;
    let days = new Array(31).fill({label: null}).map((item, id) => {
        return {label: id + firstDay, key: id}
    });

export default class Station extends React.Component{

  state = {
    day: 1,
    month: 'jan',
    year: '2020',
    note: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ position: 'absolute', left: 48, top: 12 }}>
          <Stars
            default={station.rating}
            count={5}
            half={true}
            starSize={50}
            spacing={4}
            fullStar={<Icon size={18} name={'star'} style={[styles.myStarStyle]}/>}
            emptyStar={<Icon size={18} name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
            halfStar={<Icon size={18} name={'star-half'} style={[styles.myStarStyle]}/>}
          />
        </View>
        <View style={{ position: 'absolute', right: 50, top: 12 }}>
          <Text style={{ color: '#404040', textAlign: 'right', fontWeight: '600' }}>
            {station.distance}km away
          </Text>
        </View>
        <Image
          style={styles.image}
          source={station.img}
        />
        <View style={styles.subcontainer}>
          <ScrollView>
            <Text style={styles.charger}>{station.type}</Text>
            <Text style={styles.text}>{station.bio}</Text>
            <Text style={styles.charger}>Availability</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 3}}>
              <Text style={styles.text}>Which day? </Text>
              <Picker
                selectedValue={this.state.day}
                mode='dropdown'
                style={styles.date1}
                onValueChange={value => this.setState({day: value})}
                itemStyle={{ fontSize:12 }}
                data={days}
                >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
                <Picker.Item label="13" value="13" />
                <Picker.Item label="14" value="14" />
                <Picker.Item label="15" value="15" />
                <Picker.Item label="16" value="16" />
                <Picker.Item label="17" value="17" />
                <Picker.Item label="18" value="18" />
                <Picker.Item label="19" value="19" />
                <Picker.Item label="20" value="20" />                
                <Picker.Item label="21" value="21" />
                <Picker.Item label="22" value="22" />
                <Picker.Item label="23" value="23" />
                <Picker.Item label="24" value="24" />
                <Picker.Item label="25" value="25" />
                <Picker.Item label="26" value="26" />
                <Picker.Item label="27" value="27" />
                <Picker.Item label="28" value="28" />
                <Picker.Item label="29" value="29" />
                <Picker.Item label="30" value="30" />
                <Picker.Item label="31" value="31" />

              </Picker>
              <Picker
                  selectedValue={this.state.month}
                  mode='dropdown'
                  style={styles.date2}
                  onValueChange={value => this.setState({month: value})}
                  itemStyle={{ fontSize:12 }}
                  >
                  <Picker.Item label="Jan" value="jan" />
                  <Picker.Item label="Feb" value="feb" />
                  <Picker.Item label="Mar" value="mar" />
                  <Picker.Item label="Apr" value="apr" />
                  <Picker.Item label="May" value="may" />
                  <Picker.Item label="Jun" value="jun" />
                  <Picker.Item label="Jul" value="jul" />
                  <Picker.Item label="Aug" value="aug" />
                  <Picker.Item label="Sep" value="sep" />
                  <Picker.Item label="Oct" value="oct" />
                  <Picker.Item label="Nov" value="nov" />
                  <Picker.Item label="Dec" value="dec" />
              </Picker>
              <Picker
                selectedValue={this.state.year}
                mode='dropdown'
                style={styles.date3}
                onValueChange={value => this.setState({year: value})}
                itemStyle={{ fontSize:12 }}
                >
                <Picker.Item label="2020" value="2020" />
                <Picker.Item label="2021" value="2021" />
              </Picker>
            </View>
            <Text style={{textAlign: 'center', marginBottom: 20, fontWeight: 'bold', fontSize: 12.5}}>Calendar displaying time slots -- drag & drop.</Text>
            <View style={styles.subcontainer2}>
              <TextInput
                style={styles.note}
                onChangeText={value => this.setState({note: value})}
                placeholder="Note to station provider"
                placeholderTextColor='#aaa'
                multiline={true}
                maxLength={300}
              />
              <TouchableOpacity style={styles.book}
              onPress={() => Alert.alert("Booking organised and refundable until 24 hours prior.")}>
                <Text style={{ color: 'white' }}>
                  Book
                  </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  subcontainer: {
    alignItems: 'center',
    height: 350,
    width: 320
  },
  subcontainer2: {
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 320,
    margin: 12,
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: 'lightblue',
    marginBottom: 10,
    marginTop: 20
  },
  text: {
    margin: 4,
    lineHeight: 18,
    fontSize: 12.5,
    color: '#404040',
    marginBottom: 14,
    textAlign: 'left',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2F578D',
  },
  date1: {
    height: 30,
    width: 35,
    marginHorizontal: 2,
    backgroundColor: 'rgba(95, 135, 189,0.3)',
    borderRadius: 5,
    textAlign: 'center'
    },
  date2: {
    height: 30,
    width: 45,
    marginHorizontal: 2,
    backgroundColor: 'rgba(95, 135, 189,0.3)',
    borderRadius: 5
    },
  date3: {
    height: 30,
    width: 55,
    marginHorizontal: 2,
    backgroundColor: 'rgba(95, 135, 189,0.3)',
    borderRadius: 5
    },
  charger: {
    margin: 6,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#2F578D',
  },
  book: {
    margin: 10,
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#5f87bd',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 45
  },
  note: {
    height: 40,
    width: 300,
    paddingLeft: 10,
    backgroundColor: 'rgba(95, 135, 189,0.3)',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 5
  },
  myStarStyle: {
    color: 'gold',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  }
});
