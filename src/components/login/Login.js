import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
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
        fontSize: 80,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 55,
        color: '#FFF',
        height: '30%'
    },
    page:{
        backgroundColor: '#5A7E6D',
        flex: 1
    }
})

export default Login