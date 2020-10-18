import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";


function Item ({item}){
    console.log(item)

    return(
        <View style={style.itemContainer}> 
            <Image source={{uri: item.imagen}} style={style.imageContainer} />
            <View style={style.detailContainer}>
                <Text style={style.headerItem}>{item.name}</Text>
                <Text style={{color: 'gray', fontSize: RFPercentage(2)}}>{item.description}</Text>
                <Text style={{fontSize: RFPercentage(2)}}>Desde</Text>
                <Text style={{fontSize: RFPercentage(2)}}>${item.precio}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    imageContainer:{
        width: RFPercentage(23),
        height: RFPercentage(16),
        marginLeft: RFPercentage(0),
        borderRadius: RFPercentage(1)
    },
    itemContainer:{
        flexDirection: 'row',
        marginBottom: RFPercentage(6),
    },
    detailContainer:{
        marginLeft: RFPercentage(4),
    },
    headerItem:{
        fontSize: RFPercentage(2),
        fontWeight: 'bold'
    },
})

export default Item