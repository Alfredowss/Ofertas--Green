import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";

import Form from '../Form'

class Login extends Component{

    render(){
        return(
                <View style={style.page}>
                    <Text style={style.header}>
                        Hola!
                    </Text>
                        
                    <Form navigation={this.props.navigation}/>
                </View>    
        )
    }
}

const style = StyleSheet.create({
    header:{
        fontSize: RFPercentage(16),
        fontWeight: 'bold',
        marginTop: RFPercentage(4),
        marginLeft: RFPercentage(4),
        color: '#FFF',
        height: '30%'
    },
    page:{
        backgroundColor: '#5A7E6D',
        flex: 1
    }
})

export default Login