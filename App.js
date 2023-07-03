import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer}from'@react-navigation/native';
import {createStackNavigator}from'@react-navigation/stack';

import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
import Home from "./screens/Home";


import { Provider } from 'react-native-paper'



export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style ={{flex: 1}}>
   
      <NavigationContainer>
         <MainNavigator.Navigator screenOptions={{ headerShown: false }} >

          <MainNavigator.Screen name="SplashScreen" component={SplashScreen} />
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} />
                   
        

         </MainNavigator.Navigator>
      </NavigationContainer> 
      
      
    </View>
  );
}
