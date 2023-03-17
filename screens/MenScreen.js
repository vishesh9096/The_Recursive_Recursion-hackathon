import { View, Text, Dimensions, Image, SafeAreaView , TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { BellIcon, HeartIcon, ListBulletIcon, MagnifyingGlassIcon, StarIcon } from 'react-native-heroicons/outline';
import {  StarIcon as StarIconOutline } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const MenScreen  = () => {
    const [item,setItem] = useState([]);

    async function fetchData(){

        console.log("Fetching")
        axios
        .get("http://192.168.2.151:5500/Men",headers)
    
        //.get("http://192.168.0.155:5500/alljobs",headers)
    
        .then(function (response) {
            setItem(response.data);
            console.log(item.Tour[1].Image);
        })
        .catch(error => console.log(error));
    }
    
    let headers = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
    }
    useEffect(() => {
        fetchData();

    }, [])

const navigation = useNavigation();
    
  return (


    <SafeAreaView>
        <TouchableOpacity
        >
        <Text className="text-2xl text-center"> Mens</Text>
        </TouchableOpacity>
        <ScrollView className="pt-4 ">
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
className="  flex-row  items-center">
<View className="h-60 w-48 bg-white rounded-xl">
    <View>
    <Image source={{uri:`${item.Image}`}} className="h-full w-full "/>
    </View>
</View>
<View className="w-52 h-40 ">
    <Text className="text-gray-400">{item.Category}</Text>
    <Text className="pt-1  text-lg">
{item.Name} </Text>
<Text className=" text-2xl font-bold pt-1"> ₹ {item.MRP} </Text>
    <View className=" h-6 flex-row items-center">
        <Text className=" text-center text-white font-bold p-1 bg-pink-800 ">Upto {item.Discount}% OFF</Text>
    </View>
</View>

</TouchableOpacity>
</>)

})
}
</ScrollView>
    </SafeAreaView>
  )
}

export default MenScreen