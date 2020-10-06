import React, { Component } from 'react'
import { View, Text, Pressable } from 'react-native'

class Home extends Component{
    componentDidMount(){
        this.props.navigation.setOptions({
            title: `${this.props.route.params.name}`
        })
    }
    render(){
        return(
            <Pressable onPress={()=>console.log(this.props, this.props.route)}>
                <Text>Hello {`${this.props.route.params.name}`}</Text>
            </Pressable>
        )
    }
}


export default Home