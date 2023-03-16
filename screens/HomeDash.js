import { View, Text, Dimensions, Image, SafeAreaView , TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { BellIcon, HeartIcon, ListBulletIcon, MagnifyingGlassIcon, StarIcon } from 'react-native-heroicons/outline';
import {  StarIcon as StarIconOutline } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const HomeDash = () => {

    const getValues = async() =>{
        const id = await AsyncStorage.getItem("token");
        console.log(id);
      }
    const [deals,setdeals] = useState([]);
    const [pdt,setpdt] = useState([]);

    let headers = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
    }
    const navigation = useNavigation();

     async function fetchData(){
        console.log("Fetching")
        axios
        .get("http://192.168.2.151:5500/Raw",headers)
    
        //.get("http://192.168.0.155:5500/alljobs",headers)
    
        .then(function (response) {
            setdeals(response.data);
            console.log(deals.Tour[1].Image);
        })
        .catch(error => console.log(error));


        
    }
    async function getData(){
        console.log("Fetching")
        axios
        .get("http://192.168.2.151:5500/Pdt",headers)
    
        //.get("http://192.168.0.155:5500/alljobs",headers)
    
        .then(function (response) {
            setpdt(response.data);
            console.log(pdt.Tour);
        })
        .catch(error => console.log(error));


        
    }



    const width = Dimensions.get('window').width;
    const data = [
        {
          title: "Aenean leo",
          body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
          imgUrl: "https://img101.urbanic.com/v1/35ae3c3f20ea47389fd5d8236c3ec032.webp",
        },
        {
          title: "In turpis",
          body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
          imgUrl: "https://img101.urbanic.com/v1/3226d0e71b76412bafdb48c73f0c053b.webp",
        },
        {
          title: "Lorem Ipsum",
          body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
          imgUrl: "https://img101.urbanic.com/v1/cbd5612409f24f0e8fba6f84eac002c5.webp",
        },
        {
          title: "Lorem Ipsum",
          body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
          imgUrl: "https://rukminim1.flixcart.com/image/400/400/xif0q/jacket/6/r/u/-original-imaggdc2xxhqpzq9.jpeg?q=70",
        },
      ];

      useEffect(() => {
        fetchData();
        getData();
    }, [])




  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex-row items-center justify-between gap-x-4 px-5 border-b border-gray-400 pb-2">
        <View>
            <TouchableOpacity>
                <ListBulletIcon color={"black"} size={30} />
            </TouchableOpacity>

        </View>

        <View className="flex-row items-center  justify-end   gap-x-4" >
            <TouchableOpacity> 
                <MagnifyingGlassIcon color={"black"} size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
                <BellIcon color={"black"} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity><HeartIcon color={"black"} size={30}/></TouchableOpacity>
        </View>
        </View>
        <ScrollView className=" px-2 bg-white">


        <ScrollView horizontal={true} className="pt-2 pb-28 max-h-32 px-4 gap-x-6">
            <TouchableOpacity
            onPress={()=>{getValues()}}
            className="h-20 w-20 rounded-full bg-red-300">
                <Image 
                className="h-20 w-20 rounded-full"
                source={{uri:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man_158538-5030.jpg?w=2000"}} />
                <Text className="text-center text-xl  text-gray-500 ">MEN</Text>
            </TouchableOpacity>
            <TouchableOpacity className="h-20 w-20 rounded-full bg-red-300">
                <Image 
                className="h-20 w-20 rounded-full"
                source={{uri:"https://stylesatlife.com/wp-content/uploads/2021/06/Nidhi-Sunil.jpg"}} />
                <Text className="text-center text-xl  text-gray-500 ">WOMEN</Text>
            </TouchableOpacity>

            <TouchableOpacity className="h-20 w-20 rounded-full bg-red-300">
                <Image 
                className="h-20 w-20 rounded-full"
                source={{uri:"https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2015/03/iStock-109724691-e1523048812150.jpg"}} />
                <Text className="text-center text-xl  text-gray-500 ">KIDS</Text>
            </TouchableOpacity>

            <TouchableOpacity className="h-20 w-20 rounded-full bg-red-300">
                <Image 
                className="h-20 w-20 rounded-full"
                source={{uri:"https://5.imimg.com/data5/IOS/Default/2021/6/LB/WF/HS/17552598/product-jpeg-500x500.png"}} />
                <Text className="text-center text-xl  text-gray-500 ">SHOES</Text>
            </TouchableOpacity>

            <TouchableOpacity className="h-20 w-20 rounded-full bg-red-300">
                <Image 
                className="h-20 w-20 rounded-full"
                source={{uri:"https://www.greenqueen.com.hk/wp-content/uploads/2021/11/8-Animal-Ingredients-Secretly-Lurking-In-Beauty-Products.jpg"}} />
                <Text className="text-center text-xl  text-gray-500 ">BEAUTY</Text>
            </TouchableOpacity>
        </ScrollView>

            <Carousel
                loop
                width={width}
                height={500}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={2000}
                renderItem={({  index }) => (
                    <View className="">

                        <Image source={{uri:`${data[index].imgUrl}`   }} className="w-full h-full"/>
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                           {data[index].title}
                        </Text>
                    </View>
                )}
            />

<View className="flex-row items-center px-4 pt-8 gap-x-4">
    <View className="h-48 w-48 rounded-2xl ">
        <ImageBackground 
        className="h-full w-full rounded-2xl"
        source={{uri:"https://i.pinimg.com/564x/0d/d8/62/0dd862fd19bfd55a4d4aa2975ac7fd84.jpg"}}/>
        <View className="flex items-center  absolute pl-2 pt-8">
        <Text className="text-xl font-semibold ">Modern Appliances</Text>
        <Text className="text-2xl font-semibold pt-4">START AT </Text>
        <Text className="text-4xl font-bold pt-2">₹999</Text>
        </View>

    </View>

    <View className="h-48 w-48 rounded-2xl flex items-center ">
        <ImageBackground 
        className="h-full w-full rounded-2xl"
        source={{uri:"https://i.pinimg.com/564x/0d/d8/62/0dd862fd19bfd55a4d4aa2975ac7fd84.jpg"}}/>
        <View className="flex items-center  absolute pl-2 pt-8">
        <Text className="text-xl font-semibold ">TOP BRANDS</Text>
        <Text className="text-2xl font-semibold pt-4">START AT </Text>
        <Text className="text-4xl font-bold pt-2">₹499</Text>
        </View>

    </View>

    

</View>

<View className="w-full pt-4 h-32  bg-white">
    <TouchableOpacity>
    <Image source={require('../assets/Banner.png')} className="w-full h-28"/>
        
    </TouchableOpacity>
</View>
<View className=" bg-[#f8f8f6] pt-6 ">
    <Text className="px-4 text-2xl font-bold">Get Latest Technology at Best Price</Text>
    <TouchableOpacity className="px-4 pt-2">
    <Image source={require("../assets/Ipad.jpg")} className="h-60 w-full"/>
    </TouchableOpacity>
</View>



<View className=" bg-[#f8f8f6] pt-6 ">
    <Text className="px-4 text-2xl font-bold">Deals Of the Day</Text>
    <ScrollView horizontal={true} className="gap-x-3 pb-40  "> 
    {

deals.Tour && deals.Tour.map(deals=>{
return(
    <>
<TouchableOpacity 
onPress={()=>{navigation.navigate("Product",
{paramKey:data._id,
    Name:deals.Name,
    MPR:deals.MRP,
    Category:deals.Category,
    SubCategory:deals.SubCategory,
    Discount:deals.Discount,
    Brand:deals.Brand,
    Stock:deals.Stock,
    Desc:deals.Desc,
    Image:deals.Image,



    })
}}
className="pl-4">
<View className="h-60 w-48 bg-white rounded-xl">
    <Image source={{uri:`${deals.Image}`}} className="h-full w-full "/>
    <View className="pt-2"></View>
        <Text className=" text-2xl font-bold "> ₹ {deals.MRP} </Text>
    <View className=" h-6 flex-row items-center">
        <Text className=" text-center text-white font-bold p-1 bg-pink-800 ">Upto {deals.Discount}% OFF</Text>
    </View>
    <Text className="pt-1  text-xl">
{deals.Name} </Text>


</View>

</TouchableOpacity>
</>)

})
}

    </ScrollView>



</View>

    <TouchableOpacity className="bg-white w-full ">
        <Image source={require("../assets/Banner2.png")} className="w-full h-80"/>

    </TouchableOpacity>

    <View>
        <Text className="text-2xl px-4">You May Also Like</Text>
    </View>
    

 {

pdt.Tour && pdt.Tour.map(pdt=>{
return(
    <>
<TouchableOpacity className="  flex-row  items-center">
<View className="h-60 w-48 bg-white rounded-xl">
    <View>
    <Image source={{uri:`${pdt.Image}`}} className="h-full w-full "/>
    </View>
</View>
<View className="w-52 h-40 ">
    <Text className="text-gray-400">{pdt.Category}</Text>
    <Text className="pt-1  text-lg">
{pdt.Name} </Text>
<Text className=" text-2xl font-bold pt-1"> ₹ {pdt.MRP} </Text>
    <View className=" h-6 flex-row items-center">
        <Text className=" text-center text-white font-bold p-1 bg-pink-800 ">Upto {pdt.Discount}% OFF</Text>
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

export default HomeDash