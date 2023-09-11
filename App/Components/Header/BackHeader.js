import { Pressable, StyleSheet, View, StatusBar as RNStatusBar, } from 'react-native';
import React from 'react';
import { AppBar, Icon, StatusBar, Text } from 'react-native-basic-elements';
import NavigationService from '../../Services/Navigation';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';

const BackHeader = ({ title = '' }) => {
  return (
    <View>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle='dark-content'
      />
      <LinearGradient
        style={{
          ...styles.gradient_box,
          height: moderateScale(60) + RNStatusBar.currentHeight,
          paddingTop: RNStatusBar.currentHeight

        }}
        start={{ x: 0, y: 1 }} end={{ x: 0.8, y: 1 }}
        colors={['rgba(137,204,213,255)', 'rgba(236,190,200,255)']}
      >
        <View style={styles.icon_title_view}>
          <Pressable
            onPress={() => NavigationService.back()}
          >
            <Image 
            source={require('../../Assets/images/back.png')}
            style={{
              height:moderateScale(24),
              width:moderateScale(24)
            }}
            />
          </Pressable>
          <View style={{
            alignItems: 'center',
            flex: 1
          }}>
            <Text style={{
              ...styles.title_sty,
            }}>{title}</Text>
          </View>

        </View>
      </LinearGradient>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  title_sty: {
    fontFamily: FONTS.solway.bold,
    fontSize: moderateScale(16),
    color: '#51535D',
    alignSelf: 'center'
  },
  icon_title_view:{
    flexDirection: 'row',
    marginHorizontal: moderateScale(15),
    alignItems: 'center',
    marginTop:moderateScale(25),
  }
});
