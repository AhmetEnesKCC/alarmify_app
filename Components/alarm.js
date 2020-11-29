import React, {useState} from 'react';
import {Alert, Text, TouchableWithoutFeedback, View} from 'react-native';
import {styles, windowWidth} from '../Styles/bundle';
import {TouchableRipple} from 'react-native-paper';
import SwitchAlarm from './switch_comp';
import {CheckBox} from './checkBox';
import LocalStorage from '../Storage/AsyncStorage/main';
export const Alarm = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <View>
      <TouchableWithoutFeedback
        style={[styles.alarmContainer, {opacity: checked ? 1 : 1}]}
        borderless
        onPress={() => {
          setChecked(!checked);
        }}
        onLongPress={() => Alert.alert('POP')}>
        <View
          style={{
            width: windowWidth - 50,
            padding: 25,
            height: 70,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={[styles.alarmClock]}>{props.clock}</Text>
          <Text>{props.note}</Text>
          <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
            <SwitchAlarm id={props.id} active={props.isActive} />
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
