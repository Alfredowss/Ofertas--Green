import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { Text, View, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Search from './Search';


export default class Map extends Component {
    state = {
        region: null,
    }
     componentDidMount() {
        Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            this.setState({
                region: {
                    latitude,
                    longitude,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134,
                }
            })
        }
        )
    }



    render() {
        const { region, destination } = this.state;
        return (
            <View style={{ flex: 1}}>
                <MapView
                    style={{flex:1}}
                    region={region}
                    showsUserLocation
                    loadingEnabled>
                </MapView>
                <Search></Search>
            </View>

        )
    }
}