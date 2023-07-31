import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet,Pressable} from 'react-native';
import PasswordInput from '../components/passwordInput';

const ResetPassword  = ({navigation}) => {
  
  return(
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={{
         fontSize: 32,
         color: 'black',
         marginTop: 40,
         marginBottom: 60,
         textAlign: 'center',
      }}>
        Reset Password
      </Text>
    </View>

    
    <View>
      <PasswordInput 
       placeholder="New Password" 
      />
      <PasswordInput 
       placeholder="Confirm Password" 
      />

    </View>

    <TouchableOpacity 
        onPress={()=>{navigation.navigate("Login")}}
        style={{
          padding: 15, 
          backgroundColor: '#F8EBD3',
          borderRadius: 30, 
          borderWidth: 2, 
          borderColor: 'black', 
          justifyContent: 'center', 
          alignItems: 'center',  
          fontFamily: 'Poppins-Medium',      
          marginTop: 50,
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
           {' '} Back to login
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
  }, 
});


export default ResetPassword;