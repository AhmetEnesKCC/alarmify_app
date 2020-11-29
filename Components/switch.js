import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableWithoutFeedback,
  Alert,
  TouchableWithoutFeedbackBase,
} from 'react-native';
import {styles} from '../Styles/bundle';
import LocalStorage from '../Storage/AsyncStorage/main';
export default Switch = (props) => {
  const SwitchAnim = useRef(new Animated.Value(0)).current;
  const [checkedTurkey, setCheckedTurkey] = useState(false);
  const [checkedEngland, setCheckedEngland] = useState(false);
  const [lang, setLang] = useState(props.checked ? 'turkish' : 'false');

  let clickCount = 0;
  useEffect(() => {
    if (props.checked && !checkedEngland) {
      SwitchAnim.setValue(1);
      Animated.timing(SwitchAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setCheckedEngland(false);
      setCheckedTurkey(true);
    }
    if (!props.checked && !checkedEngland) {
      SwitchAnim.setValue(0);
      Animated.timing(SwitchAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setCheckedTurkey(false);
      setCheckedEngland(true);
    }
  }, []);
  if (props.finished) {
    LocalStorage.storeString('language', lang);
  }
  const selectTurkish = () => {
    SwitchAnim.setValue(1);
    Animated.timing(SwitchAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setCheckedTurkey(true);
    setLang('turkish');
  };
  const selectEnglish = () => {
    SwitchAnim.setValue(0);
    Animated.timing(SwitchAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setCheckedEngland(true);
    setLang('english');
  };

  const switchInterpolate = SwitchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 35],
  });
  const localStyle = StyleSheet.create({
    container: {
      width: 75,
      height: 40,
      borderRadius: 30,
      borderWidth: 3,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: 40,
      borderColor: '#707070',
    },
    hider: {
      width: 35,
      height: 35,
      backgroundColor: '#707070',
      borderRadius: 30,
      zIndex: 2,
      position: 'relative',
    },

    turkey: {
      position: 'absolute',
      right: 2.5 + 1.25,
      top: 2.5 + 1.25,
      width: 25,
      height: 25,
    },

    uk: {
      position: 'absolute',
      left: 2.5 + 1.25,
      top: 2.5 + 1.25,
      width: 25,
      height: 25,
    },
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => (lang === 'turkish' ? selectEnglish() : selectTurkish())}>
      <View style={localStyle.container}>
        <Image
          style={localStyle.turkey}
          source={require('../images/Turkey.png')}></Image>
        <Image
          style={localStyle.uk}
          source={require('../images/UK.png')}></Image>
        <Animated.View
          style={
            ([localStyle.hider], {transform: [{translateX: switchInterpolate}]})
          }>
          <View style={localStyle.hider}></View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
