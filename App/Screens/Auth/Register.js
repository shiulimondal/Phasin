//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Image } from 'react-native';
import { AppButton, AppTextInput, CheckBox, Container, StatusBar, Text, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const Register = () => {
    const colors = useTheme()
    const [passwordShow, setPasswordShow] = useState(false)
    const [check, setCheck] = useState(false);
    return (
        <Container>
            <BackHeader title='Register' />
            <LinearGradient
                start={{ x: 0, y: 1 }} end={{ x: 0.8, y: 1 }}
                colors={['rgba(137,204,213,255)', 'rgba(236,190,200,255)']}
                style={{
                    ...styles.gradient_box,
                }}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <AppTextInput
                        title='Full Name'
                        titleStyle={{
                            ...styles.user_name_txt,
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        placeholder="John Doe"
                        placeholderTextColor={colors.primaryFontColor}
                        inputStyle={{
                            ...styles.input_txt_sty,
                            color: colors.primaryFontColor,
                        }}
                        keyboardType='email-address'
                    />
                    <AppTextInput
                        title='Your Email'
                        titleStyle={{
                            ...styles.user_name_txt,
                            marginTop: moderateScale(20),
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        placeholder="abc@gmail.com"
                        placeholderTextColor={colors.primaryFontColor}
                        inputStyle={{
                            ...styles.input_txt_sty,
                            color: colors.primaryFontColor,
                        }}
                        keyboardType='email-address'
                    />
                    <AppTextInput
                        title='Your Mobile Number'
                        titleStyle={{
                            ...styles.user_name_txt,
                            marginTop: moderateScale(20),
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        // placeholder="abc@gmail.com"
                        placeholderTextColor={colors.primaryFontColor}
                        inputStyle={{
                            ...styles.input_txt_sty,
                            color: colors.primaryFontColor,
                        }}
                        keyboardType='number-pad'
                    />
                    <Text style={{
                        ...styles.password_txt
                    }}>Password</Text>
                    <View
                        style={{
                            ...styles.password_view,
                            borderColor: colors.primaryFontColor
                        }}>
                        <View
                            style={styles.text_input_view}>

                            <TextInput
                                secureTextEntry={passwordShow}
                                style={{
                                    ...styles.password_placeholder_txt,
                                }}
                                keyboardType='email-address'
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => setPasswordShow(!passwordShow)}
                            style={styles.password_img_view}>
                            {!passwordShow ? (
                                <Image
                                    source={require('../../Assets/images/eye-off.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: moderateScale(20),
                                        width: moderateScale(20),
                                        tintColor: '#51535D',
                                    }}
                                />
                            ) : (
                                <Image
                                    source={require('../../Assets/images/eye.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: moderateScale(20),
                                        width: moderateScale(20),
                                        tintColor: '#51535D',
                                    }}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                    <Text style={{
                        ...styles.password_txt
                    }}>Confirm Password</Text>
                    <View
                        style={{
                            ...styles.password_view,
                            borderColor: colors.primaryFontColor
                        }}>
                        <View
                            style={styles.text_input_view}>

                            <TextInput
                                secureTextEntry={passwordShow}
                                style={{
                                    ...styles.password_placeholder_txt,
                                }}
                                keyboardType='email-address'
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => setPasswordShow(!passwordShow)}
                            style={styles.password_img_view}>
                            {!passwordShow ? (
                                <Image
                                    source={require('../../Assets/images/eye-off.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: moderateScale(20),
                                        width: moderateScale(20),
                                        tintColor: '#51535D',
                                    }}
                                />
                            ) : (
                                <Image
                                    source={require('../../Assets/images/eye.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: moderateScale(20),
                                        width: moderateScale(20),
                                        tintColor: '#51535D',
                                    }}
                                />
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(25),
                        marginHorizontal: moderateScale(15)
                    }}>
                        <CheckBox
                            checked={check}
                            onChange={(val) => setCheck(val)}
                            size={23}
                            activeColor={'#fff'}
                            inactiveColor={'#51535D'}
                            tintColor={'#89CCD5'}
                            inactiveBackgroundColor={'#89CCD5'}
                            containerStyle={{
                                borderRadius: moderateScale(4)
                            }}
                        />
                        <View style={{ marginLeft: moderateScale(7) }}>
                            <Text style={{
                                ...styles.agreeTo_txt,
                                color: colors.primaryFontColor
                            }}>I agree to the<Text style={styles.termCondition_txt}> Terms & Conditions</Text></Text>
                            <Text style={{
                                ...styles.agreeTo_txt,
                                color: colors.primaryFontColor
                            }}>and <Text style={styles.termCondition_txt}> Privacy Policy</Text></Text>
                        </View>
                    </View>
                    <AppButton
                        title="Register"
                        textStyle={styles.button_txt}
                        style={styles.button_sty}
                        onPress={() => NavigationService.navigate('Profile')}
                    />
                    <Text style={{
                        ...styles.dont_have_account,
                        color: colors.primaryFontColor
                    }}>Already have an account?<Text
                        onPress={() => NavigationService.navigate('Login')}
                        style={styles.register_txt}> Login</Text></Text>
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
    password_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(15)
    },
    password_view: {
        height: moderateScale(44),
        marginHorizontal: moderateScale(15),
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: moderateScale(4),
        alignItems: 'center',
        marginTop: moderateScale(7)
    },
    text_input_view: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: moderateScale(40),
        paddingHorizontal: moderateScale(5),
    },
    password_img_view: {
        width: moderateScale(50),
        height: moderateScale(40),
        justifyContent: 'center',
        alignItems: 'center',
    },
    password_placeholder_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(12)
    },
    agreeTo_txt: {
        fontFamily: FONTS.solway.light,
        fontSize: moderateScale(12)
    },
    termCondition_txt: {
        fontFamily: FONTS.solway.light,
        fontSize: moderateScale(12),
        textDecorationLine: 'underline'
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
        marginBottom: moderateScale(20)
    },
    dont_have_account: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(14),
        textAlign: 'center',
        marginTop: moderateScale(20),
        marginBottom: moderateScale(20)
    },
    register_txt: {
        fontFamily: FONTS.solway.semibold,
        fontSize: moderateScale(14),
        color: '#000'
    }
});

//make this component available to the app
export default Register;
