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
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ForgotPassword from "./screens/ForgotPassword";
import OneTimePassword from "./screens/OneTimePassword";
import ResetPassword from "./screens/ResetPassword";
import GoferHome from './screens/Gofer/GoferHome';
import HirerHome from './screens/Hirer/HirerHome';
import HomeCleaning from './screens/HomeCleaning';
import UpcomingSchedule from './screens/UpcomingSchedule';
import ScheduleOptions from './components/scheduleOptions';
import CompleteTask from './screens/CompleteTask';
import RateHirer from './screens/RateHirer';
import Categories from './components/categories';
import HomeCleaningErrands from './components/homeCleaningErrands';
import ErrandDetails from './screens/ErrandDetails';
import BookingConfirmation from './screens/BookingConfirmation';
import StartErrand from './screens/StartErrand';
import UpcomingErrands  from './components/upcomingErrands';
import SharingLocation  from './screens/SharingLocation';
import ViewHirerProfile  from './screens/ViewHirerProfile';
import Profile  from './screens/Profile';
import EditProfile  from './screens/EditProfile';
import VerifyProfile  from './screens/VerifyProfile';
import ScanID  from './screens/ScanID';
import VerificationFeedback  from './screens/VerificationFeedback';
import Messages  from './screens/Messages';
import ChatScreen  from './screens/ChatScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const MainNavigator = createStackNavigator();
  
  const loadFonts = async () => {
    await useFonts({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
      'Poppins-BlackItalic': require('./assets/fonts/Poppins-BlackItalic.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
      'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
      'Poppins-ExtraBoldItalic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
      'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
      'Poppins-ExtraLightItalic': require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
      'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
      'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
      'Poppins-LightItalic': require('./assets/fonts/Poppins-LightItalic.ttf'),
      'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
      'Poppins-MediumItalic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
      'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-SemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
      'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
      'Poppins-ThinItalic': require('./assets/fonts/Poppins-ThinItalic.ttf'),
    });
  };

  loadFonts(); // Call the font loading function

  return (
    <View style ={{flex: 1}}>
      <StatusBar style="auto" />
      <NavigationContainer>
         <MainNavigator.Navigator screenOptions={{ headerShown: false }} >
                  
          <MainNavigator.Screen name="SplashScreen" component={SplashScreen} />
          <MainNavigator.Screen name="Onboarding1" component={Onboarding1} />
          <MainNavigator.Screen name="Onboarding2" component={Onboarding2} />
          <MainNavigator.Screen name="Onboarding3" component={Onboarding3} />
          <MainNavigator.Screen name="Onboarding4" component={Onboarding4} />
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Signup" component={Signup} />
          <MainNavigator.Screen name="ForgotPassword" component={ForgotPassword} />
          <MainNavigator.Screen name="OneTimePassword" component={OneTimePassword}/>
          <MainNavigator.Screen name="ResetPassword" component={ResetPassword}/>
          <MainNavigator.Screen name="GoferHome" component={GoferHome}/>
          <MainNavigator.Screen name="HirerHome" component={HirerHome}/>    
          <MainNavigator.Screen name="HomeCleaning" component={HomeCleaning}/>
          <MainNavigator.Screen name="ScheduleOptions" component={ScheduleOptions}/>
          <MainNavigator.Screen name="UpcomingSchedule" component={UpcomingSchedule}/>
          <MainNavigator.Screen name="CompleteTask" component={CompleteTask}/>
          <MainNavigator.Screen name="RateHirer" component={RateHirer}/>
          <MainNavigator.Screen name="Categories" component={Categories}/>
          <MainNavigator.Screen name="HomeCleaningErrands" component={HomeCleaningErrands}/>
          <MainNavigator.Screen name="ErrandDetails" component={ErrandDetails} />
          <MainNavigator.Screen name="BookingConfirmation" component={BookingConfirmation}/>
          <MainNavigator.Screen name="UpcomingErrands" component={UpcomingErrands}/>
          <MainNavigator.Screen name="StartErrand" component={StartErrand} />
          <MainNavigator.Screen name="SharingLocation" component={SharingLocation} />
          <MainNavigator.Screen name="ViewHirerProfile" component={ViewHirerProfile} />
          <MainNavigator.Screen name="Profile" component={Profile} />
          <MainNavigator.Screen name="EditProfile" component={EditProfile} />
          <MainNavigator.Screen name="VerifyProfile" component={VerifyProfile} />
          <MainNavigator.Screen name="ScanID" component={ScanID} />
          <MainNavigator.Screen name="VerificationFeedback " component={VerificationFeedback } />
          <MainNavigator.Screen name="Messages" component={Messages} />
          <MainNavigator.Screen name="ChatScreen" component={ChatScreen} />
               
         </MainNavigator.Navigator>
      </NavigationContainer> 
      
    </View>
  );
}
