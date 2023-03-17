import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable  from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'; 




const AnimationScreen = () => {
    const navigation = useNavigation();
    

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login");
        },3000);
       
    },[]);
  return (
    <SafeAreaView className="bg-white flex-1 pt-32 justify-centre items-center ">
      <View className="h-96 w-80 ab pl-20 ">
      <Animatable.Image
      source={require("../assets/NPM.png")}
      animation="slideInUp"
      iterationCount={1}
      className="h-full w-full "
      />
      </View>

      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-3xl my-10 text-[#253d59] font-bold text-center"
      >

            S H O P   E A S E 

      </Animatable.Text>
      <Progress.Bar  width={200} animationType='decay' color="#253d59" indeterminate={true} />
      
      <Text className="pt-44 text-xs text-white">By Continuing you agree to our </Text>

        <Text className="pt-1 text-xs text-white">Terms of Service || Privacy Policy || Content Policy</Text>


    </SafeAreaView>
  );
};

export default AnimationScreen;