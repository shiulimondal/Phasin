//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Container, StatusBar, useTheme, Text, AppButton } from 'react-native-basic-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from '../../Constants/PixelRatio';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const OtpVerification = () => {
    const colors = useTheme()
    return (
        <Container>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='dark-content'
                translucent={true}
            />
            <LinearGradient
                start={{ x: 0, y: 1 }} end={{ x: 0.8, y: 1 }}
                colors={['rgba(137,204,213,255)', 'rgba(236,190,200,255)']}

                style={{
                    ...styles.gradient_box
                }}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Image
                        source={require('../../Assets/images/logo.png')}
                        style={styles.logo_img}
                    />
                    <Text style={{
                        ...styles.otp_verification_txt,
                        color: colors.textColor
                    }}>OTP VERIFICATION</Text>
                    <Text style={{
                        ...styles.dont_have_account,
                        color: colors.primaryFontColor
                    }}>Enter the OTP sent to - <Text style={styles.register_txt}>+1 56789023</Text></Text>
                    <View style={styles.otp_view}>
                        <OTPInputView
                            style={{
                                ...styles.otp_box_sty
                            }}
                            pinCount={4}
                            codeInputFieldStyle={{
                                ...styles.underlineStyleBase,
                                borderColor: colors.primaryFontColor,
                                color: colors.primaryFontColor,
                            }}
                            onCodeFilled={(code => {
                                console.log(`Code is ${code}, you are good to go!`)
                            })}
                        />
                    </View>
                    <Text style={{
                        ...styles.timer_txt
                    }}>00:120 Sec</Text>
                    <Text style={{
                        ...styles.dont_have_account,
                        marginTop:moderateScale(20),
                        color: colors.primaryFontColor
                    }}>Don’t receive code ? <Text style={styles.resend_txt}>Re-send</Text></Text>
                    <AppButton
                        title="Submit"
                        textStyle={styles.button_txt}
                        style={styles.button_sty}
                        onPress={() => NavigationService.navigate('Login')}
                    />
                </KeyboardAwareScrollView>
            </LinearGradient>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    gradient_box: {
        flex: 1
    },
    logo_img: {
        height: moderateScale(50),
        width: moderateScale(180),
        alignSelf: 'center',
        marginTop: moderateScale(160)
    },
    otp_view: {
        marginHorizontal: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    otp_box_sty: {
        height: moderateScale(90),
        justifyContent: 'center',
        alignSelf: 'center',
        width: '75%',
    },
    underlineStyleBase: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: moderateScale(4),
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(17),
        marginHorizontal: moderateScale(1),
    },
    otp_verification_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(18),
        textAlign: 'center',
        marginTop: moderateScale(150)
    },
    dont_have_account: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(13),
        textAlign: 'center',
        marginTop: moderateScale(10),
        marginBottom: moderateScale(20)
    },
    register_txt: {
        fontFamily: FONTS.solway.semibold,
        fontSize: moderateScale(13),
        color: '#000'
    },
    timer_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(13),
        textAlign: 'center'
    },
    resend_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(13),
        color: '#000'
    },
    button_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(16),
        color: '#fff'
    },
    button_sty: {
        height: moderateScale(48),
        marginTop: moderateScale(40),
        borderRadius: moderateScale(25),
        marginBottom:moderateScale(20)
    },
});

//make this component available to the app
export default OtpVerification;
