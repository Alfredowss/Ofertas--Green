import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";


function Ticket({item}){
    return(
        <Text style={style.ticket}> 
            {item.type} 
        </Text>
    )
}


const style = StyleSheet.create({
    ticket:{
        backgroundColor: '#5e80b5',
        padding: RFPercentage(1),
        minWidth: RFPercentage(12.5),
        marginRight: RFPercentage(1),
        marginLeft: RFPercentage(1),
        marginBottom: RFPercentage(2.6),
        borderRadius: RFPercentage(1),
        color: '#000000',
        fontSize: RFPercentage(1.9)
    },
})


export default Ticket