import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";


function ItemCategory({item}){
    return(
        <View> 
              <Image style={style.imageCategory}
                    source={{
                        uri: item.url,
                    }}
                />
        </View>
    )
}


const style = StyleSheet.create({
    imageCategory:{
        width: RFPercentage(11),
        height: RFPercentage(7.5),
        marginRight: RFPercentage(2),
        borderRadius: RFPercentage(1.2)
    }
})

export default ItemCategory