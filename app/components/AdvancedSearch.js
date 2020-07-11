import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function AdvancedSearch() {

  return (
    <View style={{backgroundColor: 'rgba(95, 135, 189,0.6)', width: 320, borderRadius: 10, margin:5}}>
      <View style={styles.container}>
        <Text style={styles.text} onPress={this.toggleAdvSearch}>
        X
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    alignItems: 'left',
    margin: 8,
    padding: 3
  },
  text: {
    margin: 3,
    color: '#404040',
  }
});