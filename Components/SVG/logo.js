import React, {useEffect, useRef, useState} from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';
import {AnimatedSVGPath} from 'react-native-svg-animations';
import {View, Animated, Button, Alert} from 'react-native';
import I18n from 'react-native-i18n';
import SVG from './parts/logo';
import Minute from './parts/minute';
import Ears from './parts/ears';
import Hour from './parts/hour';
import LocalStorage from '../../Storage/AsyncStorage/main';

function SvgComponent(props) {
  const [willByPass, setWillByPass] = useState('');
  let tourNumber = 0;
  const minuteAnim = new Animated.Value(1);
  const hourAnim = new Animated.Value(1);
  const allAnim = new Animated.Value(1);
  useEffect(() => {
    const getData = async () => {
      setWillByPass(
        (await LocalStorage.readString('isFirst')) === 'false'
          ? 'true'
          : 'false',
      );
    };
    getData();
    rotateMin();
    rotateHour();
    const randomLoading = Math.floor(Math.random() * 800 + 100);
    setTimeout(() => {
      if (willByPass === 'false') {
        props.navigation.navigate('opening');
      } else if (willByPass === 'true') {
        props.navigation.navigate('home');
      }
    }, randomLoading);
  });

  const rotateMin = () => {
    minuteAnim.setValue(0);
    tourNumber++;
    Animated.timing(minuteAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => rotateMin());
  };

  const rotateHour = () => {
    hourAnim.setValue(0);
    Animated.timing(hourAnim, {
      toValue: 1,
      duration: 2000 * 12,
      useNativeDriver: true,
    }).start(() => rotateHour());
  };

  const slideAll = () => {
    allAnim.setValue(0);
    Animated.timing(allAnim, {
      toValue: 1,
      duration: 2000 * 12,
      useNativeDriver: true,
    }).start();
  };

  // const rotateValueMin = useSharedValue(0);
  // const aniStyleMin = useAnimatedStyle(() => {
  //   return {
  //     transform: [{rotateX: '360deg'}],
  //   };
  // });

  const interpolateMin = minuteAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const interpolatehour = hourAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [`0deg`, `360deg`],
  });

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Ears style={{margin: -30}} />
      <View>
        <SVG />
        <Animated.View
          style={{
            position: 'absolute',
            transform: [{rotate: interpolateMin}],
          }}>
          <Minute />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            transform: [{rotate: interpolatehour}],
          }}>
          <Hour />
        </Animated.View>
      </View>
    </View>
  );
}

export default SvgComponent;
