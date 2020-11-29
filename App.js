import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {lockToPortrait} from 'react-native-orientation';
import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';

// Pages
import Loading from './Pages/Loading';
import Opening from './Pages/opening';
import Home from './Pages/home';
import LocalStorage from './Storage/AsyncStorage/main';
// Storage
//

// States

const Stack = createStackNavigator();
export default App = () => {
  const [isFirst, setIsFirst] = useState('');
  useEffect(() => {
    LogBox.ignoreAllLogs();
    const getData = async () => {
      setIsFirst(await LocalStorage.readString('isFirst'));
    };

    getData();
    lockToPortrait();
    LogBox.ignoreLogs(['Animated']);
    return;
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loading"
          component={Loading}
          options={{headerShown: false}}></Stack.Screen>
        {isFirst !== 'false' && (
          <Stack.Screen
            name="opening"
            component={Opening}
            options={{
              headerShown: false,
            }}></Stack.Screen>
        )}
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
