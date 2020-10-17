import React, { Component } from 'react'
import { StyleSheet, TextInput, Image, View, Text , Pressable} from 'react-native'
import facebookLib from '../lib/loginFacebook'
import googleLib from '../lib/loginGoogle'
import { RFPercentage } from "react-native-responsive-fontsize";

class Form extends Component{

    state = {
        fields:{},
        empity: false
    }

    handleChange = (name, value)=>{
        const fields = this.state.fields
        const obj = {[name]: value}
        this.setState({
            fields:{
                ...fields,
                ...obj
            },
            empity: false
        })
    }

    handleCreateAccount=()=>{
        const {name, password, telephone} = this.state.fields
        if(name && password && telephone){
            this.props.handlerLogin(this.state.fields)
        }else{
            this.setState({
                fields:{},
                empity: true
            })
        }
    }

    render(){ 
        return (<View style={style.Container}>
                        <Text style={style.headerContainer}>
                            Crear cuenta
                        </Text>

                        <View style={style.inputsContainer}>
                            <TextInput onChangeText={(value)=>this.handleChange('name', value)} style={style.inputs}
                                    placeholder="USUARIO"    
                            />
                            <TextInput onChangeText={(value)=>this.handleChange('password', value)} placeholder="INTRODUCE TU CONTRASEÑA" 
                                    style={style.inputs}
                            />
                            <TextInput onChangeText={(value)=>this.handleChange('telephone', value)} style={style.inputs}
                                    placeholder="NUMERO DE TELEFONO"
                            />
                        </View>

                         <View style={style.direction}>
                            <Text style={style.span} onPress={this.handleCreateAccount}>
                                {`Crear  `} 
                                <Image 
                                    source={require('../assets/flecha.png')}
                                    style={style.svgs}
                                />
                            </Text>
                        </View>

                        <View style={style.lines}>
                        </View>
                        {(this.state.empity && <Text style={style.error}>Campos vacios</Text>)}
                        <View style={style.center}>
                            <View style={style.plataformIcons}>
                                <Pressable onPress={()=>{facebookLib.loginFacebook(this.props)}}>
                                    <Image style={style.icon} 
                                        source={require('../assets/facebook.png')}/>
                                </Pressable>
                                <Pressable onPress={()=>googleLib.signIn(this.props)}>
                                    <Image style={style.icon} source={require('../assets/gmail.png')}/>
                                </Pressable>
                                <Image style={style.icon} source={require('../assets/twitter.png')}/>
                            </View>
                        </View>
                
                </View>)
    }
}

const style = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#FFF',
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        paddingRight: RFPercentage(5),
        paddingLeft: RFPercentage(5)
    },
    headerContainer:{
        color: '#101F5A',
        fontSize: RFPercentage(3.8),
        fontWeight: 'bold',
        marginTop: RFPercentage(3),
        textAlign: 'center',
    },
    inputsContainer:{
        marginTop: RFPercentage(2.6),
    },
    inputs:{
        borderRadius: 12,
        marginBottom: RFPercentage(2.5),
        textAlign: 'center',
        backgroundColor: '#f7f7f7',
        color: '#656565',
        fontSize: RFPercentage(2.2),
        letterSpacing: .6,
        position:'relative',
    },  
    span:{
        textAlign: 'right',
        color: '#D7AF58',
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        marginBottom: RFPercentage(2)
    },
    svgs:{
        width: RFPercentage(2.6),
        height: RFPercentage(2.6),
    },
    lines:{
        borderBottomWidth: RFPercentage(.1),
        borderBottomColor: 'black',
        marginBottom: RFPercentage(3)
    },
    plataformIcons:{
        flexDirection: 'row',
        width: 'auto'
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        marginLeft: RFPercentage(2),
        marginRight: RFPercentage(2),
        width: 30,
        height: 30,
    },
    error:{
        color: 'red'
    }
})

export default Form