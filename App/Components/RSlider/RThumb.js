import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import { useTheme } from 'react-native-basic-elements';

const THUMB_RADIUS_LOW = 14;
const THUMB_RADIUS_HIGH = 14;

const RThumb = ({name}) => {
  const colors = useTheme()
  return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 2,
    borderColor: '#ECBEC8',
    backgroundColor: '#fff',
  },
  // rootHigh: {
  //   width: THUMB_RADIUS_HIGH * 2,
  //   height: THUMB_RADIUS_HIGH * 2,
  //   borderRadius: THUMB_RADIUS_HIGH,
  //   borderWidth: 2,
  //   borderColor: '#ECBEC8',
  //   backgroundColor: '#fff',
  // },
});

export default memo(RThumb);