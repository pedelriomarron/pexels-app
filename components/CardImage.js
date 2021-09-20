import React from 'react'
import { View,Image,StyleSheet } from 'react-native'

const CardImage = ({image}) => {
    return (
        <View style={styles.cardImage}>
            <Image 
                source={{uri:
                    image.src.small 
                    ? image.src.small
                    :"https://cdn.iconscout.com/icon/free/png-256/no-image-1771002-1505134.png"}}
                 style={{height:180,width:"100%"}} />
        </View>
    )
}


const styles= StyleSheet.create({
    cardImage:{
      display:"flex",
      width:'49.5%'  ,
      margin: 4,
      justifyContent: 'space-between',
      backgroundColor: '#2c292c',
      borderWidth:0,
      borderRadius:5
    }
})

export default CardImage
