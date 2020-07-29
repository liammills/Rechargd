import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Settings({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
          Change settings page
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
