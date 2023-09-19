//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NavigationService from './App/Services/Navigation';
import AuthStack from './App/Navigation/AuthStack';
import { Theme } from 'react-native-basic-elements';
import AppStack from './App/Navigation/AppStack';
import { Dimensions } from 'react-native';
import AuthService from './App/Services/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { setuser } from './App/Redux/reducer/User';

const Stack = createStackNavigator();
const { height, width } = Dimensions.get('screen')
// create a component
const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [splash, setSplash] = useState(true)
  const [isSignIn, setisSignIn] = useState(true)
  const dispatch = useDispatch();
  const { login_status } = useSelector(state => state.User);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 900);
    checkUser();
  }, [])
  const checkUser = async () => {
    let account = await AuthService.getAccount()
    console.log(account);
    if (account) {
      console.log("account", account);
      // console.log("account");
      dispatch(setuser(account))
    } else {
      // console.log("no no");
    }
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      {
        splash ?
          <Image
            source={require('./Onboarding.png')}
            style={{
              height: height,
              width: width
            }}
            resizeMode='cover'
          />
          :
          <Theme.Provider
            theme={{
              light: {
                primaryThemeColor: '#fff',
                secondaryThemeColor: '#fff',
                primaryFontColor: '#51535D',
                secondaryFontColor: '#4F4F4F',
                textColor: '#000000',
                secondaryTextColor: '#33353C',
                buttonTextColor: '#ffffff',
                cardColor: '#fff',
                headerColor: '#fff',
                pageBackgroundColor: '#fff',
                tabBarColor: '#fff',
                shadowColor: '#999',
                statusBarStyle: 'dark-content',
                buttonColor: '#000000',
                borderColor: '#DDDDDD'
              },
              dark: {
                primaryThemeColor: 'fff',
                secondaryThemeColor: '#000',
                primaryFontColor: '#51535D',
                secondaryFontColor: '#4F4F4F',
                textColor: '#000000',
                secondaryTextColor: '#33353C',
                buttonTextColor: '#ffffff',
                cardColor: '#000',
                headerColor: '#000',
                pageBackgroundColor: '#0A0A0A',
                tabBarColor: '#000',
                shadowColor: '#1E1E1E',
                statusBarStyle: "light-content",
                buttonColor: '#000000',
                borderColor: '#DDDDDD'
              },
            }}
            mode={isDark ? 'dark' : 'light'}
          >

            <NavigationContainer
              ref={r => NavigationService.setTopLevelNavigator(r)}>
              <Stack.Navigator
                // initialRouteName="AuthStack"
                screenOptions={{
                  headerShown: false,
                  // gestureEnabled: true,
                  // gestureDirection: 'horizontal',
                  // ...TransitionPresets.ModalTransition,
                }}>
                {
                  console.log('login_status=======', login_status)
                }
                {
                  login_status ?
                    <Stack.Screen name="AppStack" component={AppStack} />
                    :
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                }
              </Stack.Navigator>
            </NavigationContainer>
          </Theme.Provider>
      }

    </View>
  );
};

export default App;
