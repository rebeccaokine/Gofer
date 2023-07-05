import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import FormTextInput from '../components/formTextInput';
import TextLink from '../components/textLink';

const ForgotPassword  = ({navigation}) => {
  
  return(
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={{
         fontSize: 32,
         color: 'black',
         marginTop: 40,
         textAlign: 'center',
      }}>
        Forgot Password
      </Text>
    </View>

    <View>
     <Image
        source={require('../assets/forgot.png')}
        style={styles.image}
        resizeMode= "contain"
      />
    </View>

    <View>
      <FormTextInput 
       placeholder="Email" 
      />
    </View>

    <TouchableOpacity 
        onPress={()=>{navigation.navigate("Onboarding2")}}
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
          >Submit</Text>
      </TouchableOpacity>
 
    <View style={{
        marginHorizontal: 50,
        textAlign: 'center',
        marginTop: 30,
      }}>
     <TextLink text="Back to login" onPress={()=> navigation.navigate("GoferLogin")} />
    </View>   

       <TextLink text="Back to login" onPress={()=> navigation.navigate("OneTimePassword")} />
       <TextLink text="Back to login" onPress={()=> navigation.navigate("ResetPassword")} />

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


export default ForgotPassword;