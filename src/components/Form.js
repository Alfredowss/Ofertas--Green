import React, { Component } from 'react'
import { StyleSheet, TextInput, Image, View, Text , Pressable} from 'react-native'
import facebookLib from '../lib/loginFacebook'
import googleLib from '../lib/loginGoogle'
import { RFPercentage } from "react-native-responsive-fontsize";

class Form extends Component{

    render(){ 
        return (<View style={style.Container}>
                        <Text style={style.headerContainer}>
                            Crear cuenta
                        </Text>

                        <View style={style.inputsContainer}>
                            <TextInput style={style.inputs}
                                    placeholder="USUARIO"    
                            />
                            <TextInput placeholder="INTRODUCE TU CONTRASEÑA" 
                                    style={style.inputs}
                            />
                            <TextInput style={style.inputs}
                                    placeholder="NUMERO DE TELEFONO"
                            />
                        </View>

                         <View style={style.direction}>
                            <Text style={style.span}>
                                {`Crear  `} 
                                <Image 
                                    source={require('../assets/flecha.png')}
                                    style={style.svgs}
                                />
                            </Text>
                        </View>

                        <View style={style.lines}>
                        </View>

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
        color: '#476758',
        fontSize: RFPercentage(4.2),
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
        fontSize: RFPercentage(2.5),
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
    }
})

export default Form