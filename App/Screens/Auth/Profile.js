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
import Toast from 'react-native-simple-toast';

const { height, width } = Dimensions.get('window')
// create a component
const Profile = (props) => {
    const colors = useTheme()
    const [dropdownValue, setDropdownValue] = useState('');
    const UserData = props.route.params.UserData
    // const ID = props.route.params.ID
    const [Age, setAge] = useState('')
    const [Gender, setGender] = useState('')
    const [location, setLocation] = useState('')
    const [Occupation, setOccupation] = useState('')

    const profile = async () => {
        if (Age == '') {
            Toast.show('Enter your age', Toast.SHORT);
            return
        }
        if (Gender == '') {
            Toast.show('select gender', Toast.SHORT);
            return
        }
        if (location == '') {
            Toast.show('Enter your location', Toast.SHORT);
            return
        }
        if (Occupation == '') {
            Toast.show('Enter your Occupation', Toast.SHORT);
            return
        }

        NavigationService.navigate('Preference', {
            ProfileUdata: {age: Age, gender: Gender, location: location, Occupation: Occupation },
            regUdata :UserData,
            // regID:ID
        })
        // let data = {
        //     "fullName": Name,
        //     "age": Age,
        //     "gender": Gender,
        //     "location": location,
        //     "Occupation": Occupation,
        //     // "startAge": 20,
        //     // "endAge": 30,
        //     // "interestIn": "Woman",
        //     // "lookingFor": "Friends",
        //     // "about": "test data"
        // };
        // setBtnLoader(true)
        // console.log('data', data);
        // AuthService.EmailRegister(data)
        //     .then(res => {
        //         setBtnLoader(false)


        //     })
        //     .catch(err => {
        //         setBtnLoader(false)
        //         console.log('err', err);
        //     })


    }

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
                    <View style={{
                        marginTop: moderateScale(25),
                        alignItems: 'center'
                    }}>
                        <View>
                            <Image
                                source={require('../../Assets/images/profile.png')}
                                style={styles.profile_img}
                            />
                        </View>

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
                        value={UserData.fullName}
                        // onChangeText={value => setName(value)}
                        titleStyle={{
                            ...styles.user_name_txt,
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        // placeholder="John Doe"
                        placeholderTextColor={colors.primaryFontColor}
                        inputStyle={{
                            ...styles.input_txt_sty,
                            color: colors.primaryFontColor,
                        }}
                        keyboardType='email-address'
                    />
                    <AppTextInput
                        title='Your Age'
                        value={Age}
                        onChangeText={value => setAge(value)}
                        titleStyle={{
                            ...styles.user_name_txt,
                            marginTop: moderateScale(20),
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        // placeholder="24 Years Old"
                        placeholderTextColor={colors.primaryFontColor}
                        inputStyle={{
                            ...styles.input_txt_sty,
                            color: colors.primaryFontColor,
                        }}
                        keyboardType='number-pad'
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
                                label: 'Female',
                                value: 'Female'
                            },
                            {
                                label: 'Transgender',
                                value: 'Transgender'
                            },
                            {
                                label: 'Non Binary',
                                value: 'Non Binary'
                            },
                            {
                                label: 'Transgender Male',
                                value: 'Transgender Male'
                            },
                            {
                                label: 'Transgender Female',
                                value: 'Transgender Female'
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
                        selectedValue={Gender}
                        onValueChange={(val) => setGender(val)}
                    />
                    <AppTextInput
                        title='Your Location'
                        value={location}
                        onChangeText={value => setLocation(value)}
                        titleStyle={{
                            ...styles.user_name_txt,
                            marginTop: moderateScale(20),
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        // placeholder="San Jose, South Dakota 83475"
                        placeholderTextColor={colors.primaryFontColor}
                        inputStyle={{
                            ...styles.input_txt_sty,
                            color: colors.primaryFontColor,
                        }}
                    // keyboardType='email-address'
                    />
                    <AppTextInput
                        title='Your Occupation'
                        value={Occupation}
                        onChangeText={value => setOccupation(value)}
                        titleStyle={{
                            ...styles.user_name_txt,
                            marginTop: moderateScale(20),
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        // placeholder="24 Years Old"
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
                        // onPress={() => NavigationService.navigate('Preference')}
                        onPress={() => profile()}
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
        bottom: moderateScale(-50),
        right: moderateScale(-82)
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
        bottom: moderateScale(-72)
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
