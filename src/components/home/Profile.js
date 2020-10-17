import React from 'react'
import { Pressable, View, Button, Text, Image, StyleSheet, TextInput, FlatList} from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";
import Ticket from './Ticket'
import TicketGray from './TicketGray'

class Profile extends React.Component{

    state = {
        add: [{type: 'store', id: 1}, {type: 'other', id: 4}],
        data: [{type: 'Tiendas dment', id: 1}, {type: 'Autos', id: 4}, {type: 'Hipotecario', id: 3}, {type: 'Tarjeta de credito', id: 8}]
    }

    constructor(props){
        super(props)
        this.navigation = props.navigation
        this.user =  props.route.params.user
        this.text = null
    }

    componentDidMount(){
        fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyCshggT2C0jJqK2WJbsYNSUZ9TN7VPyTtM`
        ).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
    }

    handleEnter=()=>{
        if(!this.text){
            alert('Ingresa algun lugar de preferencia')
        }else{
            const obj = {
                type : this.text,
                id: Math.random()
            }
            const add = this.state.add
            const data = this.state.data
            this.setState({
                add: [obj, ...add],
                data: [...data]  
              })
        }
    }

    handleChange=(text)=>{
       this.text = text
    }

    handleQuitTicket=(id)=>{
        console.log(id)
        let {add, data} = this.state
        data = data.filter((item)=>item.id != id)
        this.setState({
            add,
            data
        })
    }



    render(){
        return (      
            <View style={style.profileContainer}>
              <Pressable 
                style={style.avatarContainer} 
                onPress={() => this.navigation.openDrawer()}>
                  <Image 
                    style={style.avatar} 
                    source={{uri:`${this.user.photo}`}}
                  />
                  <Text style={style.header}>{this.user.name}</Text>
              </Pressable>
              <View style={style.preferencesContainer}>
                <Text style={style.preferencesContainerHeader}>Elige tus preferencias</Text>
                <TextInput 
                    placeholder='Buscar' 
                    style={style.input} 
                    onChangeText={this.handleChange}
                    onSubmitEditing={this.handleEnter}
                />
                <View style={style.addTicketContainer}>
                    <FlatList numColumns={2} 
                    data={this.state.add} 
                    keyExtractor={(item)=>item.id} 
                    renderItem={Ticket}/>
                </View>
                <View style={style.ticketContainer}>
                    <FlatList 
                    numColumns={2} 
                    data={this.state.data} 
                    keyExtractor={(item)=>item.id} 
                    renderItem={({item})=>TicketGray(item, this.handleQuitTicket)}
                    />
                </View>
                <Pressable 
                    style={style.buttonContainer} 
                    onPress={() => this.navigation.navigate('feed')}>
                    <Text style={style.button}>
                        ACEPTAR
                    </Text>
                </Pressable>
              </View>
          </View>
        );
    }
  }

  const style = StyleSheet.create({
    
    profileContainer:{
        paddingTop: RFPercentage(5),
        paddingLeft: RFPercentage(4),
        paddingRight:RFPercentage(4),
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    avatarContainer:{
        flexDirection: 'row',
        position: 'relative'
    },
    avatar:{
        borderRadius: RFPercentage(10),
        width: RFPercentage(9), 
        height: RFPercentage(9)
    },
    header:{
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        position: 'absolute',
        top: RFPercentage(1.6),
        left: RFPercentage(10)
    },
    preferencesContainer:{
        flex: 1,
        paddingTop: RFPercentage(5),
        paddingBottom: RFPercentage(20)
    },
    preferencesContainerHeader:{
        fontSize: RFPercentage(3),
        color: '#868686'
    },
    input:{
        backgroundColor: '#FFF',
        borderColor: '#868686',
        borderWidth: 1,
        borderRadius: 5,
        height: RFPercentage(6),
        textAlign:'center',
        marginTop: RFPercentage(2),
        fontSize: RFPercentage(2)
    },
    buttonContainer:{
        backgroundColor: '#5E80B5',
        width: RFPercentage(14),
        paddingBottom: RFPercentage(1),
        paddingTop: RFPercentage(1), 
        borderRadius: RFPercentage(2),
        paddingLeft: RFPercentage(2.6),
        position: 'absolute',
        bottom: RFPercentage(7),
        right: RFPercentage(0)
    },
    button:{
        fontSize: RFPercentage(2),
        color: '#FFF',
    },
    addTicketContainer:{
        paddingTop: RFPercentage(4),
    },
    ticketContainer:{
        paddingTop: RFPercentage(14),
    },
    ticket:{
        backgroundColor: 'gray',
        padding: RFPercentage(1),
        minWidth: RFPercentage(20),
        marginRight: RFPercentage(1),
        marginLeft: RFPercentage(1),
        marginBottom: RFPercentage(2.6),
        borderRadius: RFPercentage(1),
        color: '#000000',
        fontSize: RFPercentage(1.9)
    },
  })

  export default Profile
  