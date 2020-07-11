import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Search from './screens/search';
import Saved from './screens/saved';
import Messages from './screens/messages';
import Profile from './screens/profile';

let screen = Dimensions.get('window');

export const Tabs = TabNavigator({
  'Search': {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => <Icon name="search-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Saved': {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: ({ tintColor }) => <Icon name="bookmark-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Messages': {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: 'Messages',
      tabBarIcon: ({ tintColor }) => <Icon name="chatbox-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="person-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
});

export const createRootNavigator = () => {
  return StackNavigator(
    {
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
  );
};
