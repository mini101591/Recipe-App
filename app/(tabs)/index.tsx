import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/components/HomeScreen';
import AboutScreen from '@/components/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerTintColor:"purple",
          headerRight:()=>(
            <Pressable onPress={()=>alert("Menu Button Pressed")}>
              <Text>Menu</Text>
            </Pressable>
          ),
          contentStyle:{
            backgroundColor:"#e8e4f3"
          }
        }}>
            <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              title:"Welcome Home",
            }}
            />
            <Stack.Screen name="About" component={AboutScreen} initialParams={{name:"Guest"}}/>
        </Stack.Navigator>
  );
}

