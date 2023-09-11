//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { AppButton, AppTextInput, Container, Picker, Text, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('window')
// create a component
const Profile = () => {
    const colors = useTheme()
    const [dropdownValue, setDropdownValue] = useState('');
    return (
        <Container>
            <BackHeader title='Create Your Profile' />
            <LinearGradient
                start={{ x: 0, y: 1 }} end={{ x: 0.8, y: 1 }}
                colors={['rgba(137,204,213,255)', 'rgba(236,190,200,255)']}
                style={{
                    ...styles.gradient_box,
                }}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ marginTop: moderateScale(25) }}>
                        <Image
                            source={require('../../Assets/images/profile.png')}
                            style={styles.profile_img}
                        />
                        <View style={styles.verify_view}>
                            <Image
                                source={require('../../Assets/images/verify.png')}
                                style={styles.veryfi_img}
                            />
                            <Text style={{
                                ...styles.verify_txt,
                                color: colors.primaryFontColor
                            }}>Verified</Text>
                        </View>

                        <Image
                            source={require('../../Assets/images/edit.png')}
                            style={styles.edit_img}
                        />
                    </View>
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
                        title='Your Age'
                        titleStyle={{
                            ...styles.user_name_txt,
                            marginTop: moderateScale(20),
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        placeholder="24 Years Old"
                        placeholderTextColor={colors.primaryFontColor}
                        inputStyle={{
                            ...styles.input_txt_sty,
                            color: colors.primaryFontColor,
                        }}
                    // keyboardType='email-address'
                    />
                    <Text style={{
                        ...styles.password_txt,
                         color: colors.primaryFontColor
                    }}>Your Gender</Text>
                    <Picker
                        options={[
                            {
                                label: 'Male',
                                value: 'Male'
                            },
                            {
                                label: 'Male',
                                value: 'Male'
                            },
                            {
                                label: 'Male',
                                value: 'Male'
                            },
                            {
                                label: 'Male',
                                value: 'Male'
                            },
                            {
                                label: 'Male',
                                value: 'Male'
                            },
                        ]}
                        placeholder="Choose Your Gender"
                        textStyle={{
                            ...styles.picker_txt,
                            color: colors.primaryFontColor
                        }}
                        containerStyle={{
                            ...styles.picker_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        selectedValue={dropdownValue}
                        onValueChange={(val) => setDropdownValue(val)}
                    />
                    <AppTextInput
                        title='Your Location'
                        titleStyle={{
                            ...styles.user_name_txt,
                            marginTop: moderateScale(20),
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        placeholder="San Jose, South Dakota 83475"
                        placeholderTextColor={colors.primaryFontColor}
                        inputStyle={{
                            ...styles.input_txt_sty,
                            color: colors.primaryFontColor,
                        }}
                    // keyboardType='email-address'
                    />
                    <AppTextInput
                        title='Your Occupation'
                        titleStyle={{
                            ...styles.user_name_txt,
                            marginTop: moderateScale(20),
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        placeholder="24 Years Old"
                        placeholderTextColor={colors.primaryFontColor}
                        inputStyle={{
                            ...styles.input_txt_sty,
                            color: colors.primaryFontColor,
                        }}
                    // keyboardType='email-address'
                    />
                    <AppButton
                        title="Next"
                        textStyle={styles.button_txt}
                        style={styles.button_sty}
                        onPress={() => NavigationService.navigate('Preference')}
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
    profile_img: {
        height: moderateScale(78),
        width: moderateScale(78),
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: moderateScale(20),
        borderRadius: moderateScale(40),
        position: 'absolute'
    },
    verify_view: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: -50,
        right: -222
    },
    veryfi_img: {
        height: moderateScale(14),
        width: moderateScale(14),
    },
    verify_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(13),
        marginLeft: moderateScale(5)
    },
    edit_img: {
        height: moderateScale(16),
        width: moderateScale(16),
        bottom: -75,
        right: -175
    },
    user_name_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(90)
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
    picker_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(13)
    },
    picker_sty: {
        marginHorizontal: moderateScale(15),
        height: moderateScale(44),
        borderRadius: moderateScale(4)
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
});

//make this component available to the app
export default Profile;