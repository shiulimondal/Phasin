//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Container, StatusBar, useTheme, Text, AppTextInput, AppButton } from 'react-native-basic-elements';
import LinearGradient from 'react-native-linear-gradient';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import NavigationService from '../../Services/Navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { height, width } = Dimensions.get('window')
// create a component
const Login = () => {
    const colors = useTheme()
    const [passwordShow, setPasswordShow] = useState(false)
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
                    <Text style={{
                        ...styles.login_txt,
                        color: colors.primaryFontColor
                    }}>Login</Text>
                    <Image
                        source={require('../../Assets/images/logo.png')}
                        style={styles.logo_img}
                    />
                    <AppTextInput
                        title='User Name/Mobile Number'
                        titleStyle={{
                            ...styles.user_name_txt,
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
                    <Text
                        onPress={() => NavigationService.navigate('ForgetPassword')}
                        style={{
                            ...styles.Forget_password_txt
                        }}>Forget Password?</Text>
                    <AppButton
                        title="Log in"
                        textStyle={styles.button_txt}
                        style={styles.button_sty}
                    // onPress={() => { }}
                    />
                    <Text style={{
                        ...styles.dont_have_account,
                        color: colors.primaryFontColor
                    }}>Don’t have an account? <Text 
                    onPress={()=> NavigationService.navigate('Register')}
                    style={styles.register_txt}>Register</Text></Text>
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
    login_txt: {
        fontFamily: FONTS.solway.bold,
        fontSize: moderateScale(16),
        textAlign: 'center',
        marginTop: moderateScale(50)
    },
    logo_img: {
        height: moderateScale(50),
        width: moderateScale(180),
        alignSelf: 'center',
        marginTop: moderateScale(90)
    },
    user_name_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(70)
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
        width: '82%',
        height: moderateScale(40),
        paddingHorizontal: moderateScale(5)
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
    Forget_password_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(10),
        textAlign: 'right'
    },
    button_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(16),
        color: '#fff'
    },
    button_sty: {
        height: moderateScale(48),
        marginTop: moderateScale(70),
        borderRadius: moderateScale(25)
    },
    dont_have_account: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(14),
        textAlign: 'center',
        marginTop: moderateScale(30),
        marginBottom:moderateScale(20)
    },
    register_txt: {
        fontFamily: FONTS.solway.semibold,
        fontSize: moderateScale(14),
        color: '#000'
    }
});

//make this component available to the app
export default Login;
