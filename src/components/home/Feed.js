import React from 'react'
import { View , Text, TextInput, StyleSheet, Image, FlatList} from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import Item from './Item'
import ItemCategory from './ItemCategory'

class Feed extends React.Component {
    
    state = {
        forMe: [{name: 'Tiendita', owner: 'Jose', id: '1'},{name: 'Tiendita', owner: 'Jose', id: '1'},{name: 'Tiendita', owner: 'Jose', id: '1'} ,{name: 'Tiendita', owner: 'Jose', id: '1'}, {name: 'La Escondida', owner: 'Lilia bonita', id:'2'}],
        suggestForMe: null,
        categories: null
    }

    constructor(props){
        super(props)
        this.navigation = props.navigation
        this.user = props.route.params.user
    }

    handleChange = (text)=>{
        console.log(text)
    }

    render(){
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <TextInput 
                    style={style.input} 
                    placeholder="Buscar tiendas o ofertas" 
                    onChangeText={this.handleChange}
                />
                <Image style={style.avatar} source={{uri:`${this.user.photo}`}} onPress={()=>this.navigation.toggleDrawer()} />
                <Image style={style.button} source={require('../../assets/button.png')} />
              </View>
              <View style={style.feedContainer}>
                <Text style={style.headers}>Para ti</Text>
                <FlatList 
                    data={this.state.forMe} 
                    keyExtractor={(item)=>item.id}
                    renderItem={Item}
                />
              </View>
              <View style={style.categoriesContainer}>
                  <Text style={{fontWeight:'bold', marginBottom: RFPercentage(2), marginTop: RFPercentage(5)}}>Categorias</Text>
                <FlatList 
                        data={this.state.forMe} 
                        keyExtractor={(item)=>item.id}
                        horizontal={true}
                        renderItem={ItemCategory}
                    />
              </View>
          </View>
        );
    }
  }


const style = StyleSheet.create({
    input: {
        width: RFPercentage(48),
        height: RFPercentage(5.9),
        backgroundColor: '#f7f7f7',
        color: '#656565',
        borderRadius: 2,
        textAlign: 'center',
        marginTop: RFPercentage(4),
        fontSize: RFPercentage(1.9)
    },
    inputContainer:{
        position: 'relative'
    },
    avatar:{
        position: 'absolute',
        right: RFPercentage(1),
        top: RFPercentage(5),
        width: RFPercentage(4),
        height: RFPercentage(4),
        borderRadius: RFPercentage(2)
    },
    feedContainer:{
        flex:1,
        width: RFPercentage(48)
    },
    button:{
        position: 'absolute',
        width: RFPercentage(3.2),
        height: RFPercentage(3.2),
        top: RFPercentage(5),
        left: RFPercentage(2)
    }, 
    headers:{
        textAlign: 'left',
        width: RFPercentage(46),
        marginTop: RFPercentage(2),
        marginBottom: RFPercentage(1.5),
        fontSize: RFPercentage(2.2),
        position: 'relative',
        left: RFPercentage(3.5)
    },
    categoriesContainer:{
        height: RFPercentage(26),
        paddingLeft: RFPercentage(3.4)
    }
})

export default Feed