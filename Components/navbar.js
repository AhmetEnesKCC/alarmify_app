import React, {useEffect, useRef, useState} from 'react';
import NotIfService from '../Notifications/app';
import BackgroundJob from 'react-native-background-job';
import {
  showNotification,
  handleCancel,
  handleScheduleNotification,
} from './PlayAlarm';
import PushNotification from 'react-native-push-notification';
import {
  Animated,
  Button,
  Easing,
  SafeAreaView,
  Text,
  TouchableWithoutFeedbackBase,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {styles, mainPurple, windowWidth, textSize} from '../Styles/bundle';
import {Provider, TextInput as ReactPaperInput} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import NotificationSounds, {
  playSampleSound,
  stopSampleSound,
} from 'react-native-notification-sounds';
import {
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {TouchableRipple} from 'react-native-paper';
import SettingsNavIcon from '../Components/SVG/navigation_menu/settings';
import AlarmsNavIcon from '../Components/SVG/navigation_menu/alarms';
import Switch_comp from './switch_comp';
import CloseSVG from './SVG/close_button';
import ThickSVG from './SVG/thick';
import LocalStorage from '../Storage/AsyncStorage/main';
import Alarmify from './PlayAlarm';
import {pushNotifications} from '../Notifications';
import main from '../Storage/AsyncStorage/main';
import PushNotifications from 'react-native-push-notification';
import ReactNativeAN from 'react-native-alarm-notification';
import hour from './SVG/parts/hour';
import minute from './SVG/parts/minute';

export default NavBar = () => {
  const hourRef = useRef();
  const [coolDown, setCoolDown] = useState(false);
  const minuteRef = useRef();
  const [focusHour, setFocusHour] = useState(0);
  const [focusMin, setFocusMin] = useState(0);
  const openSetAlarm = useRef(new Animated.Value(0)).current;
  const [openSetMenu, setOpenSetMenu] = useState(false);
  const [hourStyle, setHourStyle] = useState(24);
  const closeBtnAnim = useRef(new Animated.Value(0)).current;
  const closeBtnColorAnim = useRef(new Animated.Value(0)).current;
  const [soundList, setSoundList] = useState(undefined);
  const [sound, setSound] = useState(undefined);
  const [note, setNote] = useState('');
  ``;

  useEffect(() => {
    NotificationSounds.getNotifications('alarm').then((sl) => {
      setSoundList(sl);
    });

    // LocalStorage.removeValue('alarms');
  }, []);
  const setAlarmFunc = async () => {
    setOpenSetMenu(!openSetMenu);
    if (!openSetMenu) {
      setTimeout(async () => {
        setFocusHour(new Date().getHours());
        hourRef.current.scrollTo(new Date().getHours() * textSize);
        setFocusMin(new Date().getMinutes());
        await minuteRef.current.scrollTo(new Date().getMinutes() * textSize);
      }, 500);
    }
  };
  const closeBtnFunc = () => {
    setNote('');
    if (openSetMenu === true) {
      Animated.timing(closeBtnAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(closeBtnColorAnim, {
        toValue: 0,
        duration: 200,
      }).start();
    } else {
      Animated.timing(closeBtnAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(closeBtnColorAnim, {
        toValue: 1,
        duration: 200,
      }).start();
    }
  };
  const addAlarmFunc = () => {
    const dateObject = {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      hour: focusHour < 10 ? `0${focusHour}` : focusHour,
      minute: focusMin < 10 ? `0${focusMin}` : focusMin,
      second: '00',
    };
    const parsedDate = Date.parse(
      `${dateObject.year}-${dateObject.month}-${dateObject.day}T${dateObject.hour}:${dateObject.minute}:${dateObject.second}`,
    );

    const date = `${dateObject.day}-${dateObject.month}-${dateObject.year} ${dateObject.hour}:${dateObject.minute}:${dateObject.second}`;
    ReactNativeAN.scheduleAlarm({
      fire_date: date,
    });
    console.log(parsedDate);
    console.log(new Date(Date.now() + 2 * 1000));
    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.localNotificationSchedule({
      date: new Date(
        dateObject.year,
        dateObject.month - 1,
        dateObject.day,
        focusHour,
        focusMin,
        dateObject.second,
        0,
      ), // in 60 secs,
      smallIcon: 'default',
      largeIcon: 'flat',
      message: note,
      channelId: 'channel-id',
      color: 'white',
      ignoreInForeground: false,
      playSound: true,
      invokeApp: true,
    });

    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); // ['channel_id_1']
    });
    const clockObject = {
      id: Math.floor(Math.random() * 1000000),
      hour: focusHour < 10 ? `0${focusHour}` : focusHour,
      minute: focusMin < 10 ? `0${focusMin}` : focusMin,
      // Add 12 hour system
      isActive: true,
      sound: sound,
      note: note,
    };

    const setData = async () => {
      const prevAlarms = await LocalStorage.readObject('alarms');
      if (
        prevAlarms === undefined ||
        typeof prevAlarms !== 'object' ||
        prevAlarms === null
      ) {
        await LocalStorage.storeObject('alarms', [clockObject]);
      } else {
        await LocalStorage.storeObject('alarms', [...prevAlarms, clockObject]);
      }
    };
    setData();
  };

  const closeBtnInterpolate = closeBtnAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['45deg', '0deg'],
  });
  const closeBtnColorInterpolate = closeBtnColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [mainPurple, 'red'],
  });
  const heightInterpolate = openSetAlarm.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 250],
  });
  const date24Func = () => {
    let minHour = 0;
    let maxHour = 24;
    let minMin = 0;
    let maxMin = 60;
    let hourArray = [];
    let minuteArray = [];
    for (var i = minHour; i < maxHour; i++) {
      if (i < 10) {
        hourArray.push('0' + i.toString());
        continue;
      }
      hourArray.push(i.toString());
    }
    for (var i = minMin; i < maxMin; i++) {
      if (i < 10) {
        minuteArray.push('0' + i.toString());
        continue;
      }
      minuteArray.push(i.toString());
    }
    return [minuteArray, hourArray];
  };
  const date12Func = () => {
    let minHour = 0;
    let maxHour = 13;
    let minMin = 0;
    let maxMin = 60;
    let hourArray = [];
    let minuteArray = [];
    for (var i = minHour; i < maxHour; i++) {
      if (i < 10) {
        hourArray.push('0' + i.toString());
        continue;
      }
      hourArray.push(i.toString());
    }
    for (var i = minMin; i < maxMin; i++) {
      if (i < 10) {
        minuteArray.push('0' + i.toString());
        continue;
      }
      minuteArray.push(i.toString());
    }
    return [minuteArray, hourArray];
  };
  return (
    <View style={styles.navigationContainer}>
      <View style={{width: windowWidth, height: 60}}>
        <Animated.View
          style={[
            styles.floatingActionButton,
            {bottom: 10, backgroundColor: closeBtnColorInterpolate},
          ]}>
          <TouchableRipple
            style={[
              styles.floatingActionButton,
              {
                justifyContent: 'center',
                alignItems: 'center',
                left: 0,
                transform: [{translateX: 0}],
              },
            ]}
            borderless
            onPress={() => {
              setAlarmFunc();
              closeBtnFunc();
            }}>
            <Animated.View>
              <Animated.View
                style={{
                  transform: [{rotateZ: closeBtnInterpolate}],
                }}>
                <CloseSVG />
              </Animated.View>
            </Animated.View>
          </TouchableRipple>
        </Animated.View>
        {openSetMenu && (
          <View
            style={[
              styles.floatingActionButton,
              {
                bottom: 10,
                left: windowWidth - 50,
                backgroundColor: '#4F8F62',
              },
            ]}>
            <TouchableRipple
              style={[
                styles.floatingActionButton,
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  left: 0,
                  transform: [{translateX: 0}],
                },
              ]}
              borderless
              onPress={() => {
                setAlarmFunc();
                closeBtnFunc();
                addAlarmFunc();
              }}>
              <View>
                <ThickSVG />
              </View>
            </TouchableRipple>
          </View>
        )}
      </View>

      {openSetMenu && (
        <View
          style={{
            position: 'absolute',
            width: windowWidth - 40,
            borderRadius: 10,
            marginHorizontal: 20,
            backgroundColor: 'white',
            paddingVertical: 50,
            paddingTop: 0,
            bottom: 120,
            left: 0,
          }}>
          <View
            style={{
              width: windowWidth - 40,
              paddingHorizontal: 40,
              marginBottom: 0,
              marginTop: 60,
            }}>
            <Text
              style={{
                color: mainPurple,
              }}>
              Alarm
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 50,
            }}>
            <ScrollView
              ref={hourRef}
              onScroll={(e) => {}}
              onMomentumScrollEnd={(e) => {
                const scrolled = e.nativeEvent.contentOffset.y;
                const remained = Math.floor(scrolled) % textSize;
                const better =
                  remained < 50
                    ? Math.floor(scrolled) - remained
                    : Math.floor(scrolled) - remained + textSize;
                setFocusHour(better / textSize);
                e.currentTarget.scrollTo(better);
              }}
              showsVerticalScrollIndicator={false}
              style={styles.setHour}>
              {hourStyle === 12 &&
                date12Func()[1].map((el, index) => (
                  <View>
                    <Text
                      style={[
                        styles.setHour_text,
                        {
                          opacity: focusHour === index ? 1 : 0.4,
                          fontSize: focusHour === index ? 60 : 50,
                        },
                      ]}>
                      {el}
                    </Text>
                  </View>
                ))}
              {hourStyle === 24 &&
                date24Func()[1].map((el, index) => (
                  <View>
                    <Text
                      style={[
                        styles.setHour_text,
                        {
                          opacity: focusHour === index ? 1 : 0.4,
                          fontSize: focusHour === index ? 60 : 50,
                        },
                      ]}>
                      {el}
                    </Text>
                  </View>
                ))}
            </ScrollView>
            <Text
              style={{
                height: textSize,
                fontSize: 60,
              }}>
              :
            </Text>
            <ScrollView
              onScroll={(e) => {}}
              ref={minuteRef}
              onMomentumScrollEnd={(e) => {
                const scrolled = e.nativeEvent.contentOffset.y;
                const remained = Math.floor(scrolled) % textSize;
                const better =
                  remained < 50
                    ? Math.floor(scrolled) - remained
                    : Math.floor(scrolled) - remained + textSize;
                setFocusMin(better / textSize);
                e.currentTarget.scrollTo(better);
              }}
              showsVerticalScrollIndicator={false}
              style={[styles.setHour]}>
              {date24Func()[0].map((el, index) => (
                <View>
                  <Text
                    style={[
                      styles.setHour_text,
                      {
                        opacity: focusMin === index ? 1 : 0.4,
                        fontSize: focusMin === index ? 60 : 50,
                      },
                    ]}>
                    {el}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              width: windowWidth - 40,
              paddingHorizontal: 40,
              marginBottom: 0,
            }}>
            <Text
              style={{
                color: mainPurple,
              }}>
              Not
            </Text>
          </View>
          <TextInput
            onChangeText={(e) => setNote(e)}
            maxLength={25}
            style={{
              width: windowWidth - 90,
              marginTop: 30,
              marginLeft: 'auto',
              marginRight: 'auto',
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 100,
              paddingLeft: 20,
            }}></TextInput>

          {note.length > 0 === true && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginHorizontal: 10,
                  fontSize: 15,
                  marginTop: 10,
                  marginBottom: -10,
                }}>
                {note.length}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginHorizontal: 10,
                  fontSize: 15,
                  marginTop: 10,
                  marginBottom: -10,
                }}>
                /
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginHorizontal: 10,
                  fontSize: 15,
                  marginTop: 10,
                  marginBottom: -10,
                }}>
                25
              </Text>
            </View>
          )}
          <View
            style={{
              width: windowWidth - 40,
              paddingHorizontal: 40,
              marginBottom: 0,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: mainPurple,
              }}>
              Ses
            </Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const scrolled = e.nativeEvent.contentOffset.y;
              const remained = Math.floor(scrolled) % 50;
              const better =
                remained < 50
                  ? Math.floor(scrolled) - remained
                  : Math.floor(scrolled) - remained + 50;
              setSound(soundList[better / 50]);
              e.currentTarget.scrollTo(better);
            }}
            style={{
              width: windowWidth - 100,
              height: 50,
              marginTop: 20,
              borderColor: mainPurple,
              marginLeft: 'auto',
              marginRight: 'auto',
              borderWidth: 2,
            }}>
            {soundList !== undefined &&
              soundList.length > 0 &&
              soundList.map((sl) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    playSampleSound(sl);
                  }}
                  style={{height: 50, justifyContent: 'center'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginBottom: 10,
                      color: mainPurple,
                      fontSize: 20,
                    }}>
                    {sl.title}
                  </Text>
                  <TouchableWithoutFeedback
                    style={{
                      position: 'absolute',
                      width: 30,
                      height: 30,
                    }}></TouchableWithoutFeedback>
                </TouchableWithoutFeedback>
              ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
