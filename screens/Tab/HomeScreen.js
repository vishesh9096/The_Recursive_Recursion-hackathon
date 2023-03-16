import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../SettingsScreen';
import Home from './Home';
import { HomeIcon } from "react-native-heroicons/solid";


const Tab = createBottomTabNavigator()


const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown : false}}>
      <Tab.Screen name="Home" component={Home}
        
      options={{ title:"Home", tabBarActiveTintColor:"green",tabBarLabelStyle:{fontSize:15},
      
      tabBarIcon:({size,color})=>(
        <HomeIcon size={30} color={color}/>
      )
      
    }}
    
    />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default HomeScreen