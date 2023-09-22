//import liraries
import React, { Component, useCallback, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { AppButton, Container, Picker, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Components/Header/BackHeader';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import Thumb from '../../Components/Slider/Thumb';
import Rail from '../../Components/Slider/Rail';
import RailSelected from '../../Components/Slider/RailSelected';
import Label from '../../Components/Slider/Label';
import Notch from '../../Components/Slider/Notch';
import Slider from 'rn-range-slider';
import NavigationService from '../../Services/Navigation';
import RThumb from '../../Components/RSlider/RThumb';
import RRail from '../../Components/RSlider/RRail';
import RRailSelected from '../../Components/RSlider/RRailSelected';
import RLabel from '../../Components/RSlider/RLabel';
import RNotch from '../../Components/RSlider/RNotch';
import AuthService from '../../Services/Auth';

const { height, width } = Dimensions.get('window')
// create a component
const Preference = (props) => {
    const colors = useTheme()
    const [dropdownValue, setDropdownValue] = useState('');

    const ProfileUdata = props.route.params.ProfileUdata
    // const regID = props.route.params.regID
    const regUdata = props.route.params.regUdata

    const [rangeDisabled, setRangeDisabled] = useState(false);
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(100);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [floatingLabel, setFloatingLabel] = useState(false);
    const renderThumb = useCallback(() => <Thumb />,
        [],
    );
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback(value => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((lowValue, highValue) => {
        setLow(lowValue);
        setHigh(highValue);
    }, []);
    const toggleRangeEnabled = useCallback(
        () => setRangeDisabled(!rangeDisabled),
        [rangeDisabled],
    );
    const setMinTo50 = useCallback(() => setMin(50), []);
    const setMinTo0 = useCallback(() => setMin(0), []);
    const setMaxTo100 = useCallback(() => setMax(100), []);
    const setMaxTo500 = useCallback(() => setMax(500), []);
    const toggleFloatingLabel = useCallback(
        () => setFloatingLabel(!floatingLabel),
        [floatingLabel],
    );

    const [RrangeDisabled, setRRangeDisabled] = useState(false);
    const [Rlow, setRLow] = useState(0);
    const [Rhigh, setRHigh] = useState(100);
    const [Rmin, setRMin] = useState(0);
    const [Rmax, setRMax] = useState(100);
    const [RfloatingLabel, setRFloatingLabel] = useState(false);
    const RrenderThumb = useCallback(() => <RThumb />,
        [],
    );
    const RrenderRail = useCallback(() => <RRail />, []);
    const RrenderRailSelected = useCallback(() => <RRailSelected />, []);
    const RrenderLabel = useCallback(value => <RLabel text={value} />, []);
    const RrenderNotch = useCallback(() => <RNotch />, []);
    const RhandleValueChange = useCallback((lowValue, highValue) => {
        setLow(lowValue);
        setHigh(highValue);
    }, []);
    const toggleRRangeEnabled = useCallback(
        () => setRRangeDisabled(!RrangeDisabled),
        [RrangeDisabled],
    );
    const setRMinTo50 = useCallback(() => setMin(50), []);
    const setRMinTo0 = useCallback(() => setMin(0), []);
    const setRMaxTo100 = useCallback(() => setMax(100), []);
    const setRMaxTo500 = useCallback(() => setMax(500), []);
    const toggleRFloatingLabel = useCallback(
        () => setFloatingLabel(!RfloatingLabel),
        [RfloatingLabel],
    );

    const [startage, setStartAge] = useState(0)
    const [endAge, setEndAge] = useState('')
    const [radius, setRadius] = useState('')
    const [interested, setInterested] = useState('')
    const [lookingFor, setLookingFor] = useState('')

    const Preference = async () => {
        if (endAge == '') {
            Toast.show('Select age range', Toast.SHORT);
            return
        }
        if (radius == '') {
            Toast.show('Select radius', Toast.SHORT);
            return
        }
        if (interested == '') {
            Toast.show('Select your interest', Toast.SHORT);
            return
        }
        if (lookingFor == '') {
            Toast.show('What are you looking for', Toast.SHORT);
            return
        }
        console.log("data", {
            PreferenceUdata: { startage: startage, endAge: Number(endAge), radius: Number(radius), interested: interested, lookingFor: lookingFor },
            Profile_Udata: ProfileUdata,
            Prefile_regUdata: regUdata,
            // Profile_regID: regID
        });
        NavigationService.navigate('VideoStory', {
            PreferenceUdata: { startage: startage, endAge: Number(endAge), radius: Number(radius),interested: interested, lookingFor: lookingFor },
            Profile_Udata: ProfileUdata,
            Prefile_regUdata: regUdata,
            // Profile_regID: regID
        })

        // let data = {
        //     "fullName": Profile_Udata.Name,
        //     "age": Profile_Udata.Age,
        //     "gender": Profile_Udata.Gender,
        //     "location": Profile_Udata.location,
        //     "Occupation": Profile_Udata.Occupation,
        //     "startAge": PreferenceUdata.startage(0),
        //     "endAge":PreferenceUdata.endAge ,
        //     "interestIn": PreferenceUdata.interested,
        //     "lookingFor": PreferenceUdata.lookingFor
        //     // "about": "test data"
        // };
        // setBtnLoader(true)
        // console.log('data', data);
        // AuthService.CreateProfile(data)
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
            <BackHeader title='Preference' />
            <LinearGradient
                start={{ x: 0, y: 1 }} end={{ x: 0.8, y: 1 }}
                colors={['rgba(137,204,213,255)', 'rgba(236,190,200,255)']}
                style={{
                    ...styles.gradient_box,
                }}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={{
                        ...styles.age_range_txt,
                        color: colors.textColor,
                    }}>Age Range</Text>
                    <View style={{
                        marginHorizontal: moderateScale(15)
                    }}>

                        <Slider
                            style={{
                                ...styles.slider,
                            }}
                            min={min}
                            max={max}
                            step={1}
                            disableRange={true}
                            floatingLabel={floatingLabel}
                            renderThumb={renderThumb}
                            renderRail={renderRail}
                            renderRailSelected={renderRailSelected}
                            renderLabel={renderLabel}
                            renderNotch={renderNotch}
                            onValueChanged={val => setEndAge(val)}
                        />
                    </View>
                    {/* handleValueChange */}
                    <Text style={{
                        ...styles.age_number_txt,
                        color: colors.primaryFontColor
                    }}>19-85</Text>

                    <Text style={{
                        ...styles.age_range_txt,
                        color: colors.textColor,
                    }}>Radius</Text>
                    <View style={{
                        marginHorizontal: moderateScale(15)
                    }}>

                        <Slider
                            style={{
                                ...styles.slider,
                            }}
                            min={Rmin}
                            max={Rmax}
                            step={1}
                            disableRange={true}
                            floatingLabel={RfloatingLabel}
                            renderThumb={RrenderThumb}
                            renderRail={RrenderRail}
                            renderRailSelected={RrenderRailSelected}
                            renderLabel={RrenderLabel}
                            renderNotch={RrenderNotch}
                            onValueChanged={value => setRadius(value)}
                        />
                    </View>
                    <Text style={{
                        ...styles.age_number_txt,
                        color: colors.primaryFontColor
                    }}>20km</Text>

                    <Text style={{
                        ...styles.password_txt
                    }}>Interested In</Text>
                    <Picker
                        options={[
                            {
                                label: 'Male',
                                value: 'Male'
                            },
                            {
                                label: 'Women',
                                value: 'Women'
                            },
                            {
                                label: 'Gey',
                                value: 'Gey'
                            },
                            {
                                label: 'Lesbian',
                                value: 'Lesbian'
                            },
                        ]}
                        placeholder="Select"
                        textStyle={{
                            ...styles.picker_txt,
                            color: colors.primaryFontColor
                        }}
                        containerStyle={{
                            ...styles.picker_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        selectedValue={interested}
                        onValueChange={(val) => setInterested(val)}
                    />

                    <Text style={{
                        ...styles.password_txt,
                    }}>Looking For</Text>
                    <Picker
                        options={[
                            {
                                label: 'Hookups',
                                value: 'Hookups'
                            },
                            {
                                label: 'Sea where it goes',
                                value: 'Sea where it goes'
                            },
                            {
                                label: 'Friends',
                                value: 'Friends'
                            },
                            {
                                label: 'Serious types',
                                value: 'Serious types'
                            },
                        ]}
                        placeholder="Select"
                        textStyle={{
                            ...styles.picker_txt,
                            color: colors.primaryFontColor
                        }}
                        containerStyle={{
                            ...styles.picker_sty,
                            borderColor: colors.primaryFontColor
                        }}
                        selectedValue={lookingFor}
                        onValueChange={(val) => setLookingFor(val)}
                    />

                    <AppButton
                        title="Next"
                        textStyle={styles.button_txt}
                        style={styles.button_sty}
                        // onPress={() => NavigationService.navigate('VideoStory')}
                        onPress={() => Preference()}
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
    age_range_txt: {
        fontFamily: FONTS.solway.medium,
        fontSize: moderateScale(14),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(30)
    },
    slider: {
        marginBottom: moderateScale(3),
        marginTop: -25
    },
    age_number_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(30),
        textAlign: 'right'
    },
    password_txt: {
        fontFamily: FONTS.solway.regular,
        fontSize: moderateScale(12),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(25)
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
        marginTop: moderateScale(80),
        borderRadius: moderateScale(25),
        marginBottom: moderateScale(20)
    },
});

//make this component available to the app
export default Preference;
