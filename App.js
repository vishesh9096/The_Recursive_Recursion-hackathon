import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Tab/HomeScreen';
import 'react-native-gesture-handler';
import ProductScreen from './screens/ProductScreen';
import SubCategoryScreen from './screens/SubCategoryScreen';
import TrouserWscreen from './screens/TrouserWscreen';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
    <Stack.Navigator screenOptions={{headerShown : false}}>
    <Stack.Screen name = "SubCategory" component={SubCategoryScreen}/>
      <Stack.Screen name = "Product" component= {ProductScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name = "wTrouser" component = {TrouserWscreen}/>
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}


