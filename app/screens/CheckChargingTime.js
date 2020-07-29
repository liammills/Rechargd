import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CheckChargingTime({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{width: 340, textAlign: 'center'}}>
          A screen to remotely see how much longer you have on your charging time.
      </Text>
      <Text style={{padding:20, fontWeight:'bold'}}>
          To be made
      </Text>
      <View style={{position: 'absolute', left: 20, top: 30}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text style={{transform:[{rotate: '-90deg'}], fontSize: 20, padding: 5, color: '#2F578D'}}>
              |||
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
