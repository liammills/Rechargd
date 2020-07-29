import React from 'react';
import { View, Text } from 'react-native';

export default function UseAsGuest({ navigation }) {
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text>
                This functionality is still to be implemented.
            </Text>
            <Text style={{padding:10, fontWeight: 'bold'}}>
                Go back to Welcome
            </Text>
        </View>
    )
}