import React from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

const Onboarding4 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/leadership.png')}
        style={styles.image}
        resizeMode= "contain"
      />

      <View style={styles.bottomSpace}>
        <Text 
        style={{
          fontSize: 28,
          fontWeight: "bold", 
          fontFamily:"Poppins", 
          textAlign: 'left',
          color: 'black',
          paddingBottom: 20,
          }}
          >
         Connect and Get Things Done
        </Text>

        <Text
         style={{
          fontSize: 18,
          fontWeight: '400', 
          fontFamily:"Poppins", 
          textAlign: 'left',
          color: 'black',
          paddingBottom: 20,
          }}        
        > 
         Gofer connects you with a community of helpers. Sign up or Login to access a network of reliable Gofers. 
        </Text>
       
       <View style={{ flexDirection: "row"}}>
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{
          flex: 1,
          padding: 10, 
          backgroundColor: '#F8EBD3',
          borderRadius: 30, 
          borderWidth: 2, 
          borderColor: 'black', 
          justifyContent: 'center', 
          alignItems: 'center',  
          marginBottom: 10,       
          fontWeight: '500',   
          }}
          >
          <Text 
          style={{
            fontSize:24,
          }}
          >Login</Text>
        </TouchableOpacity>
       </View>

       <View style={{ flexDirection: "row"}}>
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate("Signup");
        }}
        style={{
          flex: 1,
          padding: 10, 
          marginTop: 10,
          backgroundColor: '#F8EBD3',
          borderRadius: 30, 
          borderWidth: 2, 
          borderColor: 'black', 
          justifyContent: 'center', 
          alignItems: 'center',    
          fontWeight: '500',        
          }}
          >
          <Text 
          style={{
            fontSize:24,
          }}
          >Sign Up</Text>
        </TouchableOpacity>
       </View>


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
    paddingTop:240,
    width: 400,
    
  },
  bottomSpace: {
    flex: 2,
    marginHorizontal: 30,
  },
});

export default Onboarding4;