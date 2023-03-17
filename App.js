import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Tab/HomeScreen';
import 'react-native-gesture-handler';
import TDScreen from './screens/TDScreen';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
    <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="3D" component={TDScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}


