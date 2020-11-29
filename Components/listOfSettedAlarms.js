import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {styles} from '../Styles/bundle';
import {Alarm} from './alarm';
import LocalStorage from '../Storage/AsyncStorage/main';
export default ListAlarms = (props) => {
  const [alarms, setAlarms] = useState([]);
  const getAlarms = async () => {
    let gotAlarms = await LocalStorage.readObject('alarms');
    setAlarms(await gotAlarms);
    setTimeout(() => getAlarms(), 500);
  };
  useEffect(() => {
    getAlarms();
  }, []);
  return (
    <ScrollView style={styles.listAlarmsContainer}>
      {typeof alarms === 'object' &&
        alarms.length > 0 &&
        alarms.map((el) => (
          <Alarm
            note={el.note}
            id={el.id}
            hour={el.hour}
            minute={el.minute}
            clock={el.hour + ':' + el.minute}
            isActive={el.isActive}
          />
        ))}
    </ScrollView>
  );
};
