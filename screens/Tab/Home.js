import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingsScreen from '../SettingsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeDash from '../HomeDash';

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,

      headerTransparent:true,
      headerTintColor: 'black',
      headerTitle:""
      
    
    }}
     >
    <Drawer.Screen name="Home" component={HomeDash}  />

  </Drawer.Navigator>
  )
}

export default Home