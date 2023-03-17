import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronDownIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const CategoriesScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView>
      <View className = "pt-8 bg-white">
      <Text className = "text-sm font-bold pl-4 text-gray-500 pb-4">Categories</Text>
      </View>

      <View className = "pt-2 px-2">
        <Image source = {{uri: "https://www.shutterstock.com/image-photo/portrait-attractive-lucky-amazed-cheerful-260nw-1938418636.jpg"}} className = "h-24 w-full rounded-xl"/>
      </View>



<View className = "flex-row px-2 gap-x-3">
  <TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://img.freepik.com/premium-vector/summer-sale-watercolor-pastel-banner-hand-painted-aquarelle-colorful-stains-paper_297030-2941.jpg?w=2000"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Sale</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
  </TouchableOpacity>

<TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://img.freepik.com/free-photo/happy-sexy-young-woman-vacation-wearing-straw-hat-sunglasses-laughing-smiling-standing-yellow-background_1258-87528.jpg?w=1060&t=st=1678963955~exp=1678964555~hmac=8bfad5b8b53488d15c0e6219192bf170ffd8b72128ae30bada316f862f0d1e3b"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Womens</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
</TouchableOpacity>

<TouchableOpacity
onPress={()=>{navigation.navigate("Men")}}
>
      <View className = "pt-4">
        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6n67RvaqKmUXrV3F_1kQtbI-o1Qt_Hqc923RaLSa_vlTnOcYu4NZImg1AszmX5zmKuw&usqp=CAU"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Mens</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
      </TouchableOpacity>  
  </View>




  <View className = "flex-row px-2 gap-x-3">
    <TouchableOpacity
    onPress={()=>{navigation.navigate("Kids")}}>
      <View className = "pt-4">
        <Image source={{uri: "https://img.freepik.com/free-photo/stylish-young-teen-girl-gray_155003-5250.jpg"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Kids</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
   </TouchableOpacity>

   <TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://img.freepik.com/premium-photo/juice-kitchen-blender-machine-pastel-blue-green-color-small-kitchen-electrical-appliances_576429-1099.jpg"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Electronics</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>{navigation.navigate("Footwear")}}
      >
      <View className = "pt-4">
        <Image source={{uri: "https://static.footshop.com/208171-full_product/40549.jpg"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Footwear</Text>
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
        <Image source={{uri: "https://thumbs.dreamstime.com/b/makeup-products-decorative-cosmetics-pink-roses-pink-background-flat-lay-top-view-copy-space-fashion-beauty-concept-169260365.jpg"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Beauty & Grooming</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://ak.picdn.net/shutterstock/videos/1064878081/thumb/5.jpg"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Teens</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://thumbs.dreamstime.com/b/paper-bag-groceries-wooden-table-against-blue-background-paper-bag-groceries-wooden-table-against-light-blue-157751360.jpg"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Groceries</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>  
      </TouchableOpacity>
  </View>



  <View className = "flex-row px-2 gap-x-3 pb-10">
  <TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://thumbs.dreamstime.com/b/makeup-products-decorative-cosmetics-pink-roses-pink-background-flat-lay-top-view-copy-space-fashion-beauty-concept-169260365.jpg"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Beauty & Grooming</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://ak.picdn.net/shutterstock/videos/1064878081/thumb/5.jpg"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Teens</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View className = "pt-4">
        <Image source={{uri: "https://thumbs.dreamstime.com/b/paper-bag-groceries-wooden-table-against-blue-background-paper-bag-groceries-wooden-table-against-light-blue-157751360.jpg"}} className = "h-40 w-32 rounded-lg"/>
        <View className = "absolute flex-row pt-4 px-1">
        <Text className = "font-medium text-black text-base">Groceries</Text>
        <View className = "pt-2">
        <ChevronDownIcon color = "black" size={15}/>
        </View>
        </View>
      </View>  
      </TouchableOpacity>
  </View>

 
  </ScrollView>

  
    </SafeAreaView>
  )
}

export default CategoriesScreen