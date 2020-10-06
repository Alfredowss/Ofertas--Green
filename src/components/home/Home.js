import React, { Component } from 'react'
import { View, Text, Pressable, Image } from 'react-native'

class Home extends Component{
    componentDidMount(){
        this.props.navigation.setOptions({
            title: `${this.props.route.params.name}`
        })
    }
    render(){
        return(
            <Pressable onPress={()=>console.log(this.props, this.props.route.params.picture.data.url)}>
                <Image style={{width: 80, height: 80}} source={{uri:`${this.props.route.params.picture.data.url}`}}/>
                <Text style={{fontSize:25}}>Hello {`${this.props.route.params.name}`}</Text>
            </Pressable>
        )
    }
}


export default Home