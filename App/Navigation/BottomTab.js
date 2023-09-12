//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { View, Text, StyleSheet, PixelRatio, SafeAreaView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS } from '../Constants/Colors';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';
import Home from '../Screens/Home/Home';
import Messages from '../Screens/Messages/Messages';
import Account from '../Screens/Account/Account';


const Tab = createBottomTabNavigator();
// create a component
const BottomTab = () => {
    const { userData, login_status } = useSelector(state => state.User);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#89CCD5',
                tabBarInactiveTintColor: '#BDBDBD',
                tabBarLabelStyle: {
                    fontSize: 8,
                    fontFamily: FONTS.solway.medium,
                    marginBottom: moderateScale(15),
                },
                tabBarStyle: {
                    backgroundColor: COLORS.secondaryThemeColor,
                    height: moderateScale(70),
                    paddingBottom: 0,
                    borderRadius: moderateScale(35),
                    marginBottom: moderateScale(20),
                    position:'absolute',
                    marginHorizontal:moderateScale(10)
                },

            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => (

                        <Image
                            source={require('../Assets/images/home.png')}
                            style={{
                                height: moderateScale(24),
                                width: moderateScale(24),
                                tintColor: focused ? "#89CCD5" : '#BDBDBD'
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ focused, color, size }) => (

                        <Image
                            source={require('../Assets/images/message.png')}
                            style={{
                                height: moderateScale(24),
                                width: moderateScale(24),
                                tintColor: focused ? "#89CCD5" : '#BDBDBD'
                            }}
                        />
                    )
                }}
            />


            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ focused, color, size }) => (

                        <Image
                            source={require('../Assets/images/account.png')}
                            style={{
                                height: moderateScale(24),
                                width: moderateScale(24),
                                tintColor: focused ? "#89CCD5" : '#BDBDBD'
                            }}
                        />
                    )
                }}
            />

            {/* <Tab.Screen
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
            /> */}

            {/* {
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
            } */}
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
