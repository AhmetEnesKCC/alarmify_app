import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Styles/bundle';
export default UpComingAlarms = () => {
  return (
    <View style={styles.upcomingAlarmsContainer}>
      <Text style={styles.upcomingAlarmsText}>Siradaki alarm</Text>
      <Text style={styles.upcomingAlarmsClock}>Yaklasan Alarm Yok</Text>
      <View style={styles.horizontalSeperater}></View>
    </View>
  );
};
