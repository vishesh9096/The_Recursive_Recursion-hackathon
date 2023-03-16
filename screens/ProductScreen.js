import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftCircleIcon, HeartIcon, MagnifyingGlassCircleIcon, ShareIcon, ShoppingBagIcon, StarIcon } from 'react-native-heroicons/solid'

const ProductScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <View className = "w-full h-96">
      <Image source = {{uri: "https://img.ltwebstatic.com/images3_pi/2023/01/16/16738406500dc008422d1b9685949b81dfa634bd8f_thumbnail_600x.webp"}} className = "w-full h-full"/>
      <View className = "flex-row absolute px-2">
        <ArrowLeftCircleIcon color = "black" size={40}/>
        <MagnifyingGlassCircleIcon color = "black" size={40}/>
        <View className = "pl-64 flex-row">
        <HeartIcon color = "white" size = {40}/>
        <ShoppingBagIcon color = "black" size={40}/>
        </View>
      </View>
      </View>


      <View className = "pt-4 flex-row">
        <Text className = "text-lg px-2">Flared Jeans</Text>
        <View className = "pt-2 pl-64">
        <ShareIcon  color = "black" size = {20}/>
        </View>
      </View>

      <View className = "px-2 flex-row gap-x-2 pt-2">
        <Text className = "text-2xl text-red-500 font-bold">-20%</Text>
        <Text className = "text-2xl font-bold">₹2,599</Text>
        <View className = "pt-2 pl-48 flex-row">
        <StarIcon color = "black" size = {16}/>
        <StarIcon color = "black" size = {16}/>
        <StarIcon color = "black" size = {16}/>
        <StarIcon color = "black" size = {16}/>
        </View>
      </View>

      <View className = "px-2 ">
        <Text className = "text-lg text-gray-300 textDecorationLine:'line-through'">MRP ₹3,299 Inclusive of all taxes</Text>
      </View>


      <View className = "px-2 pt-6">
        <View className = "flex-row">
        <Text className = "text-gray-500 text-base">Color: </Text>
        <Text className = "text-black text-base"> Black </Text>
        </View>
        <View className = "flex-row pt-4">
        <Image source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"}} className = "h-8 w-8 rounded-full"/>
</View>
      </View>

      <View className = "px-2  pt-8 ">
        <Text className = "text-gray-500 text-base">Size: </Text>
       
        <View className = "flex-row pt-4 ">
        <TouchableOpacity>
            <View className = "px-2">
            <View className = "h-10 w-14 border rounded-md items-center ">
                <Text className = "pt-2"> S </Text>
            </View>
            </View>
            </TouchableOpacity>

<TouchableOpacity>
            <View className = "px-2">
            <View className = "h-10 w-14 border rounded-md items-center">
                <Text className = "pt-2"> M </Text>
            </View>
            </View>
            </TouchableOpacity>

<TouchableOpacity>
           <View className = "px-2">
            <View className = "h-10 w-14 border rounded-md items-center">
                <Text className = "pt-2"> L </Text>
            </View>
            </View>
            </TouchableOpacity>
        </View>
      </View>

<View className = "pt-8 px-2">
<Text className = "text-gray-500 text-base">Description:</Text>
<Text className = "pt-2"> 100% Original Products </Text>
<Text className = "pt-2"> Pay on delivery might be available </Text>
<Text className = "pt-2"> Easy 14 days returns and exchanges</Text>
<Text className = "pt-2"> Try & Buy might be available</Text>
</View>


<View className = "px-2 pt-8">
    <Text className = "text-lg pb-2">Reviews:</Text>

