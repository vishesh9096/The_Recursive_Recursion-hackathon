import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowLeftCircleIcon, HeartIcon, MagnifyingGlassCircleIcon, ShareIcon, ShoppingBagIcon, StarIcon } from 'react-native-heroicons/solid'
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';

const ProductScreen = () => {
  const basketTotal = useSelector(selectBasketTotal)

  const dispatch  = useDispatch();
  const items = useSelector(selectBasketItems);
  const [name,setName] = useState("");
  const [price, setprice] = useState(0);
  const [ig,setig]= useState("");
  const [brand,setbrand] = useState("");
  const [disc,setdisc] = useState();
  
  const additem=() =>{
    dispatch(addToBasket({price,name,brand,ig,disc}));
    console.log(items);
  }

  const removeitem= () =>{
    if(!items.length > 0) return;
    dispatch(removeFromBasket(name))
  }
  
  

  const route = useRoute();
  const [item,setItem] = useState([]);
  
  let headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

}
useEffect(() => {
  fetchData(),
  setprice(route.params.MPR);
  setName(route.params.Name);
  setig(route.params.Image);
setbrand(route.params.Brand);
setdisc(route.params.Discount);
}, [])
const navigation = useNavigation();
  async function fetchData(){

    console.log("Fetching")
    axios
    .get("http://192.168.2.151:5500/Item",headers)

    //.get("http://192.168.0.155:5500/alljobs",headers)

    .then(function (response) {
        setItem(response.data);
        console.log(item.Tour[1].Image);
    })
    .catch(error => console.log(error));


    
}
  return (
    <SafeAreaView className="bg-white ">
        <ScrollView>
        <View className = "w-full h-96">
      <Image source = {{uri: `${route.params.Image}`}} className = "w-full h-full"/>
      <View className = "flex-row absolute px-2">
        <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
        <ArrowLeftCircleIcon color = "black" size={40}/>
        </TouchableOpacity>
        <MagnifyingGlassCircleIcon color = "black" size={40}/>
        <View className = "pl-64 flex-row">
        <HeartIcon color = "white" size = {40}/>
        <ShoppingBagIcon color = "black" size={40}/>
        </View>
      </View>
      </View>


      <View className = "pt-4 flex-row">
        <Text className = "text-lg px-2">{route.params.Name} </Text>
        <View className = "pt-2 pl-64">
        <ShareIcon  color = "black" size = {20}/>
        </View>
      </View>

      <View className = "px-2 flex-row gap-x-2 pt-2">
        <Text className = "text-2xl text-red-500 font-bold">-{route.params.Discount}%</Text>
        <Text className = "text-2xl font-bold">{route.params.MPR}</Text>
        <View className = "pt-2 pl-48 flex-row">
        <StarIcon color = "black" size = {16}/>
        <StarIcon color = "black" size = {16}/>
        <StarIcon color = "black" size = {16}/>
        <StarIcon color = "black" size = {16}/>
        </View>
      </View>

      <View className = "px-2 ">
        <Text className = "text-lg text-gray-300 textDecorationLine:'line-through'">MRP ₹ {route.params.MPR} Inclusive of all taxes</Text>
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

      
<View className = "pt-8 px-2">
<Text className = "text-gray-500 text-base">Description:</Text>
<Text className = "pt-2"> {route.params.Desc}</Text>

</View>


<View className = "px-2 pt-8">
    <Text className = "text-lg pb-2">Reviews:</Text>

<View className = "pt-4 rounded-md bg-white pb-2">
    <Text className = "px-2">It was my first order from this app... N It was supposed to be delivered before my birthday but ya it was delayed by 2 days which made me bit upset ....
         Although i was very contented when I got my order.. I loved the product.. 
        The fitting, color and material quality everything was just perfect 💯..</Text>
        <View className = "px-2 flex-row">
        
        <Text className = "text-gray-500 ">Komal Chaudhari | Jan 18 2023</Text>
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

            

            {

item.Tour && item.Tour.map(item=>{
return(
    <>
<TouchableOpacity 
onPress={()=>{navigation.navigate("Product",
{
    Name:item.Name,
    MPR:item.MRP,
    Category:item.Category,
    SubCategory:item.SubCategory,
    Discount:item.Discount,
    Brand:item.Brand,
    Stock:item.Stock,
    Desc:item.Desc,
    Image:item.Image,



    })
}}
className="pl-4">
<View className="bg-white flex-items-center rounded-2xl w-36 h-56">
                <View className = "pl-2 pt-2 pb-2">
                <Image source = {{uri: `${item.Image}`}} className = "h-32 w-32 rounded-md"/>
                </View>
            <Text className="font-bold text-sm text-center ">{item.Discount}% Discount</Text>
            <Text className="font-bold text-center text-sm"> {item.Name}</Text>
            </View>

</TouchableOpacity>
</>)

})
}
            

           
        </ScrollView>

<TouchableOpacity 
onPress={()=>{removeitem()}}><Text>ljdsf</Text></TouchableOpacity>
</ScrollView>
<View className="px-8 pb-8">
<TouchableOpacity
onPress={()=>{additem();
  alert("Added to Bag")
  navigation.navigate("Home")}}
className="w-full rounded-3xl absolute bottom-4 left-8 h-16 bg-red-300">
<Text className=" text-center text-2xl text-white font-bold pt-4">Add to Cart</Text>
</TouchableOpacity>
</View>

    </SafeAreaView>
  )
}

export default ProductScreen