import 'react-native-gesture-handler';
import * as React from 'react';

import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import LoadingScreen from './components/LoadingScreen';
import Search from './components/Search'
import Map from './components/Map'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (<LoadingScreen />);
  } else {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
};

export default App;
