//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Container } from 'react-native-basic-elements';
import HomeHeader from '../../Components/Header/HomeHeader';

// create a component
const Home = () => {
    return (
        <Container>
            <HomeHeader />
            <ImageBackground
                source={require('../../Assets/images/homeBack.png')}
                style={{ flex: 1 }}
                resizeMode='cover'
            ></ImageBackground>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Home;
