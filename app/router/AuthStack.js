import React from 'react';

import LoginForm from '../screens/LoginForm';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import UseAsGuest from '../screens/UseAsGuest';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default AuthStackScreen = () => (
 <AuthStack.Navigator initialRouteName="Welcome">
   <AuthStack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
   <AuthStack.Screen name="LoginForm" component={LoginForm} options={{headerShown:false}}/>
   <AuthStack.Screen name="Register" component={Register} />
   <AuthStack.Screen name="UseAsGuest" component={UseAsGuest} />
 </AuthStack.Navigator>
);