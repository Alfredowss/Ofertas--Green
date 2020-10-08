import React, { Component } from 'react';
import { View, Text, Button, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

let user= null;

function Profile({ navigation }) {
  return (
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Show-Menu" onPress={() => navigation.toggleDrawer()} />
        <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={{width: 80, height: 80}} source={{uri:`${user.picture.data.url}`}}/>
            <Text style={{fontSize:25}}>Hello {`${user.name}`}</Text>
        </Pressable>
        <Button title="Go to Feed" onPress={() => navigation.navigate('feed')} />
    </View>
  );
}

function Feed({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Go to profile" onPress={() => navigation.navigate('profile')} />
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="feed" component={Feed} />
    </Drawer.Navigator>
  );
}

export default class Home extends React.Component {

    constructor(props){super(props)}

    render(){

        user = this.props.route.params

        return (
          <NavigationContainer  independent={true} >
            <MyDrawer />
          </NavigationContainer>
        )
    }
}