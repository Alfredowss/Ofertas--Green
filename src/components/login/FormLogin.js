import React, { Component } from 'react'
import { StyleSheet, TextInput, Image, View, Text , Pressable} from 'react-native'
import facebookLib from '../../lib/loginFacebook'
import googleLib from '../../lib/loginGoogle'
import { RFPercentage } from "react-native-responsive-fontsize";

class FormLogin extends Component{

    state = {
        fields:{
            name: null,
            password: null
        },
        empity: false
    }

    handleChange = (name, value)=>{
        this.setState({
            fields:{
                ...this.state.fields,
                [name]: value
            },
            empity: false
        })
    }

    handleCreateAccount=()=>{
        console.log(this.state.fields)
        const {name, password} = this.state.fields
        if(name && password){
            this.props.handlerLogin(this.state.fields, 'normal')
        }else{
            this.setState({
                fields:{
                    name: null,
                    password: null
                },
                empity: true
            })
        }
    }

    render(){ 
        return (<View style={style.Container}>
                        <Text style={style.headerContainer}>
                            Sign In
                        </Text>

                        <View style={style.inputsContainer}>
                            <TextInput onChangeText={(value)=>this.handleChange('name', value)} 
                                    style={style.inputs}
                                    placeholder="USUARIO"    
                            />
                            <TextInput onChangeText={(value)=>this.handleChange('password', value)} 
                                    placeholder="INTRODUCE TU CONTRASEÑA" 
                                    style={style.inputs}
                            />
                        </View>

                         <View style={style.direction} onPress={()=>this.handleCreateAccount}>
                            <Text style={style.span} 
                                  onPress={this.handleCreateAccount}>
                                        {`Sign in  `} 
                                <Image 
                                    source={require('../../assets/flechaAzul.png')}
                                    style={style.svgs}
                                />
                            </Text>
                        </View>

                        <View style={style.lines}>
                        </View>

                        {(this.state.empity && <Text style={style.error}>Campos vacios</Text>)}

                        <View style={style.center}>

                            <View>
                                <Pressable style={style.plataformIcons}  onPress={()=>{facebookLib.loginFacebook(this.props)}}>
                                    <Image style={style.icon} 
                                        source={require('../../assets/facebook.png')}/>
                                    <Text style={style.facebook}>
                                        Login con facebook
                                    </Text>
                                </Pressable>
                                <Pressable style={style.plataformIcons} onPress={()=>googleLib.signIn(this.props)}>
                                    <Image style={style.icon} 
                                            source={require('../../assets/gmail.png')}
                                    />
                                    <Text style={style.gmail}>Login Google</Text>
                                </Pressable>
                            </View>

                            <Text style={style.margin}>
                                Crea tu cuenta 
                                <Text style={style.link}
                                        onPress={()=>this.props.navigation.navigate('SignUp-screen')}>
                                     Aqui
                                </Text>
                            </Text>
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
        paddingLeft: RFPercentage(2),
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
        fontSize: RFPercentage(1.8),
        letterSpacing: .6,
        position:'relative',
        height: RFPercentage(6)
    },  
    span:{
        textAlign: 'right',
        color: '#5E80B5',
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
        width: RFPercentage(43),
        height: RFPercentage(6),
        position: 'relative'
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
        position: 'absolute',
        left: -6,
        top: 2
    },
    error:{
        color: 'red'
    },
    gmail:{
        width: RFPercentage(36),
        backgroundColor: '#FF3D00',
        height: RFPercentage(5),
        position: "absolute",
        right: 0,
        borderRadius: 3,
        textAlign: 'center',
        fontSize: RFPercentage(2.5),
        paddingTop: 5,
        fontWeight: 'bold',
        color: '#FFF'
    },
    facebook:{
        width: RFPercentage(36),
        backgroundColor: '#2C60A6',
        height: RFPercentage(5),
        position: "absolute",
        right: 0,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: RFPercentage(2.5),
        paddingTop: 5,
        fontWeight: 'bold',
        color: '#FFF'
    },
    margin:{
        marginTop: RFPercentage(2)
    },
    link:{
        color:'#2C60A6'
    }

})

export default FormLogin