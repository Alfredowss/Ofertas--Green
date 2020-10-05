import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './Welcome'
import Login from './Login'


const Stack = createStackNavigator()

const LoginStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Ofertas-Green" options={{headerShown: false}} component={Welcome}/>
            <Stack.Screen name="Login-screen"  options={{headerShown: false}} component={Login}/>
        </Stack.Navigator>
    )
}


export default LoginStack