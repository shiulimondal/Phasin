//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Container, StatusBar, useTheme, Text, AppTextInput, AppButton } from 'react-native-basic-elements';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const ForgetPassword = () => {
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
                        ...styles.forget_password_txt,
                        color: colors.textColor
                    }}>Forgot Password?</Text>
                    <Text style={{
                        ...styles.dont_worry_txt,
                        color: colors.primaryFontColor
                    }}>Don’t worry ! It happens. Please enter the
                        phone number we will send the OTP in this phone number.</Text>

                    <AppTextInput
                        title='Phone Number'
                        titleStyle={{
                            ...styles.user_name_txt,
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        placeholder="+1 56789023"
                        inputStyle={{
                            ...styles.input_txt_sty,
                        }}
                        placeholderTextColor={colors.primaryFontColor}
                        style={{ color: colors.primaryFontColor }}
                        keyboardType='name-phone-pad'
                    />

                    <AppButton
                        title="Continue"
                        textStyle={styles.button_txt}
                        style={styles.button_sty}
                    onPress={() =>NavigationService.navigate('OtpVerification')}
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
    forget_password_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(20),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(180)
    },
    dont_worry_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(11),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10)
    },
    user_name_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(30)
    },
    input_Container_sty: {
        marginHorizontal: moderateScale(15),
        paddingHorizontal: moderateScale(5),
        borderRadius: moderateScale(4),
        height: moderateScale(44),
    },
    input_txt_sty: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(14),
    },
    button_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(16),
        color: '#fff'
    },
    button_sty: {
        height: moderateScale(48),
        marginTop: moderateScale(70),
        borderRadius: moderateScale(25),
        marginBottom:moderateScale(20)
    },
});

//make this component available to the app
export default ForgetPassword;
