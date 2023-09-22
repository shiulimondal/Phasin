import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';
import { useTheme } from 'react-native-basic-elements';

const RRailSelected = () => {
  const colors = useTheme()
  return (
    <View style={{...styles.root,
      backgroundColor:'#000',
    }}/>
  );
};

export default memo(RRailSelected);

const styles = StyleSheet.create({
  root: {
    height: 8,
    borderRadius: 4,
  },
});