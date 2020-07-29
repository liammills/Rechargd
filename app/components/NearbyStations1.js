import * as React from 'react';
import { View, Image, StyleSheet, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

let station = {
    address: '123 Main St',
    distance: 3.2,
    img: require('../assets/station.jpg'),
    type: 'Universal Charger',
    bio: 'Hello I am Tom. We have cafes and study spaces nearby for you to pass the time.',
    cost: 42,
    rating: 4.5
  }

export default function NearbyStations() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
      style={{backgroundColor: 'rgba(95, 135, 189,0.6)', width: 360, borderRadius: 20, flexDirection: 'row', margin:5, flex: 1}}
      onPress = {()=> Alert.alert("This functionality is yet to be built.")}
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