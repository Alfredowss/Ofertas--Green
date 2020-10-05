import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import LoginStack from './src/components/login/LoginStack'

const App = ()=>{
  return(
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  )
}


export default App;
