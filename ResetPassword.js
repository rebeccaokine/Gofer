import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import FormTextInput from '../components/formTextInput';
import TextLink from '../components/textLink';

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
      <FormTextInput 
       placeholder="New Password" 
      />
      <FormTextInput 
       placeholder="Confirm Password" 
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
     <TextLink text="Back to login" onPress={()=> navigation.navigate("GoferLogin")} />
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
});


export default ResetPassword;