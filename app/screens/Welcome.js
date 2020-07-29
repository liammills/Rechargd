import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
        <Text style={styles.title}>
          Welcome to Rechar.gd!
        </Text>
        <View style={{height: 0.5, width: 250, backgroundColor: '#100A31', margin: 20}} />
        <TouchableOpacity style={styles.login1} onPress={() => this.props.navigation.push('LoginForm')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.normalFont}>Don't have an account?</Text>
          <TouchableOpacity style={styles.login2} onPress={() => this.props.navigation.push('Register')}>
          <Text style={[styles.text]}>
          Register
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.login3} onPress={() => this.props.navigation.push('UseAsGuest')}>
          <Text style={[styles.text1]}>
          Use as Guest
          </Text>
        </TouchableOpacity>
        </View>
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2F578D',
  },
  normalFont: {
    fontSize: 12,
    fontWeight: '200',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
    marginTop: 20,
  },
  text: {
    color: 'white',
  },
  text1: {
    color: 'white',
    fontSize: 12,
  },
  login1: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#ecf0f1',
    backgroundColor: '#2F578D',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    fontFamily: 'Arial',
    paddingVertical: 8,
    paddingHorizontal: 45,
  },
  login2: {
    marginTop: 7,
    marginBottom: 0,
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#2F578D',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 20,
    fontFamily: 'Arial',
    paddingVertical: 8,
    paddingHorizontal: 45,
  },
  login3: {
    marginTop: 7,
    marginBottom: 0,
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#5f87bd',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    fontFamily: 'Arial',
    paddingVertical: 7,
    paddingHorizontal: 36,
  },
  logo: {
    width: 200,
    height: 190,
    marginBottom: 5,
    marginTop: 30,
  },
});