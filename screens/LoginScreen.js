import { View, Text, Button,Image, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Platform } from 'react-native';
import * as Google from "expo-auth-session/providers/google"
import { fetchUserInfoAsync, revokeAsync } from 'expo-auth-session';
import PhoneInput from "react-native-phone-number-input";
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Random from 'expo-random';

const LoginScreen = () => {
    const navigation = useNavigation();
  const [tok, settok] = useState();
  const [Email,setEmail] = useState("");
  const [Fname,setFname] = useState("");
  const [ProfilePic,setProfilePic] = useState("");
  let userInfo;

  const setValues= () =>{
    AsyncStorage.setItem("token",tok)
    getValues();
  }

  const getValues = async() =>{
    const id = await AsyncStorage.getItem("token");
    console.log(id);
  }
  
  

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '220970022854-7olfh9re21er80cmaiq3ru0biu2ecl04.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  const handleClick =async()=>{
        
        
    

    navigation.navigate("Data1")
    
  }

  async function getUserInfo(access_token){
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me",{
      headers : {
        Authorization : `Bearer ${access_token}`
      }
    });
    userInfo = await response.json();
    console.log("success",userInfo);
    setEmail(userInfo.email);
    setFname(userInfo.family_name);
    setProfilePic(userInfo.picture);
    
    handleClick();



  }
  
  const googleRegister = (async () =>{
    const response = await promptAsync();
    if(response.type=== "success"){
      const {access_token} = response.params;
      console.log("access : " , access_token);
      settok(access_token);

  
     
      getUserInfo(access_token);
      
    }
  })

  const Logout = async () => {
    await revokeAsync({
      token : tok
    },
    {
      revocationEndpoint: "https://oauth2.googleapis.com/revoke"
    }
  
    );
    console.log("loggedout");
  
  }
    
    
  return (
    <ScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        
        <Image source={{uri:"https://www.businessofapps.com/wp-content/uploads/2021/03/emezin_ecommerce_mobile_apps.png"}} className="h-96 rounded-b-full  w-full"/>
        <Text className="text-center text-4xl pt-8 font-bold px-5">India's #1 Ecommerce  App</Text>

        
        <View className="items-center pt-3">
        
        <TouchableOpacity 
        onPress={()=>{navigation.navigate("Home")}}
        className="">
          <View className="flex items-center gap-y-4 pb-8">


          <View className="pt-5">

                <View className=" shadow-black shadow ">
                <PhoneInput
                defaultCode="IN" 
                layout="first" autoFocus containerStyle={{ backgroundColor: 'white',borderColor:"#d3d3d3",borderRadius:4,height:40,width:320 }} inputStyle={{borderWidth:0.5, backgroundColor: 'white' }} textContainerStyle={{borderWidth:0.1,backgroundColor:"white" ,paddingBottom:0,paddingTop:0 }}
                />
                </View>
                </View>
                <View className="">

                <View className="pt-1 rounded-xl">
                <TextInput placeholder='Enter password' secureTextEntry={true}
                className="bg-white text-xl  pl-2 shadow-black shadow border-[#d3d3d3]  w-80 p-1 h-10 rounded-lg"  />
                </View>
                </View>
        </View>
         

          <TouchableOpacity className=" h-11 space-x-5 flex shadow-black shadow  w-full bg-white rounded-xl border "
          onPress={()=>{googleRegister()}
          
        }
          >
                        <View className="flex-row justify-evenly w-80  pl-3 pt-1 items-center">
                        <View className="">
                        <Image source={require('../assets/google.png')} className="h-6 w-6"/>
                        </View>
                        <View className="">
                        <Text className="pt-1  text-lg pr-4   ">sign in with Google</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("HomeScreen")}} >
        <Text className="text-center pt-2 text-xl">Skip</Text>
        </TouchableOpacity>
        <Text className="pt-28 text-xs">By Continuing you agree to our </Text>
        <TouchableOpacity onPress={()=>{setValues();}}>
        <Text className="pt-1 text-xs">Terms of Service || Privacy Policy || Content Policy</Text>
        </TouchableOpacity>
       
        </View> 
        
        
    </ScrollView>
  )
}

export default LoginScreen