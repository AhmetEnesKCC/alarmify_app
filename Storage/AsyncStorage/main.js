import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export default storageFunctions = {
  storeString: async (key, val) => {
    try {
      await AsyncStorage.setItem(key, val.toString());
      console.log('Stored string key succesfull: ' + key + ' with ' + val);
    } catch (e) {}
  },
  storeObject: async (key, val) => {
    try {
      const jsonValue = JSON.stringify(val);
      await AsyncStorage.setItem(key, jsonValue);
      console.log('Stored object succesfull');
    } catch (e) {
      console.log(e);
    }
  },

  readString: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Read string succesfull');
        return value;
      }
    } catch (e) {
      // Error reading value
    }
  },
  readObject: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const jsoned = JSON.parse(value);
        console.log('Read string succesfull');
        return jsoned;
      }
    } catch (e) {
      // Error Reading Value
    }
  },
  clearData: async () => {
    try {
      await AsyncStorage.clear();
      console.log('Cleared');
    } catch (e) {}
  },
  removeValue: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Removed Value: ' + key);
    } catch (e) {
      console.log(e);
    }
  },
};
