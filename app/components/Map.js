import * as React from "react";
import { View, Button } from "react-native";
import MapView from 'react-native-maps';

export default function Map({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView showsUserLocation={true} style={{
        width: "100%",
        height: "100%",
      }}
      initialRegion={{
        latitude: -33.89152,
        longitude: 151.27672,
        latitudeDelta: 0.0092,
        longitudeDelta: 0.0021,
      }}
      /> 
      <View style={{position: 'absolute', left: 30, top: 30}}>
        <Button title = "Go back" onPress = {() => navigation.goBack()}/>
      </View>
    </View>
  );
}
