//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { View, Text, StyleSheet, PixelRatio, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import Icon, { IconType } from '../Components/Icon';
import { COLORS } from '../Constants/Colors';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';
import Login from '../Screens/Auth/login';
import Ecommerce from '../Screens/Ecommerce';
import Home from '../Screens/Home';
import OTT from '../Screens/OTT';

const Tab = createBottomTabNavigator();
// create a component
const BottomTab = () => {
    const { userData, login_status } = useSelector(state => state.User);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.primaryThemeColor,
                tabBarInactiveTintColor: '#777',
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontFamily: FONTS.bold,
                    marginBottom: moderateScale(10),
                },
                tabBarStyle: {
                    backgroundColor: COLORS.secondaryThemeColor,
                    height: moderateScale(55),
                    paddingBottom: 0
                },
            
            }}
        >
            <Tab.Screen
                name="EVENTS"
                component={Home}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'EVENTS',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            type={IconType.MaterialIcon}
                            name="emoji-events"
                            size={28}
                            color={color}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="OTT"
                component={OTT}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'OTT',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            type={IconType.FontAwesome5}
                            name="photo-video"
                            size={24}
                            color={color}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="COMMERCE"
                component={Ecommerce}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'COMMERCE',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            type={IconType.FontAwesome}
                            name="shopping-bag"
                            size={24}
                            color={color}
                        />
                    )
                }}
            />

            {
                login_status ?
                    <Tab.Screen
                        name="NEWS"
                        component={Home}
                        options={{
                            unmountOnBlur: true,
                            tabBarLabel: 'NEWS',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Icon
                                    type={IconType.FontAwesome5}
                                    name="newspaper"
                                    size={24}
                                    color={color}
                                />
                            )
                        }}
                    />
                    :
                    null
            }


            {
                login_status ?
                    <Tab.Screen
                        name="PROFILE"
                        component={Home}
                        options={{
                            unmountOnBlur: true,
                            tabBarLabel: 'PROFILE',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Icon
                                    type={IconType.FontAwesome}
                                    name="user"
                                    size={28}
                                    color={color}
                                />
                            )
                        }}
                    />
                    :
                    <Tab.Screen
                        name="MORE"
                        component={Login}
                        options={{
                            unmountOnBlur: true,
                            tabBarLabel: 'MORE',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Icon
                                    type={IconType.FoundationIcon}
                                    name="indent-more"
                                    size={28}
                                    color={color}
                                />
                            )
                        }}
                    />
            }
        </Tab.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default BottomTab;
