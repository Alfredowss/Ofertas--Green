import React, { Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";

import Form from '../Form'

class SignUp extends Component{

    state = {
        loading:false
    }

    handlerLogin= async (data)=>{
        this.setState({loading: true})
        try{
            const response =  await  fetch('https://backend-blush-five.vercel.app/user',{
                    method: 'POST',
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            
            const user = await response.json()

            this.props.navigation.navigate('home', user)
        }catch(err){
            console.log(err)
        }
    }

 
    renderContent=()=>{
        if(this.state.loading){
            return(
                <View style={style.loaderContainer}>
                    <Image style={style.loader} source={require('../../assets/loader.gif')}/>
                </View>
            )
        }else{
            return(
                <>
                    <Text style={style.header}>
                        Hola!
                    </Text>
                    <Image style={style.logo} source={require('../../assets/logo-2.png')} />      
                    <Form  handlerLogin={this.handlerLogin}/>
                </>   
            )
        }
    }
    render(){
        return(
            <View style={style.page}>
                {this.renderContent()}
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
        height: RFPercentage(35)
    },
    page:{
        backgroundColor: '#101F5A',
        flex: 1
    }, 
    loaderContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader:{
        width: RFPercentage(16),
        height: RFPercentage(16)
    },
    logo:{
        position: 'absolute',
        top: RFPercentage(18),
        right: 0
    }
})

export default SignUp