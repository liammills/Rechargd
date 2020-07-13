import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types'
import GoToScreen from './GoToScreen';

export default class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }

  handleNameChange = username => { this.setState({username}) }
  handlePasswordChange = password => { this.setState({password}) }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{height:100, width:100, margin: 20}}
          source={require('../assets/profile.png')}
        />
        <Text style={{color:'#5f87bd', fontSize: 18}}>
        Log In
        </Text>
        <View style={styles.container}>
        <TextInput
          style={styles.username}
          //value={this.state.username}
          onChangeText={this.handleNameChange}
          placeholder="username"
          autoCorrect={false}
        />
        <TextInput
          style={styles.password}
          onChangeText={this.handlePasswordChange}
          placeholder="password"
          autoCorrect={false}
        />
          <TouchableOpacity style={styles.login} onPress={() => console.log(this.state), GoToScreen('Search')}>
            <Text style={{color:'white'}}>
            Login
            </Text>
          </TouchableOpacity>
          </View>
        <View>
          <Text style={styles.normalFont}>Don't have an account?</Text>
          <TouchableOpacity style={styles.register} onPress={() => this._handlePress()}>
          <Text style={{color:'white'}}>
          Register
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text href="" style={{color:'#5f87bd', textDecorationLine: 'underline', marginTop:20}}>
          I forgot my email or password.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    margin: 5,
  },
  normalFont: {
    fontSize: 12,
    fontWeight: '200',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
    marginTop: 20,
  },
  login: {
    marginTop: 13,
    marginBottom: 0,
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#5f87bd',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 45,
  },
  username: {
    height: 40, width: 300, paddingLeft: 10, marginVertical: 8, backgroundColor: 'rgba(95, 135, 189,0.3)'
  },
  password: {
    height: 40, width: 300, paddingLeft: 10, marginVertical: 10, backgroundColor: 'rgba(95, 135, 189,0.3)'
    },
  register: {
    marginTop: 6,
    marginBottom: 0,
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#5f87bd',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 45,
  },
});