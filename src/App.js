import React from  'react'
import { SafeAreaView } from 'react-native'
import ScreenA from './views/ScreenA'
import ScreenB from './views/ScreenB'
import ScreenC from './views/ScreenC'


export default (props) => {

  return (
    <SafeAreaView style={{flex:1}}>
      <ScreenA />
      <ScreenB />
      <ScreenC />
    </SafeAreaView>
  )
}