import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Alert,
  TouchableWithoutFeedbackComponent,
  TouchableWithoutFeedbackBase,
} from 'react-native';
import AlarmifyText from '../Components/SVG/Alarmify_gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {styles} from '../Styles/bundle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SwitchLang from '../Components/switch';
import {TouchableRipple} from 'react-native-paper';
import LocalStorage from '../Storage/AsyncStorage/main';

export default Logo = (props) => {
  const AlarmifyAnim = useRef(new Animated.Value(1)).current;
  const ForBetterAnim = useRef(new Animated.Value(1)).current;
  const GetStartAnim = useRef(new Animated.Value(1)).current;
  const QuestionAnim = useRef(new Animated.Value(1)).current;
  const [finished, setFinished] = useState(false);
  const [selected, SetSelected] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  let clickCount = 0;
  let isWaiting = false;
  useEffect(() => {
    slideAlarmify();
    slideForBetter();
    slideGetStart();
  }, []);

  const slideAlarmify = () => {
    AlarmifyAnim.setValue(0);
    Animated.timing(AlarmifyAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const slideForBetter = () => {
    ForBetterAnim.setValue(0);
    Animated.timing(ForBetterAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const slideGetStart = () => {
    GetStartAnim.setValue(0);
    Animated.timing(GetStartAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const questionMenu = () => {
    if (isWaiting) {
      return;
    }
    isWaiting = true;
    setTimeout(() => (isWaiting = false), 2000);
    if (clickCount % 2 == 0) {
      QuestionAnim.setValue(1);
      Animated.timing(QuestionAnim, {
        toValue: 0,
        duration: 1500,
      }).start();
    } else {
      QuestionAnim.setValue(0);
      Animated.timing(QuestionAnim, {
        toValue: 1,
        duration: 1500,
      }).start();
    }
    clickCount++;
  };

  const selectFunc = (item) => {
    SetSelected(item);
  };

  const slideAlarmifyInterpolate = AlarmifyAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1000, 0],
  });

  const slideForBetterInterpolate = ForBetterAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-1000, 52],
  });

  const slideGetStartInterpolate = GetStartAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1000, 0],
  });

  const questionMenuInterpolate = QuestionAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [285, 40],
  });

  return (
    <View>
      <Animated.View
        style={{transform: [{translateX: slideAlarmifyInterpolate}]}}>
        <LinearTextGradient
          style={{
            fontWeight: 'bold',
            fontFamily: 'mavenPro',
            fontSize: 75,
            textAlign: 'center',
            marginTop: 80,
          }}
          colors={['#EA00E1', '#839AFF']}
          locations={[0, 1]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text>Alarmify</Text>
        </LinearTextGradient>
      </Animated.View>
      <Animated.View
        style={{transform: [{translateX: slideForBetterInterpolate}]}}>
        <Text style={{color: '#7710FF', fontSize: 14}}>Daya iyi uyanin</Text>
      </Animated.View>
      <TouchableWithoutFeedback onPress={() => questionMenu()}>
        <Animated.View
          style={[styles.question_mark, {width: questionMenuInterpolate}]}>
          <Text style={styles.question_mark_text}>?</Text>
          <Text style={styles.question_mark_text_hide}>
            Kategori ve dil secin
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableOpacity onPress={() => selectFunc('math')}>
        <View
          style={[
            styles.opening_page_selections,
            selected == 'math' ? {backgroundColor: '#839AFF'} : '',
          ]}>
          <Text
            style={[
              styles.opening_page_selections_text,
              selected == 'math' ? {color: 'white'} : '',
            ]}>
            Matematik
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectFunc('geography')}>
        <View
          style={[
            styles.opening_page_selections,
            {marginTop: 35},
            selected == 'geography' ? {backgroundColor: '#839AFF'} : '',
          ]}>
          <Text
            style={[
              styles.opening_page_selections_text,
              selected == 'geography' ? {color: 'white'} : '',
            ]}>
            Cografya
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => selectFunc('english')}>
        <View
          style={[
            styles.opening_page_selections,
            {marginTop: 35},
            selected == 'english' ? {backgroundColor: '#839AFF'} : '',
          ]}>
          <Text
            style={[
              styles.opening_page_selections_text,
              selected == 'english' ? {color: 'white'} : '',
            ]}>
            Ingilizce
          </Text>
        </View>
      </TouchableOpacity>
      <SwitchLang finished={finished} checked={true} />
      <Animated.View
        style={{transform: [{translateY: slideGetStartInterpolate}]}}>
        <TouchableWithoutFeedback
          disabled={isDisabled}
          onPress={() => {
            props.navigation.navigate('home');
            setFinished(true);
            LocalStorage.storeString('isFirst', 'false');
            LocalStorage.storeString('selected', selected);
          }}>
          <View
            style={{
              position: 'relative',
              marginTop: 50,
              width: 300,
              height: 60,
              backgroundColor: 'black',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: '#839AFF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 22}}>Kurmaya basla</Text>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
};
