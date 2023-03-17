import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { UserIcon } from 'react-native-heroicons/solid'

const PrevOrdersScreen = () => {
  return (
    <SafeAreaView>

        <View className = "pt-4 px-8">
            <Text className = "text-lg font-bold">YOUR ORDERS</Text>
        </View>

        <View className = "pt-2 px-8">
            <Text className = "text-XS text-gray-500">Showing orders from LAST SIX MONTHS</Text>
        </View>
       
       <View className="gap-y-2 felx pt-4 items-center">
    
    <TouchableOpacity >
     <View className="bg-white rounded-2xl w-96 h-28 px-4 pt-2">
      <View className = "flex-row items-center">
        <View>
        <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIiQO4H7ZKMm0uIb2z91RUin6c1B1DXFKgeHY0pgzlk2YddCg2X3heQZETz_GL1cpYBA&usqp=CAU"}} className = "h-24 w-24 rounded-sm"/>
        </View>
        <View className="flex items-start pl-2">
          <Text className="font-bold text-md text-center  ">Cancelled</Text>
        <Text className = "text-xs text-gray-500">Order canceloled on 14th March 2023</Text>
        <Text className = "text-xs text-gray-500">Cash on delivery</Text>
          </View>
        </View>
       </View>
       </TouchableOpacity>

       <TouchableOpacity >
     <View className="bg-white rounded-2xl w-96 h-28 px-4 pt-2">
      <View className = "flex-row items-center">
        <View>
        <Image source = {{uri: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17253282/2022/12/2/47f24ccd-35ce-4f8a-90bc-75c3978f03661669976600647-Moda-Rapido-Women-Yellow-Bootcut-Stretchable-Jeans-312166997-1.jpg"}} className = "h-24 w-24 rounded-sm"/>
        </View>
        <View className="flex items-start pl-2">
          <Text className="font-bold text-md text-center  ">Delivered</Text>
        <Text className = "text-xs text-gray-500">Order delivered on 8th March 2023</Text>
        <Text className = "text-xs text-gray-500">Cash on delivery</Text>
          </View>
        </View>
       </View>
       </TouchableOpacity>

       <TouchableOpacity >
     <View className="bg-white rounded-2xl w-96 h-28 px-4 pt-2">
      <View className = "flex-row items-center">
        <View>
        <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIiQO4H7ZKMm0uIb2z91RUin6c1B1DXFKgeHY0pgzlk2YddCg2X3heQZETz_GL1cpYBA&usqp=CAU"}} className = "h-24 w-24 rounded-sm"/>
        </View>
        <View className="flex items-start pl-2">
          <Text className="font-bold text-md text-center  ">Delivered</Text>
        <Text className = "text-xs text-gray-500">Order delivered on 2nd March 2023</Text>
        <Text className = "text-xs text-gray-500">Cash on delivery</Text>
          </View>
        </View>
       </View>
       </TouchableOpacity>

         

        

       
       </View>
    

    </SafeAreaView>
  )
}

export default PrevOrdersScreen