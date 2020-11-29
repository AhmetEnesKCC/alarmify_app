import React, {useEffect} from 'react';

import {Text, View, BackHandler} from 'react-native';
import {NavigationContainer, NavigationAction} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {styles, mainPurple} from '../Styles/bundle';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {TouchableRipple} from 'react-native-paper';
import SettingsNavIcon from '../Components/SVG/navigation_menu/settings';
import AlarmsNavIcon from '../Components/SVG/navigation_menu/alarms';
import Alarms from '../Components/alarms';
import NavBar from '../Components/navbar';
export default Home = ({navigation}) => {
  const Stack = createStackNavigator();
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function () {
      return true;
    });
  }, []);
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name="alarms"
          component={Alarms}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
      <NavBar />
    </NavigationContainer>
  );
};
