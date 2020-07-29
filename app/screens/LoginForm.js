import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { AuthContext } from '../context';
import Icon from 'react-native-vector-icons/Ionicons';
//import PasswordInputText from 'react-native-hide-show-password-input';


export default function LoginForm ({ navigation }) {
  const { signInDriver, signInProvider } = React.useContext(AuthContext)

  const [username, onChangeUser] = React.useState('username');
  const [password, onChangePass] = React.useState('password');

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
        onChangeText={text => onChangeUser(text)}
        placeholder="email"
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="password"
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry
      />
        <TouchableOpacity style={styles.login}
        onPress={() => {console.log([username,password]), signInDriver()}}>
          <Text style={{color:'white'}}>
            Login as Driver
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login}
        onPress={() => {console.log([username,password]), signInProvider()}}>
          <Text style={{color: 'white'}}>
            Login as Provider
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.normalFont}>Don't have an account?</Text>
        <TouchableOpacity style={styles.register} onPress={() => navigation.push('Register')}>
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
    width: 220,
    alignItems: 'center'
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