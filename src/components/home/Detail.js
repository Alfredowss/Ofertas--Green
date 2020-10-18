import React from 'react'
import { StyleSheet, Text, Image, View, FlatList } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";


function Detail (props){
    return(
        <View> 
            <View style={style.headerContainer}>
                <Image style={style.logo} 
                        source={require('../../assets/logopequeño.png')} />
                <Text style={style.header}>
                  OFERTAS GREEN
                </Text>
            </View>
            <View style={{paddingLeft: RFPercentage(3), paddingRight: RFPercentage(3)}}>
                <Image style={style.image}
                    source={require('../../assets/logo.png')}/>
                    <Text style={style.headerDetail}>Starbucks Cofee</Text>
                    <Text style={style.marginmd}>DIRECCION</Text>
                    <Image style={style.phone} source={require('../../assets/phone.png')}/>
                    <Text style={style.marginmd}>
                      558768768
                    </Text>
                    <Text style={style.marginmd}>Esta es una descripcion del cafe donde 
                            se toma  habitualmente bebidas
                    </Text>
                   <Text style={style.marginmd}>https://sjajslkajslkjaslksajlkajslk/kajhskjahs</Text>
                    <View style={{paddingLeft: RFPercentage(4)}}>
                        <FlatList 
                            numColumns={2}
                            data={[{foto: '', Description: '', id:1},
                                {foto: '', Description: '', id:2},
                                {foto: '', Description: '', id:5},
                                {foto: '', Description: '', id:3}
                            ]}
                            key={(item)=>item.id}
                            renderItem={({item})=>{
                                return(
                                    <View>
                                    <Text style={style.imageItem}>image</Text>
                                    <View>
                                        <Text>Hola</Text>
                                        <Text>second</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
            </View>
        </View>
    )
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
      },
      image:{
          height: RFPercentage(15),
          marginLeft: RFPercentage(8),
          marginTop: RFPercentage(2)
      },
      headerDetail:{
          textAlign: 'center',
          fontSize: RFPercentage(3),
          fontWeight: 'bold',
          marginTop: RFPercentage(3)
      },
      text:{
          textAlign: 'center'
      },
      marginmd:{
          marginTop: RFPercentage(1.5),
          textAlign: 'center'
      },
      phone:{
        width:20, height: 20,
        position: 'absolute',
        top: RFPercentage(29),
        left: RFPercentage(18)
      },
      imageItem:{
          width: RFPercentage(18),
          marginRight: RFPercentage(3),
          backgroundColor: 'gray',
          marginTop: RFPercentage(4),
          height: RFPercentage(10)
      }
})

export default Detail