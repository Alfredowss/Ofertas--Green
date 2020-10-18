import React from 'react'
import { View , Text, TextInput, StyleSheet, Image, FlatList} from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import { RFPercentage } from "react-native-responsive-fontsize";
import Item from './Item'
import ItemCategory from './ItemCategory'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';

class Feed extends React.Component {
    
    state = {
        forMe: [],
        loadingPlaces: true,
        photo: null,
        placesData: []
    }

    constructor(props){
        super(props)
        this.navigation = props.navigation
        this.user = props.route.params.user
    }

    handleChange = (text)=>{
        console.log(text)
    }

    componentDidMount(){
         Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=15000&keyword=all&key=AIzaSyCshggT2C0jJqK2WJbsYNSUZ9TN7VPyTtM`
            ).then((response)=>{
                return response.json()
            }).then((data)=>{
            
                const results = data.results
                const indexesFromName = results.reduce((acc, el)=>({
                        ...acc,
                        [el.name]: el
                }), {})


                
                let arrayOfData = []

                for(property in indexesFromName){
                    arrayOfData.push(indexesFromName[property].photos)
                }

                arrayOfData = arrayOfData.map((array)=>array) 
                let photos = [];
                let cantidad = arrayOfData.length
                for(let i = 0; i<cantidad; i++){
                    if(arrayOfData[i]){
                        photos.push({id:Math.random(),url: arrayOfData[i][0]['photo_reference']})
                    }
                }
                
                photos = photos.map(obj=>{
                    return(
                        {
                            url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${obj.url}&key=AIzaSyCshggT2C0jJqK2WJbsYNSUZ9TN7VPyTtM`,
                            id: obj.id,
                        }
                    )
                })

               fetch('https://backend.alfredowss.vercel.app/user/products').then((res)=>{
                   return res.json()
               }).then((data)=>{
                   this.setState({
                    forMe: [...this.state.forMe, ...data],
                    loadingPlaces: false,
                    placesData: [...this.state.placesData]
                   })
               }).catch((err)=>{
                   alert('Error, in the server')
               })


                this.setState({
                    forMe: [...this.state.forMe],
                    loadingPlaces: false,
                    placesData: [...photos] 
                })
            })      
            }
        )

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
                  <Text style={{fontWeight:'bold', marginBottom: RFPercentage(2), marginTop: RFPercentage(5)}}>Cerca de mi (15km)</Text>
                  <FlatList 
                        data={this.state.placesData} 
                        keyExtractor={(item)=>Object.toString((item.id * 19))}
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