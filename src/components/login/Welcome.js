import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'


class Welcome extends Component{
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.handlePress()
        }, 300)
    }

    handlePress = ()=>{
        this.props.navigation.navigate('Login-screen')
    }

    render(){
        return(
            <View style={styles.pageContainer}>
                <Image  source={require('../../assets/logo.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#101F5A'
    }
})


export default Welcome