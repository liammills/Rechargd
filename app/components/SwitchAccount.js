import * as React from 'react';
import { View, Alert } from 'react-native';
import { AuthContext } from '../context';

export default function SwitchAccount() {
    const { switchAccount } = React.useContext(AuthContext)
    return(
        <View>
        {Alert.alert("Are you sure you want to switch account?",
        [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              //style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
          )}
        </View>
    )
}