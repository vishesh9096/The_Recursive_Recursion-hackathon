import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ArrowLeftIcon, CheckIcon, HeartIcon, TruckIcon } from 'react-native-heroicons/outline'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)
    useEffect(() => {
        console.log(items)
      
      }, [])
    
    const removeitem= (name) =>{
        if(!items.length > 0) return;
        dispatch(removeFromBasket(name))
      }
    const items = useSelector(selectBasketItems);


  return (
    <View className=" ">

        <View className="flex-row items-center pb-3 pt-14 bg-white justify-between px-4">
            <View className="flex-row items-center gap-x-3 pt-2">
            <View>
            <ArrowLeftIcon size={25} color={"black"}/>
            </View>
            <Text className="font-bold text-xl">SHOPPING BAG</Text>
            </View>
            <View>
                <HeartIcon size={25} color={"black"}/>
            </View>
        </View>

        <View className="pt-2 pb-4">
        <View className="bg-white px-4 flex-row items-center justify-between pb-2 pt-2">
            <View>
            <Text className="">Deliver to Vishesh, 401202</Text>
            <Text className="text-gray-500">A-303 Juhu, Andheri</Text>
            </View>
            <TouchableOpacity>
                <Text className="text-[#fb5aaa] font-bold">CHANGE</Text>
            </TouchableOpacity>
        </View>
<View className="pt-4"></View>
        <View className="flex-row items-center px-4 py-3 bg-white">
            <TruckIcon size={25} color={"#fb5aaa"}/>
            <Text className="text-lg font-bold">   Yay no convenince fee on this order</Text>
        </View>

        </View>
<Text className="text-2xl pl-4 font-bold"> Your Items</Text>
        <ScrollView className="gap-y-8 pt-4">

           

{

    items && items.map(items=>{
        return(
            <>
             <View className="h-52 pt-4 bg-white  w-full px-4 flex-row items-center">
                <View>
                <Image source={{uri:`${items.ig}`}}
                className="h-full w-32"/>
                </View>
                <View className="pl-4 w-64">

                    <Text className="text-xl font-bold">{items.brand}</Text>
                    <Text className="text-lg">{items.name}</Text>
                    <View className="flex-row items-baseline">
                    <Text className="text-lg">₹{items.price}</Text>
                    <Text className="pl-4 text-[#fb5aaa] pb-1">{items.disc}% off</Text>
                    </View>
                    <Text className="text-gray-500 pt-2">14 Days Return Available</Text>
                    <View className="flex-row items-center pt-1 pb-1">
                        <CheckIcon size={20} color={"green"}/>
                        <Text className="pl-2">Delivery By tomorrow 6pm</Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=>{removeitem(items.name)}}
                    className="bg-gray-200 h-5 w-16">
                       <Text className="text-center pt-0.5 text-red-600">REMOVE</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
        )
    })





}

<View className="px-4 bg-white pt-4 gap-y-2">
    <Text className="font-bold">PRICE DETAILS ({items.length} items)</Text>
    <View className="flex-row justify-between">
        <Text className="text-gray-500">Total MRP</Text>
        <Text className="text-gray-500">₹{basketTotal}</Text>
    </View>
    <View className="flex-row justify-between">
        <Text className="text-gray-500">Convenince Fee</Text>
        <Text className="text-green-500">FREE</Text>
    </View>
    <View className="flex-row justify-between">
        <Text className="text-gray-500">Total MRP</Text>
        <Text className="text-gray-500">₹{basketTotal}</Text>
    </View>

    <View className="flex-row justify-between">
        <Text className="text-lg">Total AMOUNT</Text>
        <Text className="text-lg">₹{basketTotal}</Text>
    </View>

</View>


            
<TouchableOpacity
onPress={()=>{navigation.navigate("Home")}}
className="px-8 w-full">
< View className="w-full h-12 bg-[#fb5aaa] rounded-xl ">
<Text className='text-center text-2xl pt-2 font-bold text-white'>PLACE ORDER</Text>
</View>
</TouchableOpacity>
<View className="h-80 "></View>
        </ScrollView>





    </View>
  )
}

export default CartScreen