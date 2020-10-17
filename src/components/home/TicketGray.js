import React from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize";


function TicketGray(item, handleQuitTicket){
    return(
        <Text style={style.ticket}> 
            <TouchableOpacity  onPress={()=>{
                    handleQuitTicket(item.id)
                    }}>
                <Image style={style.equis} source={
                    require('../../assets/equis.png')   
                    }
                />
            </TouchableOpacity>
            {item.type} 
        </Text>
    )
}


const style = StyleSheet.create({
    ticket:{
        backgroundColor: 'gray',
        padding: RFPercentage(1),
        minWidth: RFPercentage(20),
        marginRight: RFPercentage(1),
        marginLeft: RFPercentage(1),
        marginBottom: RFPercentage(2.6),
        borderRadius: RFPercentage(1),
        color: '#000000',
        fontSize: RFPercentage(1.9),
        position: 'relative'
    },
    equis:{
        width: 10,
        height: 10,
    }
})


export default TicketGray