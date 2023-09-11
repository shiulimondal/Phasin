//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationService from './App/Services/Navigation';
import AuthStack from './App/Navigation/AuthStack';
import { Theme } from 'react-native-basic-elements';

const Stack = createStackNavigator();
// create a component
const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Theme.Provider
        theme={{
          light: {
            primaryThemeColor: '#fff',
            secondaryThemeColor: '#fff',
            primaryFontColor: '#51535D',
            secondaryFontColor: '#4F4F4F',
            textColor:'#000000',
            buttonTextColor:'#ffffff',
            cardColor: '#fff',
            headerColor: '#fff',
            pageBackgroundColor: '#fff',
            tabBarColor: '#fff',
            shadowColor: '#999',
            statusBarStyle: 'dark-content',
            buttonColor: '#000000',
            borderColor: '#999'
          },
          dark: {
            primaryThemeColor: 'fff',
            secondaryThemeColor: '#000',
            primaryFontColor: '#51535D',
            secondaryFontColor: '#4F4F4F',
            textColor:'#000000',
            buttonTextColor:'#ffffff',
            cardColor: '#000',
            headerColor: '#000',
            pageBackgroundColor: '#0A0A0A',
            tabBarColor: '#000',
            shadowColor: '#1E1E1E',
            statusBarStyle: "light-content",
            buttonColor: '#000000',
            borderColor: '#999'
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
            <Stack.Screen name="AuthStack" component={AuthStack} />
            {/* <Stack.Screen name="AppStack" component={AppStack} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Theme.Provider>
    </View>
  );
};

export default App;
