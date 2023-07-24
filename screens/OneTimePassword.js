import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import OTPInput from '../components/OTPInput';


const OneTimePassword = ({navigation}) => {
  
  return(
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={{
         fontSize: 32,
         color: 'black',
         marginTop: 40,
         textAlign: 'left',
         marginHorizontal: 40,
      }}>
        Enter OTP
      </Text>
    </View>

    <View>
     <Image
        source={require('../assets/password.png')}
        style={styles.image}
        resizeMode= "contain"
      />
    </View>

    <View>
     <Text style={{
      color: 'black',
      textAlign: 'center',
      fontSize: 20,
      marginHorizontal: 40,
     }}>
     We have sent a verification code to your email</Text>
    </View>

    <View style={{
      flexDirection: "row",
      marginHorizontal:40,
      marginTop: 20,
      marginBottom: 30,
      justifyContent:'center',
    }}>
      <OTPInput />
      <OTPInput />
      <OTPInput />
      <OTPInput />
      
    </View>

    <TouchableOpacity 
        onPress={()=>{navigation.navigate("ResetPassword")}}
        style={{
          padding: 15, 
          backgroundColor: '#F8EBD3',
          borderRadius: 30, 
          borderWidth: 2, 
          borderColor: 'black', 
          justifyContent: 'center', 
          alignItems: 'center',  
          fontWeight: 800,       
          marginTop: 10,
          marginHorizontal: 40,
          }}
          >
          <Text 
          style={{
            fontSize:20,
          }}
          >Verify</Text>
      </TouchableOpacity>
 
    <View style={{
        marginHorizontal: 50,
        textAlign: 'center',
        marginTop: 30,
      }}>
       <Pressable
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text
            style={{
             fontSize: 16,
            textAlign: 'center',
            marginTop: 20,
            }}>
           {' '} Resend Code
          </Text>
        </Pressable>
    </View>      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
    fontFamily: 'Poppins',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    paddingTop:300,
    width: 400,
  },
 
});


export default OneTimePassword;