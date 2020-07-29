import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context';

export default function Account ({ navigation }) {
  const { switchAccount, signOut } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Image 
        style={{height:130, width:130, margin: 20}}
        source={require('../assets/profile.png')}
      />
      <Text style={styles.name}>Liam Mills</Text>
      <Text style={styles.car}>Tesla Model X</Text>
      <View style={{margin: 24}}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.push('PersonalDetails')}>
          <Text style={styles.text}>
          Personal Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.push('PaymentDetails')}>
          <Text style={styles.text}>
          Payment Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.push('Settings')}>
          <Text style={styles.text}>
          Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => switchAccount()}>
          <Text style={styles.text}>
          Switch account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => signOut()}>
          <Text style={styles.text}>
              Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    margin: 5,
    marginTop: 35
  },
  box: {
    height: 40,
    width: 320,
    marginVertical: 10,
    backgroundColor: '#5F87BD',
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 25,
    padding: 2,
    color: '#2F578D',
    fontWeight: 'bold'
  },
  car: {
      fontSize: 15,
      padding: 2,
      color: '#2F578D'
  },
  text: {
      color:'white',
      fontSize:18,
      textAlign: 'center',
  }
});