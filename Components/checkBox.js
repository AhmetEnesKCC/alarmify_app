import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBoxThick from './SVG/checkboxThick';
export const CheckBox = (props) => {
  const localStyle = StyleSheet.create({
    container: {
      width: 24,
      height: 24,
      backgroundColor: 'white',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={localStyle.container}>
      {props.checked && <CheckBoxThick />}
    </View>
  );
};
