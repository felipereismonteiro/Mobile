import React from 'react'
import { View, StyleSheet } from 'react-native' 

function Spacing () {
    return(
        <View style={style.box}>
        </View>
    )
}

export default Spacing 


const style = StyleSheet.create({
    box: {
        width:200 ,
        height: 300,
    }
})


