//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { AppButton, AppTextInput, Container, Icon, Text, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/Navigation';
import Modal from "react-native-modal";
import AuthService from '../../Services/Auth';
import { logout, setuser } from '../../Redux/reducer/User';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';

const { height, width } = Dimensions.get('window')
// create a component
const VideoStory = (props) => {
    const colors = useTheme()
    const dispatch = useDispatch();
    const PreferenceUdata = props.route.params.PreferenceUdata
    const Profile_Udata = props.route.params.Profile_Udata
    const Prefile_regUdata = props.route.params.Prefile_regUdata
    // const Profile_regID = props.route.params.Profile_regID
    const [about, setAbout] = useState('')
    const [btnLoader, setBtnLoader] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    // console.log('Prefile_regUdata',Prefile_regUdata);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const SubmitRegister = () => {
        if (about == "") {
            Toast.show('Add Your Bio', Toast.SHORT);
            return false;
        }
        let data = {
            "fullName": Prefile_regUdata.fullName,
            "email": Prefile_regUdata.email,
            "mobile": Prefile_regUdata.phoneNo,
            "password": Prefile_regUdata.password,
            "age": Profile_Udata.Age,
            "gender": Profile_Udata.Gender,
            "location": Profile_Udata.location,
            "Occupation": Profile_Udata.Occupation,
            "startAge": PreferenceUdata.startage,
            "endAge": PreferenceUdata.endAge,
            "radius":PreferenceUdata.radius,
            "interestIn": PreferenceUdata.interested,
            "lookingFor": PreferenceUdata.lookingFor,
            "about": about
        };
        setBtnLoader(true)
        console.log('createDATA ======', data);
        AuthService.Register(data)
            .then(res => {
                console.log('registerdata', res);
                if (res.status == true) {
                    Toast.show(res.message, Toast.SHORT, Toast.BOTTOM);
                }
                AuthService.setAccount(res.data);
                dispatch(setuser(res.data));
                setBtnLoader(false)
            })
            .catch(err => {
                console.log('err==========================',err);
                setBtnLoader(false)
            });

    };
    // const UserData = props.route.params.UserData
    return (
        <Container>
            <BackHeader title='Your Video Story' />
            <LinearGradient
                start={{ x: 0, y: 1 }} end={{ x: 0.8, y: 1 }}
                colors={['rgba(137,204,213,255)', 'rgba(236,190,200,255)']}
                style={{
                    ...styles.gradient_box,
                }}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <View style={{
                            ...styles.video_story_circle,
                            backgroundColor: colors.secondaryThemeColor
                        }}>
                            <Image
                                source={require('../../Assets/images/video.png')}
                                style={styles.video_img}
                            />
                        </View>
                        <View style={{
                            ...styles.icon_circle,
                            backgroundColor: colors.secondaryThemeColor
                        }}>
                            <Icon
                                name='plus'
                                type='AntDesign'
                                color={'#ECBEC8'}
                            />
                        </View>
                    </View>
                    <View style={styles.Text_View}>
                        <Image
                            source={require('../../Assets/images/uplode.png')}
                            style={{
                                height: moderateScale(16),
                                width: moderateScale(16)
                            }}
                        />
                        <Text style={{
                            ...styles.upload_only_txt
                        }}>Upload only 30sec video for better experience</Text>
                    </View>

                    {/* successfully uploaded your story ========================================*/}


                    {/* <View style={styles.Text_View}>
                        <Image
                            source={require('../../Assets/images/sucess.png')}
                            style={{
                                height: moderateScale(16),
                                width: moderateScale(16)
                            }}
                        />
                        <Text style={{
                            ...styles.upload_only_txt
                        }}>Congrats! You’ve successfully uploaded your story</Text>
                    </View> */}
                    <AppTextInput
                        multiline={true}
                        numberOfLines={6}
                        value={about}
                        onChangeText={value => setAbout(value)}
                        textAlignVertical='top'
                        title='About You'
                        titleStyle={{
                            ...styles.user_name_txt,
                            color: colors.primaryFontColor
                        }}
                        inputContainerStyle={{
                            ...styles.input_Container_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        // placeholder="Add Your Bio here"
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
                        // onPress={() => NavigationService.navigate('VideoStory')}
                        loader={btnLoader ? {
                            position: 'right',
                            color: '#fff',
                            size: 'small'
                        } : null}
                        disabled={btnLoader}
                        onPress={() => SubmitRegister()}
                    />

                    {/* open modal */}

                    <Text
                        onPress={toggleModal}
                        style={{
                            ...styles.skip_txt,
                            color: colors.textColor
                        }}>Skip</Text>
                </KeyboardAwareScrollView>
                <Modal
                    isVisible={isModalVisible}
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: moderateScale(20),

                    }}
                    onBackButtonPress={() => setModalVisible(false)}
                    onBackdropPress={() => setModalVisible(false)}
                >
                    <View style={{
                        ...styles.modal_view,
                        backgroundColor: colors.secondaryThemeColor
                    }}>
                        <Image
                            source={require('../../Assets/images/FaceID.png')}
                            style={{
                                height: moderateScale(90),
                                width: moderateScale(90)
                            }}
                        />
                        <Text style={{
                            ...styles.create_profile,
                            color: colors.textColor
                        }}>Successfully Created Your Profile</Text>
                        <Text style={{
                            ...styles.complete_profile_txt,
                            color: colors.secondaryFontColor
                        }}>You have been successfully completed your profile</Text>
                        <View style={{ ...styles.line_view, borderColor: colors.borderColor }} />
                        <TouchableOpacity
                            onPress={() => NavigationService.navigate('AppStack')}
                        >
                            <Image
                                source={require('../../Assets/images/Explore.png')}
                                style={styles.explore_img}
                            />
                        </TouchableOpacity>
                    </View>

                </Modal>
            </LinearGradient>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    gradient_box: {
        flex: 1
    },
    video_story_circle: {
        height: moderateScale(140),
        width: moderateScale(140),
        borderRadius: moderateScale(70),
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(25),
    },
    video_img: {
        height: moderateScale(50),
        width: moderateScale(50)
    },
    icon_circle: {
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(15),
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: moderateScale(20),
        alignSelf: 'center',
        right: moderateScale(100)
    },
    upload_only_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(10),
        marginLeft: moderateScale(5)
    },
    Text_View: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(20)
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
        // height: moderateScale(44),
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
        marginTop: moderateScale(40),
        borderRadius: moderateScale(25),
        marginBottom: moderateScale(20)
    },
    skip_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(17),
        textAlign: 'center',
        marginBottom: moderateScale(20)
    },
    modal_view: {
        padding: moderateScale(25),
        borderRadius: moderateScale(8),
        alignItems: 'center'
    },
    create_profile: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(14),
        maxWidth: '60%',
        textAlign: 'center',
        marginTop: moderateScale(10)
    },
    complete_profile_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(10),
        maxWidth: '80%',
        textAlign: 'center',
        marginTop: moderateScale(10)
    },
    line_view: {
        borderWidth: moderateScale(0.5),
        alignSelf: 'center',
        marginTop: moderateScale(15),
        borderColor: 'red',
        width: '80%'
    },
    explore_img: {
        height: moderateScale(18),
        width: moderateScale(71),
        marginTop: moderateScale(15)
    }
});

//make this component available to the app
export default VideoStory;
