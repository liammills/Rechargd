import * as React from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../assets/rechargd blue logo.png')}
        />
      <Text style={styles.title}>
        Welcome to Rechar.gd!
      </Text>
      <View style={{height: 1, width: 250, backgroundColor: '#100A31', margin: 20}} />
      <TouchableOpacity style={styles.login1} onPress={() => navigation.navigate('LoginForm')}>
        <Text style={styles.text}>Login as Provider</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login1} onPress={() => this._handlePress()}>
        <Text style={styles.text}>Login as Driver</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.normalFont}>Don't have an account?</Text>
        <TouchableOpacity style={styles.login2} onPress={() => this._handlePress()}>
        <Text style={[styles.text]}>
        Register
        </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.login3} onPress={() => this._handlePress()}>
        <Text style={[styles.text1]}>
        Use as Guest
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
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
    fontWeight: 200,
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
    textColor: '#ecf0f1',
    color: '#ecf0f1',
    backgroundColor: '#2F578D',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    font: 'Arial',
    paddingVertical: 8,
    paddingHorizontal: 45,
  },
  login2: {
    marginTop: 7,
    marginBottom: 0,
    fontSize: 14,
    textAlign: 'center',
    textColor: '#fff',
    backgroundColor: '#5f87bd',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    font: 'Arial',
    paddingVertical: 8,
    paddingHorizontal: 45,
  },
  login3: {
    marginTop: 7,
    marginBottom: 0,
    fontSize: 12,
    textAlign: 'center',
    textColor: '#fff',
    backgroundColor: '#5f87bd',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    font: 'Arial',
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