//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Container } from 'react-native-basic-elements';
import HomeHeader from '../../Components/Header/HomeHeader';
import MapView, { Marker } from 'react-native-maps';
import { moderateScale } from '../../Constants/PixelRatio';
import { WebView } from 'react-native-webview';

const { height, width } = Dimensions.get('window')
// create a component
const Home = () => {
    return (
        <Container>
            <HomeHeader />

            <MapView
                provider="google"
                style={{ flex: 1 }}
                initialRegion={{
                    // latitude: 37.78825,
                    // longitude: -122.4324,
                    // latitudeDelta: 0.0922,
                    // longitudeDelta: 0.0421,
                    latitude: 22.5726,
                    longitude: 88.3639,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsTraffic={true}
                streetViewMode="enabled"
                showsCompass={true}
                customMapStyle={require('./DarkMapStyle.json')}
            >
                {/* Add map markers, overlays, etc. here */}
                {/* <Marker
                coordinate={{Latitude:  22.597781, Longitude:  88.476717}}
                title="Newtown Kolkata"
                description="New Town is a posh planned smart city located in the state of West Bengal in India. Being one of the satellite cities of state capital Kolkata, New Town is located in the east Kolkata. It is a part of Kolkata Metropolitan Area. It is administered by New Town Kolkata Development Authority"
            />
            <Marker
                coordinate={{ latitude: 37.79825, longitude: -122.4324 }}
                title="Popular Place 2"
                description="Description of Popular Place 2"
            /> */}
            </MapView>


        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    map_view: {
        alignSelf: "center",
        height: height,
        width: width,
        // borderRadius: moderateScale(5),
        overflow: "hidden",
        marginTop: moderateScale(15),
    },
  
});

//make this component available to the app
export default Home;
