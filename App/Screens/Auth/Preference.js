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

const { height, width } = Dimensions.get('window')
// create a component
const Preference = () => {
    const colors = useTheme()
    const [dropdownValue, setDropdownValue] = useState('');
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
                            onValueChanged={handleValueChange}
                        />
                    </View>
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
                            onValueChanged={handleValueChange}
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
                        placeholder="Select"
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

                    <Text style={{
                        ...styles.password_txt,
                    }}>Looking For</Text>
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
                        placeholder="Select"
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

                    <AppButton
                        title="Next"
                        textStyle={styles.button_txt}
                        style={styles.button_sty}
                        onPress={() => NavigationService.navigate('VideoStory')}
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
