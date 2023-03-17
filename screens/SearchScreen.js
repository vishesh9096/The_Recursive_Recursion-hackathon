import { View, Text, SafeAreaView, TextInput, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
    const [items,setItem] = useState([]);
    const [text, setText] = useState('')

    let headers = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
    }
    async function fetchData(){

        console.log("Fetching")
        axios
        .get("http://192.168.2.151:5500/raw",headers)
    
        //.get("http://192.168.0.155:5500/alljobs",headers)
    
        .then(function (response) {
            setItem(response.data);
            console.log(items.Tour[1].Image);

        })
        .catch(error => console.log(error));
    }
    
    useEffect(() => {
        fetchData();

    }, [])

const navigation = useNavigation();





  return (
    <SafeAreaView>
        <Text className="text-center  text-xl pb-2">Search</Text>
        <View className="px-4 pb-2 ">
        <TextInput 
        value={text}
        onChangeText={(text) => {
            setText(text)
          }}
        placeholder='Enter user id' className="text-2xl bg-white pl-2 border-solid border border-[#0A2647] w-full h-12 rounded-xl"  maxLength={10}/>

</View>
<View className="pt-4">
    <FlatList
    data={items.Tour}
    renderItem={({item}) =>{
        if(text=== ""){
            return(
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
                className="bg-white flex-row items-center h-56">
                    <View className="h-56 w-48">
                        <Image source={{uri:`${item.Image}`}}
                        className="h-full w-full"
                        />
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
            )
        }

        if(item.Name.toLowerCase().includes(text.toLowerCase())|| item.Brand.toLowerCase().includes(text.toLocaleLowerCase())
        
        )
        {
            return(
                <TouchableOpacity onPress={()=>{navigation.navigate("Product",
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
                
                className="bg-white flex-row items-center h-56">
                    <View className="h-56 w-48">
                        <Image source={{uri:`${item.Image}`}}
                        className="h-full w-full"
                        />
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
            )
        }
    }
}
    />

</View>

    </SafeAreaView>
  )
}

export default SearchScreen