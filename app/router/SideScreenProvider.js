import 'react-native-gesture-handler';
import React from 'react';
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

import Messages from '../screens/Messages';
import Faq from '../screens/Faq';
import NewListing from '../screens/NewListing';
import Bookings from '../screens/Bookings';
import Diagnostics from '../screens/Diagnostics';
import Reviews from '../screens/Reviews';
import PersonalDetails from '../screens/PersonalDetails';
import PaymentDetails from '../screens/PaymentDetails';
import Settings from '../screens/Settings';
import SideScreenProviderContent from './SideScreenProviderContent';


const BookingsStack = createStackNavigator();
const BookingsStackScreen = () => (
  <BookingsStack.Navigator initialRouteName="Bookings">
    <BookingsStack.Screen name="Bookings" component={Bookings} />
  </BookingsStack.Navigator>
);

const Tab2 = createBottomTabNavigator();
const TabProvider = () => (
  <Tab2.Navigator options={{color: 'rgba(95, 135, 189,0.6)'}}>
    <Tab2.Screen name="Bookings" component={BookingsStackScreen} options={{
        tabBarIcon: () => (
          <Ionicons
          name="ios-book"
          size={34}
          color={'rgba(95, 135, 189,0.6)'}
          />
        ),
      }}/>
    <Tab2.Screen name="Messages" component={Messages} options={{
        tabBarIcon: () => (
          <Ionicons
          name="ios-chatbubbles"
          size={34}
          color={'rgba(95, 135, 189,0.6)'}
          />
        ),
      }}/>
    <Tab2.Screen name="Diagnostics" component={Diagnostics} options={{
        tabBarIcon: () => (
          <Ionicons
          name="ios-cube"
          size={34}
          color={'rgba(95, 135, 189,0.6)'}
          />
        ),
      }}/>
  </Tab2.Navigator>
);

const Drawer = createDrawerNavigator();

export default SideScreenProvider = () => {

    return (
    <Drawer.Navigator drawerContent={props => <SideScreenProviderContent {...props} />}>
        <Drawer.Screen name="Bookings" component={TabProvider} />
        <Drawer.Screen name="List a Station" component={NewListing} />
        <Drawer.Screen name="Reviews" component={Reviews} />
        <Drawer.Screen name="Personal Details" component={PersonalDetails} />
        <Drawer.Screen name="Payment Details" component={PaymentDetails} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="FAQ" component={Faq} />
    </Drawer.Navigator>
    );
}