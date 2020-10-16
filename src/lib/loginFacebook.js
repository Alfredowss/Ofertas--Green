import { 
    AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager
    }  from 'react-native-fbsdk';

   const getInfoFromToken = (token, props) => {
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
              let data = {id:user.id, photo:user.picture.data.url, name:user.name}
              props.handlerLogin(data)
            }
          },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
      };

   const loginFacebook = (props)=>{
        LoginManager.logOut()
        LoginManager.logInWithPermissions(['public_profile']).then(
            (result)=> {
              if (result.isCancelled) {
                alert('Login was cancelled');
              } else {
                    AccessToken.getCurrentAccessToken().then(data => {
                    const accessToken = data.accessToken.toString();
                    getInfoFromToken(accessToken, props);
                  });
              }
            },
            (error)=> {
              alert('Login failed with error: ' + error);
            }
          );
    }


      export default {
          loginFacebook,
          getInfoFromToken
      }