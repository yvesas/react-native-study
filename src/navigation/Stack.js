import React from  'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import ScreenC from '../views/ScreenC'

const Stack = createStackNavigator()

export default (props) => {

  return (
    <Stack.Navigator initialRouteName="ScreenA"
      screenOptions={{ headerShown:true}}>

      <Stack.Screen name='TelaA' 
        options={ {title:'Informações iniciais'}}
        component={ScreenA} ></Stack.Screen>

      <Stack.Screen name='ScreenB' component={ScreenB} ></Stack.Screen>
      <Stack.Screen name='ScreenC' component={ScreenC} ></Stack.Screen>
    </Stack.Navigator>
  )
}