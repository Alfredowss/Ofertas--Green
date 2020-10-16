import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";


function ItemCategory({item}){
    return(
        <View style={style.imageCategory}>      
        </View>
    )
}


const style = StyleSheet.create({
    imageCategory:{
        width: RFPercentage(11),
        height: RFPercentage(7.5),
        marginRight: RFPercentage(2),
        backgroundColor:'gray',
        borderRadius: RFPercentage(1.2)
    }
})

export default ItemCategory