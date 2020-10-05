import React, { Component } from 'react'
import { View, Text, Pressable, StyleSheet, Image } from 'react-native'


class Welcome extends Component{
    
    constructor(props){
        super(props)
    }


    handlePress = ()=>{
        this.props.navigation.navigate('Login-screen')
    }

    render(){
        return(
            <View style={styles.pageContainer}>
                <Text style={styles.title}>OFERTAS GREEN</Text>
                <Pressable onPress={this.handlePress}>
                    <Image source={require('../../assets/logo.png')} />
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: '400'
    },
    pageContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#5A7E6D'
    }
})


export default Welcome