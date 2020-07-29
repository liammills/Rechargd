import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Button,
  Alert
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Map({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView
      showsUserLocation={true}
      style={{
        width: "100%",
        height: "100%",
      }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -33.89352,
          longitude: 151.27772,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0101,
        }}
      >
        <Marker
          coordinate={{ latitude: -33.89052, longitude: 151.27372 }}
          key={0}
          >
          <Image
          source={require('../assets/station_icon.png')}
          />
            <Callout tooltip={true} onPress={()=>navigation.push('Station')}>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>1 Fake St</Text>
                  <Text style={styles.description} numberOfLines={3}>
                    The charging station is right out the front of our house. Feel free to park in the driveway.\n\nThere are lovely cafes nearby where you can do some work or grab a bite to eat.\n\nIf you want any more information or need any help, send me a message or call me on 0412123123.
                    </Text>
                    <Stars
                      default={4.5}
                      count={5}
                      half={true}
                      starSize={50}
                      spacing={5}
                      fullStar={<Icon size={18} name={'star'} style={[styles.myStarStyle]}/>}
                      emptyStar={<Icon size={18} name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                      halfStar={<Icon size={18} name={'star-half'} style={[styles.myStarStyle]}/>}
                    />
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrowLowerBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
          
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    borderRadius: 6,
    borderColor: 'rgba(95, 135, 189,1)',
    borderWidth: 1,
    padding: 15,
    width: 150,
    backgroundColor: '#fff'
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowLowerBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: 'rgba(95, 135, 189,1)',
    borderWidth: 15,
    alignSelf: 'center',
    marginTop: -30,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 15,
    alignSelf: 'center',
    marginTop: -1,
  },
  name: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '400',
  },
  description: {
    fontSize: 10,
    marginBottom: 5
  },
  image: {
    width: "100%",
    height: 80,
    borderWidth:0.5,
    borderRadius: 3,
    borderColor:'white',
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