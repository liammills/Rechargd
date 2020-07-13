import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function GoToScreen({ screenName }) {
  const navigation = useNavigation();

  return (
      navigation.navigate(screenName)
  );
}