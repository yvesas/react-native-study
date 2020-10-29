import React from  'react'
import { StyleSheet, Text, View } from 'react-native'

export default (props) => {

  const styles = StyleSheet.create({
    cntr:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:props.bkgColor || "black"
    },
    txt:{
      fontSize:30,
      color:props.color || "white"
    }
  })

  return (
    <View style={styles.cntr}>
      <Text style={styles.txt}>
        {props.children}
      </Text>
    </View>
  )
}

