import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SparklesIcon } from "react-native-heroicons/solid";
import { Bars3Icon, ArrowRightIcon } from 'react-native-heroicons/mini';

const Chatbot = () => {

    const navigation = useNavigation();
    
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
          
    const [data, setData] = useState([]);
    const apikey ='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'
    const apiUrl= 'https://api.openai.com/v1/completions'
    const [textInput, setTextInput] = useState('');
    
    
    const client = axios.create({
        headers:{
            Authorization: "Bearer "+apikey,
        }
    })

    const params = {
        prompt: textInput,
        model: "text-davinci-002",
        max_tokens:100,
        temperature:0.5,
    }

    const handleSend = async () =>{

    client.post("https://api.openai.com/v1/completions",params)
    .then((result)=>{
        console.log(result.data.choices[0].text);
        const temp = result.data.choices[0].text.trim();
        const temp2 = temp.replace('?'," ").trim();
        console.log(temp);
        setData([...data, {type: 'user', 'text': textInput}, {type: 'bot', 'text': temp2}])
        console.log(data);
        setTextInput("");
    })
    .catch((err)=>{
        console.log(err)
    })
    }

    return (
        <View style = {styles.container}>
        <Text style = {styles.title}>AI Chatbot</Text>
        <View className="flex-row items-center gap-x-4 ">
        <TextInput 
        className="w-3/4 pl-2 text-xl border bg-white h-12 rounded-xl "
         value = {textInput}
         onChangeText = {text => setTextInput(text) }
         placeholder = "Ask me anything"
        />
        <TouchableOpacity className="bg-white  rounded-full"
        onPress={()=>{handleSend()}}>
        <ArrowRightIcon size={34}/>
        </TouchableOpacity>
        
        </View>
        <FlatList
        data = {data}
        keyExtractor = {(item, index) => index.toString()}
        style = {styles.body}
        renderItem={({item}) => (
            <View className=" gap-y-8">
         <View className="flex-row items-baseline pt-2 px-4">
            <View className="pt-2 pr-2">
           <Text className="text-xl">{item.type === 'user' ? <Image source = {{uri: "https://cdn-icons-png.flaticon.com/512/924/924915.png"}} className="w-10 h-10 rounded-full"/>: 
           <Image source = {{uri: "https://cdn-icons-png.flaticon.com/512/3558/3558860.png"}} className="w-10 h-10 rounded-full "/>
           }</Text>
           </View>
           <View className="bg-white w-80 pt-2  rounded-2xl pl-3">
           <Text className="  text-xl pb-2 " >{item.text}</Text>
           </View>
           </View>
           </View>
        )}
        />
       
      </View>
  )
}

export default Chatbot

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '',
        alignItems: 'center',
    }, 
     title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 70
    },
    body: {
      backGroundColor: '#fffcc9',
      width: '102%',
      margin: 10
    },
    bot: {
      fontSize: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      width: '90%',
      height: 60, 
      marginBottom: 5,
      borderRadius: 8
    },
    button: {
      backGroundColor: 'yellow',
      width: '90%',
      height: 60,
      borderRadius: 10, 
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
    },
    buttonText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'blue'
    }
 });