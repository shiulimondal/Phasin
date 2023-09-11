//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ChooseTopic from '../Screens/Auth/ChooseTopic';
import GeneralInfo from '../Screens/Auth/GeneralInfo';
import ProfileImage from '../Screens/Auth/ProfileImage';
import Register from '../Screens/Auth/Register';
import AllProduct from '../Screens/Ecommerce/AllProduct';
import SingleProduct from '../Screens/Ecommerce/SingleProduct';
import EventDetails from '../Screens/Event/EventDetails';
import MyEvents from '../Screens/Event/MyEvents';
import ValueOfBravery from '../Screens/Event/ValueOfBravery';
import HomeSearch from '../Screens/Home/HomeSearch';
import OttAllCategories from '../Screens/OTT/OttAllCategories';
import ShowAllVideos from '../Screens/OTT/ShowAllVideos';
import SingleMovies from '../Screens/OTT/SingleMovies';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();
// create a component
const AppStack = () => {
    const { login_status } = useSelector(state => state.User)
    return (
        <Stack.Navigator
            initialRouteName='BottomTab'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="MyEvents" component={MyEvents} />
            <Stack.Screen name="HomeSearch" component={HomeSearch} />
            <Stack.Screen name="OttAllCategories" component={OttAllCategories} />
            <Stack.Screen name="ShowAllVideos" component={ShowAllVideos} />
            <Stack.Screen name="SingleMovies" component={SingleMovies} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="AllProduct" component={AllProduct} />
            <Stack.Screen name="SingleProduct" component={SingleProduct} />
            <Stack.Screen name="ValueOfBravery" component={ValueOfBravery} />

            {/* Auth Screens */}
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="GeneralInfo" component={GeneralInfo} />
            <Stack.Screen name="ProfileImage" component={ProfileImage} />
            <Stack.Screen name="ChooseTopic" component={ChooseTopic} />
        </Stack.Navigator>
    );
};

export default AppStack;
