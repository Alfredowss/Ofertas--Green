import React, { Component } from 'react';
import { View, Text, Button, Pressable, Image, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { RFPercentage } from "react-native-responsive-fontsize";

import Feed from './Feed'
import Profile from './Profile'




function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer(props) {

  const user = props.user;
  const routePrimary = ((user.preferences.length == 0)?"profile":"Feed")

  return (
    <Drawer.Navigator initialRouteName={routePrimary} drawerStyle={{
      backgroundColor: '#FFF',
      width: '100%',
    }}
    drawerContent={props => <CustomDrawerContent {...props} 
    />}>
      <Drawer.Screen initialParams={{user}} name="feed" component={Feed} />
      <Drawer.Screen initialParams={{user}} name="profile" component={Profile} />
    </Drawer.Navigator>
  );
}



export default class Home extends React.Component {

    constructor(props){super(props)}

    render(){

        const user = this.props.route.params

        return (
          <NavigationContainer  independent={true} >
            <View style={style.headerContainer}>
                <Image style={style.logo} source={require('../../assets/logopequeño.png')} />
                <Text style={style.header}>
                  OFERTAS GREEN
                </Text>
            </View>
            <MyDrawer user={user}/>
          </NavigationContainer>
        )
    }
}


const style = StyleSheet.create({
  headerContainer:{
    backgroundColor: '#101F5A',
    height: RFPercentage(10),
    justifyContent: 'center',
    alignItems:'center'
  },
  header:{
    color: '#FFF',
    fontSize: RFPercentage(2.8)
  },
  logo:{
    position: 'absolute',
    left: RFPercentage(10)
  }
})