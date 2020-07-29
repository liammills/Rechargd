import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

let station = {
  address: '1 Fake St',
  distance: 2.5,
  img: require('../assets/station.jpg'),
  type: 'Tesla Type 2',
  bio: 'The charging station is right out the front of our house. Feel free to park in the driveway.\n\nThere are lovely cafes nearby where you can do some work or grab a bite to eat.\n\nIf you want any more information or need any help, send me a message or call me on 0412123123.',
  cost: 70,
  rating: 4,
}

export default function NearbyStations() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
      style={{backgroundColor: 'rgba(95, 135, 189,0.6)', width: 360, borderRadius: 20, flexDirection: 'row', margin:5, flex: 1}}
      onPress = {()=> navigation.push('Station')}
      >
        <View style={styles.container1}>
          <Text style={styles.text, {fontWeight:'400'}}>{station.address}</Text>
          <Text style={styles.text}>{station.type}</Text>
          <Text style={styles.text} numberOfLines={3}>{station.bio}</Text>
          <Image />
        </View>
        <View style={styles.container2}>
          <Text style={{color: '#404040', textAlign: 'right', paddingRight: 3}}>
            {station.distance}km away
          </Text>
          <Image 
            style={{height:70, width:160, margin:8, borderWidth:0.5, borderRadius: 3, borderColor:'white', backgroundColor:'white'}}
            source={station.img}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: 120,
    //alignItems: 'left',
    margin: 8,
    padding: 3,
    paddingLeft: 10,
    flex: 1
  },
  container2: {
    width: 200,
    padding: 8,
    paddingRight: 30
  },
  text: {
    margin: 3,
    color: '#404040',
    fontSize: 12.5
  }
});

/*<Stars
            display={3.67}
            spacing={8}
            count={5}
            starSize={40}
            fullStar= {require('../assets/starFilled.png')}
            emptyStar= {require('../assets/starEmpty.png')}/>*/