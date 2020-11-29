import React, {useEffect} from 'react';
import {View, Text, StyleSheet, BackHandler} from 'react-native';

// SVG
import CLOCK from '../Components/SVG/logo';

// Styles
import {styles} from '../Styles/bundle';

export default Loading = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function () {
      return true;
    });
  });
  return (
    <View style={styles.loading_container}>
      <CLOCK navigation={navigation} />
    </View>
  );
};
