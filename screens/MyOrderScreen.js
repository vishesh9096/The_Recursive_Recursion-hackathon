import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const MyOrderScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <View className ="pt-4 px-2">
      <Text className ="text-xl font-bold">My Orders </Text>
      </View>

<View className = "pt-4 pb-4">
      <Image source={{uri: "https://freepixel-prod.s3.amazonaws.com/thumb/free-vector-graphic-spring-sale-header-or-banner-design-with-get-extra-40-off-and-yellow-flowers-on-pastel-turquoise-bac-th-1101184655.jpg"}} className = "w-full h-28"/>
      </View>

      <View className = "bg-white w-full h-44 px-6 rounded-3xl">
        <View className = "flex-row">
        <View className = "pt-6">
        <Image source = {{uri: "https://rukminim1.flixcart.com/image/832/832/ktizdzk0/shoe/y/b/x/7-ws-9310-tying-grey-original-imag6ut3hzm2zyqm.jpeg?q=70"}} className = "h-32 w-32 rounded-sm"/>
        <Text className = "text-base font-bold text-gray-500 px-4">Nike</Text>
        </View>
        </View>
       
       <View>
        <Text className = "text-xs font-bold text-gray-400 px-4">Gray Nike Shoes</Text>
        </View>
      </View>


      <View className = "pt-8">
        <Text> Track you Order</Text>
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default MyOrderScreen