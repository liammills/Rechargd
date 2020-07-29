import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, CheckBox, Picker } from 'react-native';
import { AuthContext } from '../context';


export default function Register () {
  const { registerProvider, registerDriver } = React.useContext(AuthContext)

  const [username, onChangeUser] = React.useState('username');
  const [password, onChangePass] = React.useState('password');
  const [carModel, setCarModel] = React.useState('');
  const [isDriver, setIsDriver] = React.useState(false);
  const [isProvider, setIsProvider] = React.useState(false);

  return (
    <View style={styles.container}>
      <Image 
        style={{height:100, width:100, margin: 4}}
        source={require('../assets/profile.png')}
      />
      <Text style={{color:'#5f87bd', textDecorationLine: 'underline'}}>Upload an image</Text>
      <View style={{margin:10, alignItems: 'center'}}>
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="first name"
        autoCorrect={false}
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="last name"
        autoCorrect={false}
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="email"
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="confirm email"
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
      <TextInput
        style={styles.password}
        onChangeText={text => onChangePass(text)}
        placeholder="confirm password"
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry
      />
      <TouchableOpacity style={styles.password}>
            <Picker
              selectedValue={carModel}
              prompt='Main Vehicle'
              mode='dropdown'
              style={{ position: 'relative', height: 40, width: 300, color: '#aaa' }}
              onValueChange={value => setCarModel(value)}
              itemStyle={{ fontSize: 14 }}
            >
              <Picker.Item label="Main Vehicle" value="" />
              <Picker.Item label="N/A" value="na" />
              <Picker.Item label="Tesla Model S" value="tesla-s" />
              <Picker.Item label="Tesla Model 3" value="tesla-3" />
              <Picker.Item label="Tesla Model X" value="tesla-x" />
              <Picker.Item label="Tesla Model Y" value="tesla-y" />
            </Picker>
          </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxIndividual}>
        <CheckBox
          value={isDriver}
          onValueChange={setIsDriver}
          style={styles.checkbox}
        />
        <Text style={{color: '#5f87bd'}}>Driver</Text>
        </View>
        <View style={styles.checkboxIndividual}>
        <CheckBox
          value={isProvider}
          onValueChange={setIsProvider}
          style={styles.checkbox}
        />
        <Text style={{color: '#5f87bd'}}>Provider</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
          {isDriver && 
        <TouchableOpacity style={styles.login} onPress={() => {console.log([username,password]), registerDriver()}}>
          <Text style={styles.loginText}>
            Login as Driver
          </Text>
        </TouchableOpacity>}
        {isProvider &&
        <TouchableOpacity style={styles.login} onPress={() => registerProvider()}>
          <Text style={styles.loginText}>
            Login as Provider
          </Text>
        </TouchableOpacity>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
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
    marginTop: 10,
    marginHorizontal: 5,
    marginBottom: 0,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#5f87bd',
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 140,
    alignItems: 'center'
  },
  loginText: {
      color: 'white',
      fontSize: 13
  },
  password: {
    height: 36, width: 300, paddingLeft: 10, marginVertical: 6, backgroundColor: 'rgba(95, 135, 189,0.3)'
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
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 2
  },
  checkbox: {
    alignSelf: "center",
    color: '#5f87bd'
  },
  checkboxIndividual: {
    marginHorizontal: 40,  
    alignItems: 'center',
    justifyContent: 'center',
  }
});