import React from 'react';
import {Text, View} from 'react-native';
import {styles, mainPurple} from '../Styles/bundle';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {TouchableRipple} from 'react-native-paper';
import SettingsNavIcon from '../Components/SVG/navigation_menu/settings';
import AlarmsNavIcon from '../Components/SVG/navigation_menu/alarms';
import UpcomingAlarms from './upcomingAlarms';
import ListOfAlarms from './listOfSettedAlarms';
export default Alarms = () => {
  return (
    <View style={styles.alarmsPageContainer}>
      <UpcomingAlarms />
      <ListOfAlarms />
    </View>
  );
};
