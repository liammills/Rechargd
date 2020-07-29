import 'react-native-gesture-handler';
import React from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../context';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

import CheckChargingTime from '../screens/CheckChargingTime';
import Search from '../screens/Search';
import Station from '../screens/Station';
import Map from '../screens/Map';
import Saved from '../screens/Saved';
import Messages from '../screens/Messages';
import Faq from '../screens/Faq';
import PersonalDetails from '../screens/PersonalDetails';
import PaymentDetails from '../screens/PaymentDetails';
import Settings from '../screens/Settings';
import SideScreenDriverContent from './SideScreenDriverContent';


const SearchStack = createStackNavigator();
const SearchStackScreen = () => (
  <SearchStack.Navigator initialRouteName="Search">
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Map" component={Map} option={{headerTitle:'Current Map', tabBarVisible: false}}/>
    <SearchStack.Screen
      name="Station"
      component={Station}
      options={{title: '1 Fake St'}}
    />
  </SearchStack.Navigator>
);

const SavedStack = createStackNavigator();
const SavedStackScreen = () => (
  <SearchStack.Navigator initialRouteName="Saved">
    <SavedStack.Screen name="Saved Stations" component={Saved}/>
  </SearchStack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabDriver = props => (
  <Tab.Navigator options={{color: 'rgba(95, 135, 189,0.6)'}} initialRouteName={props}>
    <Tab.Screen name="Search" component={SearchStackScreen} options={{
        tabBarIcon: () => (
          <Ionicons
          name="ios-search"
          size={34}
          color={'rgba(95, 135, 189,0.6)'}
          />
        ),
      }}/>
      <Tab.Screen name="Saved Stations" component={Saved} options={{
        tabBarIcon: () => (
          <Ionicons
          name="ios-bookmark"
          size={34}
          color={'rgba(95, 135, 189,0.6)'}
          />
        ),
      }}/>
    <Tab.Screen name="Messages" component={Messages} options={{
        tabBarIcon: () => (
          <Ionicons
          name="ios-chatbubbles"
          size={34}
          color={'rgba(95, 135, 189,0.6)'}
          />
        ),
      }}/>
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();  

export default SideScreenDriver = () => {
    const { switchAccount, signOut } = React.useContext(AuthContext)

    return (
      <Drawer.Navigator drawerContent={props => <SideScreenDriverContent {...props} />}>
        <Drawer.Screen name="Search" component={TabDriver} />
        <Drawer.Screen name="Check Charging Time" component={CheckChargingTime} />
        <Drawer.Screen name="Personal Details" component={PersonalDetails} />
        <Drawer.Screen name="Payment Details" component={PaymentDetails} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="FAQ" component={Faq} />
    </Drawer.Navigator>
    );
};
