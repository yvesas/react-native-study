import React from  'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import ScreenC from '../views/ScreenC'
import { Image } from 'react-native'

const Tab = createBottomTabNavigator()

export default (props) => {

  return (
    <Tab.Navigator 
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     switch (route.name) {
    //       case 'ScreenA':
    //         iconName = focused
    //         ? 'ios-information-circle'
    //         : 'ios-information-circle-outline';
    //         break;
    //       case 'ScreenB':
    //           iconName = focused
    //           ? 'ios-list-box' : 'ios-list';
    //           break;
    //       case 'ScreenC':
    //           iconName = focused
    //           ? 'ios-information-circle'
    //           : 'ios-information-circle-outline';
    //           break;
    
    //     }  

    //     return <Ionicons name={iconName} size={size} color={color} />;
    //   },
    // })}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case 'ScreenA':
            iconName = focused
            ? require('../assests/home_active.png')
            : require('../assests/home.png')
            break;
          case 'ScreenB':
              iconName = focused
              ? require('../assests/search_active.png') 
              : require('../assests/search.png');
              break;
          case 'ScreenC':
              iconName = focused
              ? require('../assests/bell_active.png')
              : require('../assests/bell.png')
              break;
    
        }  

        return <Image
                  source={iconName}
                  style={{ width: 85, height: 85 }}
                />
      },
    })}
    
    tabBarOptions={{
      activeTintColor:"tomato",
      inactiveTintColor:"gray",
      showLabel: false
    }} initialRouteName="ScreenA" >
      
      <Tab.Screen name='ScreenA' component={ScreenA} />
      <Tab.Screen name='ScreenB' component={ScreenB} />
      <Tab.Screen name='ScreenC' component={ScreenC} />
    </Tab.Navigator>
  )
}