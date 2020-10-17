import {
    GoogleSignin,
    statusCodes,
  } from '@react-native-community/google-signin';

  
  GoogleSignin.configure({
    webClientId: '134070393276-4lf2h7bq7ooun2bktu21c1qqekngrd6l.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
  });


  signIn = async (props) => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
      console.log(userInfo)

      let user = {
        photo: userInfo.user.photo,
        name: userInfo.user.name,
        id: userInfo.user.id
      }

      props.handlerLogin(user)

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('error cancelado')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('error in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('error play service not available')
      } else {
        // some other error happened
        console.log('error from service google')
      }
    }
  };
  



  export default {
    signIn
  }