<View className = "pt-4 rounded-md bg-white pb-2">
    <Text className = "px-2">It was my first order from this app... N It was supposed to be delivered before my birthday but ya it was delayed by 2 days which made me bit upset ....
         Although i was very contented when I got my order.. I loved the product.. 
        The fitting, color and material quality everything was just perfect 💯..</Text>
        <View className = "px-2 flex-row">
        <Image source= {{uri: "https://img1.cgtrader.com/items/3637785/006981a86e/large/pair-of-folded-blue-jeans-for-wardrobe-3d-model-max-obj-fbx-c4d-stl-blend.jpg"}}
        className = "h-20 w-20 rounded-md"/>
        <Text className = "text-gray-500 pl-8 pt-16">Komal Chaudhari | Jan 18 2023</Text>
        </View>
</View>

<View className = "pt-4">
<View className = "pt-4 rounded-md bg-white pb-2">
    <Text className = "px-2">I shopped first time from the Myntra and I got this jeans Perfect, as expected... 3rd picture is 
    how this jeans colour exactly looks and it is as same as in the picture. So guys if you're loving this jeans of this model , so don't think too much.. Just go for it!!! 
    And the size is also perfect, I have genuinely no problem. .. And yesss Thankyou Myntra for this amazing sale ❤</Text>
        <View className = "px-2 pt-4  flex-row">
        <Image source= {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79fvQezFDegKVd-ZcBh2bbfe2s7MWCeZkKg&usqp=CAU"}}
        className = "h-20 w-20 rounded-md"/>
        <Text className = "text-gray-500 pl-10 pt-16">Riya Agrawal | Feb 14 2023</Text>
        </View>
</View>
</View>
</View>

<View className = "px-2 pt-4">
    <Text className = "text-lg">You may also like:</Text>
</View>

<ScrollView contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,}}
        horizontal
        showsHorizontalScrollIndicator={true}
        className="gap-x-2"
        >
         
            <View className="bg-white flex-items-center rounded-2xl w-36 h-48">
                <View className = "pl-2 pt-2 pb-2">
                <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9HfcLvbPJZ6YoGQ_Iabt-vJ_lb-aLGEc1vjSZfxHI__-Zgpz776iNjxSECOjdNjayvo&usqp=CAU"}} className = "h-32 w-32 rounded-md"/>
                </View>
            <Text className="font-bold text-sm text-center ">10% Discount</Text>
            <Text className="font-bold text-center text-sm"> Flared Jeans-1</Text>
            </View>

            <View className="bg-white flex-items-center rounded-2xl w-36 h-48">
                <View className = "pl-2 pt-2 pb-2">
                <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9HfcLvbPJZ6YoGQ_Iabt-vJ_lb-aLGEc1vjSZfxHI__-Zgpz776iNjxSECOjdNjayvo&usqp=CAU"}} className = "h-32 w-32 rounded-md"/>
                </View>
            <Text className="font-bold text-sm text-center ">10% Discount</Text>
            <Text className="font-bold text-center text-sm"> Flared Jeans-1</Text>
            </View>

            <View className="bg-white flex-items-center rounded-2xl w-36 h-48">
                <View className = "pl-2 pt-2 pb-2">
                <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9HfcLvbPJZ6YoGQ_Iabt-vJ_lb-aLGEc1vjSZfxHI__-Zgpz776iNjxSECOjdNjayvo&usqp=CAU"}} className = "h-32 w-32 rounded-md"/>
                </View>
            <Text className="font-bold text-sm text-center ">10% Discount</Text>
            <Text className="font-bold text-center text-sm"> Flared Jeans-1</Text>
            </View>

            <View className="bg-white flex-items-center rounded-2xl w-36 h-48">
                <View className = "pl-2 pt-2 pb-2">
                <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9HfcLvbPJZ6YoGQ_Iabt-vJ_lb-aLGEc1vjSZfxHI__-Zgpz776iNjxSECOjdNjayvo&usqp=CAU"}} className = "h-32 w-32 rounded-md"/>
                </View>
            <Text className="font-bold text-sm text-center ">10% Discount</Text>
            <Text className="font-bold text-center text-sm"> Flared Jeans-1</Text>
            </View>

           
        </ScrollView>

</ScrollView>
    </SafeAreaView>
  )
}

export default ProductScreen