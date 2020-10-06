import React, { Component } from 'react'
import { StyleSheet, TextInput, Image, View, Text , Pressable} from 'react-native'
import { 
        AccessToken,
        GraphRequest,
        GraphRequestManager,
        LoginManager
        }  from 'react-native-fbsdk';

class Form extends Component{

    getInfoFromToken = token => {
        const PROFILE_REQUEST_PARAMS = {
          fields: {
            string: 'id,name,first_name,last_name,picture', 
          },
        };
        const profileRequest = new GraphRequest(
          '/me',
          {token, parameters: PROFILE_REQUEST_PARAMS},
          (error, user) => {
            if (error) {
              console.log('login info has error: ' + error);
            } else {
              this.props.navigation.navigate('home', user)
            }
          },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
      };
    
    loginFacebook = ()=>{
        LoginManager.logOut()
        LoginManager.logInWithPermissions(['public_profile']).then(
            (result)=> {
              if (result.isCancelled) {
                alert('Login was cancelled');
              } else {
                    AccessToken.getCurrentAccessToken().then(data => {
                    const accessToken = data.accessToken.toString();
                    this.getInfoFromToken(accessToken);
                  });
              }
            },
            (error)=> {
              alert('Login failed with error: ' + error);
            }
          );
    }

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
                                <Pressable onPress={this.loginFacebook}>
                                    <Image style={style.margin} 
                                        source={require('../assets/facebook.png')}/>
                                </Pressable>
                                <Image style={style.margin} source={require('../assets/gmail.png')}/>
                                <Image style={style.margin} source={require('../assets/twitter.png')}/>
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
        paddingRight: '10%',
        paddingLeft: '10%'
    },
    headerContainer:{
        color: '#476758',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: '5%',
        textAlign: 'center',
    },
    inputsContainer:{
        marginTop: '8%',
    },
    inputs:{
        borderRadius: 12,
        marginBottom: '7%',
        textAlign: 'center',
        backgroundColor: '#f7f7f7',
        color: '#656565',
        fontSize: 15,
        letterSpacing: .6,
        position:'relative',
        paddingTop: '4%',
        paddingBottom: '4%'
    },  
    span:{
        textAlign: 'right',
        color: '#D7AF58',
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: '8%'
    },
    svgs:{
        width: 20,
        height: 20,
    },
    lines:{
        borderBottomWidth: .9,
        borderBottomColor: 'black',
        marginBottom: '8%'
    },
    plataformIcons:{
        flexDirection: 'row',
        width: 'auto'
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    margin:{
        marginLeft: 15,
        marginRight: 15,
        width: 30,
        height: 30,
    }
})

export default Form