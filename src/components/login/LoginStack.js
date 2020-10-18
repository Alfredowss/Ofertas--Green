import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './Welcome'
import SignUp from './SignUp'
import Login from './Login'
import Map from '../home/Map'

const Stack = createStackNavigator()

const LoginStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Ofertas-Green" options={{headerShown: false}} component={Welcome}/>
            <Stack.Screen name="SignUp-screen"  options={{headerShown: false}} component={SignUp}/>
            <Stack.Screen name="Login-screen"  options={{headerShown: false}} component={Login}/>
        </Stack.Navigator>
    )
}


export default LoginStack