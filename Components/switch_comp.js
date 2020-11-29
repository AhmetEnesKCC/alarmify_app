import React, {useEffect, useRef, useState} from 'react';
import {Alert, Animated, StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {TouchableRipple} from 'react-native-paper';
import {mainPurple} from '../Styles/bundle';
import LocalStorage from '../Storage/AsyncStorage/main';

export default Switch = (props) => {
  const animateColor = useRef(new Animated.Value(0)).current;
  const translateCircle = useRef(new Animated.Value(0)).current;
  const [check, setCheck] = useState(props.active);
  useEffect(() => {
    animFunc();
  }, []);
  const getAllAlarms = async (checkType) => {
    const allAlarms = await LocalStorage.readObject('alarms');
    console.log(allAlarms);
    console.log(props.id);
    const changedAlarm = await allAlarms.find((el) => el.id === props.id);
    changedAlarm.isActive = checkType;
    const index = allAlarms.indexOf(changedAlarm);
    const newAlarms = await allAlarms.filter((el) => el.id !== props.id);
    const alartmPartOne = allAlarms.slice(0, index);
    const alarmPartTwo = allAlarms.slice(index + 1, allAlarms.length);
    const connectedArray = [...alartmPartOne, changedAlarm, ...alarmPartTwo];
    await LocalStorage.storeObject('alarms', connectedArray);
  };
  const animFunc = () => {
    if (props.onPress) {
      props.onPress();
    }
    if (check === true || check === 'true') {
      Animated.timing(animateColor, {
        toValue: 1,
        duration: 500,
      }).start();
      Animated.timing(translateCircle, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animateColor, {
        toValue: 0,
        duration: 500,
      }).start();
      Animated.timing(translateCircle, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    setCheck(!check);
  };

  const animInterpolate = animateColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['grey', mainPurple],
  });

  const circleInterpolate = translateCircle.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  const localStyle = StyleSheet.create({
    container: {
      width: 50,
      height: 30,
      borderRadius: 100,
      paddingHorizontal: 5,
      justifyContent: 'center',
    },
    circle: {
      width: 15,
      height: 15,
      backgroundColor: 'white',
      borderRadius: 100,
    },
  });
  return (
    <TouchableWithoutFeedback
      style={{borderRadius: 100}}
      disabled={props.coolDown}
      onPress={(e) => {
        animFunc();
        getAllAlarms(check);
      }}>
      <Animated.View
        style={[localStyle.container, {backgroundColor: animInterpolate}]}>
        <Animated.View
          style={[
            localStyle.circle,
            {transform: [{translateX: circleInterpolate}]},
          ]}></Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
