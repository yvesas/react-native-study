import React from  'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import CentralText from '../components/CentralText'


export default (props) => {

  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
        <Button 
          title="Abrir"
          onPress={()=>{
            props.navigation.openDrawer()
            setTimeout(()=>{
              props.navigation.closeDrawer()
              setInterval(()=>{
                props.navigation.toggleDrawer()
              }, 1500)
            }, 3000)
          }}
        />
       
      </View>
      <View style={{flex:1}}>
        <CentralText bkgColor={'#919979'} color={'black'}>
          Tela D
        </CentralText>
      </View>
    </View>

    
  )
}