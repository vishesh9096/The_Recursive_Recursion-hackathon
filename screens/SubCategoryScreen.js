import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronDownIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';

const SubCategoryScreen = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView >
        <Image source={{uri: "https://cdn.cliqueinc.com/posts/247533/what-to-wear-in-february-247533-1675168490288-main.700x0c.jpg"}} className = "w-full h-60"/>

        <View className = "flex-row px-2 gap-x-3">
  <TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/a/i/d/s-800-vel-women-trouser-foxter-original-imaghupydxpjvytd.jpeg?q=70"}} className = "h-44 w-44 rounded-lg"/>
        <View className = "absolute flex-row pt-6 px-2">
        <Text className = "font-medium text-black text-base">Trousers</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
  </TouchableOpacity>

<TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_lm6wOxJHfkDg9LH1sLBzjaIbtS953N2-8MF6SMu6c7xKQ9f_pTstHfQmZXvS1i_-9c0&usqp=CAU"}} className = "h-44 w-44 rounded-lg"/>
        <View className = "absolute flex-row pt-6 px-1">
        <Text className = "font-medium text-black text-base">Tops</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
</TouchableOpacity>
</View>

<View className = "flex-row px-2 gap-x-3">
  <TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://images.bewakoof.com/uploads/grid/app/Pastel-Color-Clothing-Ideas-for-summer-bewakoof-blog-7-1620022633.jpg"}} className = "h-44 w-44 rounded-lg"/>
        <View className = "absolute flex-row pt-6 px-2">
        <Text className = "font-medium text-black text-base">Bottom Wears</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
  </TouchableOpacity>

<TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://i.pinimg.com/736x/c5/22/0c/c5220c367d6efa5ad557f5e2285ad442.jpg"}} className = "h-44 w-44 rounded-lg"/>
        <View className = "absolute flex-row pt-6 px-1">
        <Text className = "font-medium text-black text-base">Traditional</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
</TouchableOpacity>
</View>


    </SafeAreaView>
  )
}

export default SubCategoryScreen