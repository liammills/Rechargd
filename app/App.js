import 'react-native-gesture-handler';
import React from 'react';

/*import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';*/
import Search from './components/Search';
import Map from './components/Map';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createSwitchNavigator } from 'react-navigation';

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();


const App = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};

export default App;
