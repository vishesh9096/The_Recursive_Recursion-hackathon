import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { UserIcon } from 'react-native-heroicons/solid'

const PrevOrdersScreen = () => {
  return (
    <SafeAreaView>

        <View className = "pt-4 px-2">
            <Text className = "text-lg font-bold">ORDERS</Text>
        </View>

        <View className = "pt-2 px-2">
            <Text className = "text-XS text-gray-500">Showing orders from LAST SIX MONTHS</Text>
        </View>
       
       <View className="gap-y-2 felx pt-4 items-center">
    
    <TouchableOpacity >
     <View className="bg-white rounded-2xl w-96 h-28 px-4 pt-2">
      <View className = "flex-row">
        <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIiQO4H7ZKMm0uIb2z91RUin6c1B1DXFKgeHY0pgzlk2YddCg2X3heQZETz_GL1cpYBA&usqp=CAU"}} className = "h-24 w-24 rounded-sm"/>
          <Text className="font-bold text-md text-center pt-10 px-2">Cancelled</Text>
        </View>
        <Text className = "text-xs text-gray-500">Order canceloled on 14th March 2023</Text>
       </View>
       </TouchableOpacity>

         <TouchableOpacity className = "pt-4">
     <View className="bg-white rounded-2xl w-96 h-28 px-4 pt-2">
      <View className = "flex-row">
        <Image source = {{uri: "https://getketchadmin.getketch.com/product/8905040987446/660/HLJK000548_3.jpg"}} className = "h-24 w-24 rounded-sm"/>
          <Text className="font-bold text-md text-center pt-10 px-2">Delivered</Text>
        </View>
        <Text className = "text-xs text-gray-500">Order delivered 10th January 2023</Text>
       </View>
       </TouchableOpacity>

         <TouchableOpacity className = "pt-4">
     <View className="bg-white rounded-2xl w-96 h-28 px-4 pt-2">
      <View className = "flex-row">
        <Image source = {{uri: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17253282/2022/12/2/47f24ccd-35ce-4f8a-90bc-75c3978f03661669976600647-Moda-Rapido-Women-Yellow-Bootcut-Stretchable-Jeans-312166997-1.jpg"}} className = "h-24 w-24 rounded-sm"/>
          <Text className="font-bold text-md text-center pt-10 px-2">Delivered</Text>
        </View>
        <Text className = " text-xs text-gray-500">Order delivered on 29th Noovember 2023</Text>
       </View>
       </TouchableOpacity>

       
       </View>
    

    </SafeAreaView>
  )
}

export default PrevOrdersScreen