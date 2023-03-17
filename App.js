import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Tab/HomeScreen';
import 'react-native-gesture-handler';
import ProductScreen from './screens/ProductScreen';
import SubCategoryScreen from './screens/SubCategoryScreen';

import TDScreen from './screens/TDScreen';
import { store } from './store'
import { Provider } from 'react-redux'
import LoginScreen from './screens/LoginScreen';
import Chatbot from './screens/Chatbot';
import KidsScreen from './screens/KidsScreen';
import MenScreen from './screens/MenScreen';
import FootScreen from './screens/FootScreen';
import SearchScreen from './screens/SearchScreen';





const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Provider store={store}>
    <TailwindProvider>
    <Stack.Navigator screenOptions={{headerShown : false}}>
    <Stack.Screen name="Login" component={LoginScreen} />

    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name = "SubCategory" component={SubCategoryScreen}/>
      <Stack.Screen name = "Product" component= {ProductScreen}/>
        <Stack.Screen name="3D" component={TDScreen} />
        <Stack.Screen name="Kids" component={KidsScreen} />
        <Stack.Screen name="Men" component={MenScreen} />
        <Stack.Screen name="Footwear" component={FootScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
     


      </Stack.Navigator>
    </TailwindProvider>
    </Provider>
    </NavigationContainer>
  );
}


