import * as React from "react";
import { View } from "react-native";
import MapView from 'react-native-maps';

export default function Map() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    //<Text>
    //Hello World
    //</Text>
      <MapView style={{
        width: "100%",
        height: "100%",
      }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />
    </View>
  );
}
