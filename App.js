import { StatusBar } from "expo-status-bar";
import React from 'react';
import { View } from 'react-native';
import {NavigationContainer}from'@react-navigation/native';
import {createStackNavigator}from'@react-navigation/stack';

import SplashScreen from "./screens/SplashScreen";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding4 from "./screens/Onboarding4";
import Login from "./screens/GoferLogin";
import Home from "./screens/GoferSignup";


export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style ={{flex: 1}}>
   
      <NavigationContainer>
         <MainNavigator.Navigator screenOptions={{ headerShown: false }} >

          <MainNavigator.Screen name="SplashScreen" component={SplashScreen} />
          <MainNavigator.Screen name="Onboarding1" component={Onboarding1} />
          <MainNavigator.Screen name="Onboarding2" component={Onboarding2} />
          <MainNavigator.Screen name="Onboarding3" component={Onboarding3} />
          <MainNavigator.Screen name="Onboarding4" component={Onboarding4} />
          <MainNavigator.Screen name="GoferLogin" component={GoferLogin} />
          <MainNavigator.Screen name="GoferSignup" component={GoferSignup} />
                   
        

         </MainNavigator.Navigator>
      </NavigationContainer> 
      
      
    </View>
  );
}
