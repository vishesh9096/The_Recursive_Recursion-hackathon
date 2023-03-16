import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions, Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../SettingsScreen';
import Home from './Home';
import { HomeIcon , Squares2X2Icon, UserIcon, ShoppingBagIcon} from "react-native-heroicons/solid";
import CategoriesScreen from '../CategoriesScreen';
import ProfileScreen from '../ProfileScreen';
import CartScreen from '../CartScreen';



const Tab = createBottomTabNavigator()


const HomeScreen = () => {
  
  return (
    <Tab.Navigator initialRouteName='HomeTab' screenOptions={{headerShown : false , tabBarStyle:{paddingTop:10 ,height:80 ,paddingBottom:20}  }}  >
      <Tab.Screen name="Hometab" component={Home}
        
      options={{ title:"Home", tabBarActiveTintColor:"#DE5D83",tabBarLabelStyle:{fontSize:15},
      
      tabBarIcon:({size,color})=>(
        <HomeIcon size={30} color={color}/>
      )
      
    }}
    
    />

<Tab.Screen name="Category" component={CategoriesScreen}
        options={{ title:"Category", tabBarActiveTintColor:"green",tabBarLabelStyle:{fontSize:15},
        tabBarIcon:({size,color})=>(
          <Squares2X2Icon size={30} color={color}/>
        )
      }}
      />


      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{ title:"Profile", tabBarActiveTintColor:"green",tabBarLabelStyle:{fontSize:15},
        tabBarIcon:({size,color})=>(
          <UserIcon size={30} color={color}/>
        )
      }}
      />
      


      <Tab.Screen name="Bag" component={CartScreen}
        options={{ title:"Bag", tabBarActiveTintColor:"green",tabBarLabelStyle:{fontSize:15},
        tabBarIcon:({size,color})=>(
          <ShoppingBagIcon size={30} color={color}/>
        )
      }}
      />




    </Tab.Navigator>
  )
}

export default HomeScreen