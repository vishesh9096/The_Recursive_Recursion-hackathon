import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { UserIcon } from 'react-native-heroicons/outline'
import { ChevronRightIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View className = "bg-white pb-2">
      <Text className = "font-bold text-lg pt-14 px-2">My Account</Text>
      </View>

<View className = "px-6 pt-8 flex-row pb-4">
      <View className = "bg-black h-24 w-24 rounded-full">
        <View className = "pt-6 items-center">
        <UserIcon color = "white" size={40}/>
        </View>
      </View>
      <View className = "pt-6 px-6">
        <Text className = "text-lg text-gray-600">Vishesh</Text>
        <Text className = "text-lg text-gray-600">gathavishesh@gmail.com</Text>
      </View>
      </View>

<View className = "pt-4">
      <View className = "bg-white pt-6 pb-6 px-4 flex-row">
        <Text className = " text-base">Customer Care</Text>
        <View className = "pl-64">
        <ChevronRightIcon color = "black" size={24}/>
        </View>
      </View>
      </View>

      <View className = "pt-1">
      <View className = "bg-white pt-6 pb-6 px-4 flex-row">
        <Text className = " text-base">Customer Care</Text>
        <View className = "pl-64">
        <ChevronRightIcon color = "black" size={24}/>
        </View>
      </View>
      </View>

      <View className = "pt-1">
      <View className = "bg-white pt-6 pb-6 px-4 flex-row">
        <Text className = " text-base">Invite Friends   </Text>
        <View className = "px-64">
        <ChevronRightIcon color = "black" size={24}/>
        </View>
      </View>
      </View>

      <View className = "pt-1">
      <View className = "bg-white pt-6 pb-6 px-4 flex-row">
        <Text className = " text-base">Cupons             </Text>
        <View className = "pl-64">
        <ChevronRightIcon color = "black" size={24}/>
        </View>
      </View>
      </View>

      <View className = "pt-4 pb-4">
      <View className = "bg-white pt-6 pb-6 px-4 flex-row">
        <Text className = " text-base">FAQs                 </Text>
        <View className = "pl-64">
        <ChevronRightIcon color = "black" size={24}/>
        </View>
      </View>
      </View>

      <View className = "">
      <TouchableOpacity
      onPress={()=>{navigation.navigate("Login")}}
      className = "bg-white pt-6 pb-6 px-4 flex-row">
        <Text className = " text-base text-red-700">LOGOUT           </Text>
        <View className = "pl-64">
        <ChevronRightIcon color = "black" size={24}/>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen