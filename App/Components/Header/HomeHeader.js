//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS } from '../../Constants/Colors';
import { moderateScale } from '../../Constants/PixelRatio';
import { useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';


// create a component
const HomeHeader = ({ defaultButtons = true }) => {
    const { userData, login_status } = useSelector(state => state.User);
    const colors = useTheme()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.headerColor}
                barStyle='dark-content'
            />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(40),
                paddingBottom: moderateScale(20)
            }}>
                <Image
                    source={require('../../Assets/images/profile.png')}
                    style={styles.profile_img}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <View>
                        <Text style={{
                            ...styles.hello_txt,
                            color: colors.secondaryTextColor
                        }}>Hello John!</Text>
                        <Text
                            numberOfLines={1}
                            style={{
                                ...styles.addres_txt,
                                color: colors.secondaryTextColor
                            }}>San Jose, South Dakota 83475</Text>
                    </View>
                    <View style={{
                        ...styles.img_box
                    }}>
                        <Image
                            source={require('../../Assets/images/bell.png')}
                            style={styles.notification_bell}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    profile_img: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(20)
    },
    hello_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(7)
    },
    addres_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(12),
        marginLeft: moderateScale(7)
    },
    img_box: {
        height: moderateScale(32),
        width: moderateScale(32),
        backgroundColor: '#E7E7E7',
        borderRadius: moderateScale(4),
        alignItems: 'center',
        justifyContent: 'center'
    },
    notification_bell: {
        height: moderateScale(24),
        width: moderateScale(24)
    }
});

//make this component available to the app
export default HomeHeader;
