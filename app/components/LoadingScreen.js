import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../assets/rechargd blue logo.png')}
        />
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
  logo: {
    width: 300,
    height: 300,
  }
});