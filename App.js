import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginStack from './src/components/login/LoginStack'
import Home from './src/components/home/Home'

const Stack = createStackNavigator()

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "login" component={LoginStack} options={{headerShown: false}}/>
        <Stack.Screen name = "home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
