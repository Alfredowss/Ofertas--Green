import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LoginButton,
        AccessToken,
        GraphRequest,
        GraphRequestManager,
        }  from 'react-native-fbsdk';

export default class FBLoginButton extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    getInfoFromToken = token => {
        const PROFILE_REQUEST_PARAMS = {
          fields: {
            string: 'id,name,first_name,last_name,email,hometown,location', 
          },
        };
        const profileRequest = new GraphRequest(
          '/me',
          {token, parameters: PROFILE_REQUEST_PARAMS},
          (error, user) => {
            if (error) {
              console.log('login info has error: ' + error);
            } else {
              this.setState({userInfo: user});
              console.log('result:', user);
            }
          },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
      };


  render() {
    
    return (
      <View>
          <Text>{this.state.userInfo?`${this.state.userInfo.name}`:''}</Text>
        <LoginButton
          publishPermissions={["public_profile"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                  alert("Login was successful with permissions: " + result.grantedPermissions)
                  AccessToken.getCurrentAccessToken().then(data => {
                    const accessToken = data.accessToken.toString();
                    this.getInfoFromToken(accessToken);
                  });
              }
            }
          }
          onLogoutFinished={() => this.setState({})}/>
      </View>
    );
  }
};

module.exports = FBLoginButton;