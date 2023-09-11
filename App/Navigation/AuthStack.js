//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Login from '../Screens/Auth/Login';
import ForgetPassword from '../Screens/Auth/ForgetPassword';
import OtpVerification from '../Screens/Auth/OtpVerification';
import Register from '../Screens/Auth/Register';
import Profile from '../Screens/Auth/Profile';
import Preference from '../Screens/Auth/Preference';
import VideoStory from '../Screens/Auth/VideoStory';
const Stack = createStackNavigator();
// create a component
const AuthStack = () => {
    // const { login_status } = useSelector(state => state.User)
    return (
        <Stack.Navigator
            initialRouteName='SignIn'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >
           
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} /> 
            <Stack.Screen name="OtpVerification" component={OtpVerification} /> 
            <Stack.Screen name="Register" component={Register} /> 
            <Stack.Screen name="Profile" component={Profile} /> 
            <Stack.Screen name="Preference" component={Preference} /> 
            <Stack.Screen name="VideoStory" component={VideoStory} /> 

        </Stack.Navigator>
    );
};

export default AuthStack;
