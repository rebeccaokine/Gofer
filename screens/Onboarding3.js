import React from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

const Onboarding3 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/to-do-list.png')}
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
          paddingTop: 10,
          }}
          >
         Schedule Your Tasks
        </Text>

        <Text
         style={{
          fontSize: 18,
          fontWeight: '400', 
          fontFamily:"Poppins", 
          textAlign: 'left',
          color: 'black',
          paddingBottom: 40,
          }}        
        > 
         Enjoy the convenience of seamless task scheduling and focus on what matters most while Gofer takes care of your errands.
        </Text>
       
       <View style={{ flexDirection: "row"}}>
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate("Onboarding4");
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
          fontWeight: '500',        
          }}
          >
          <Text 
          style={{
            fontSize:24,
          }}
          >Get Started</Text>
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
    marginTop: 20,
    alignSelf: 'center',
    paddingTop:300,
    width: 400,
    
  },
  bottomSpace: {
    flex: 2,
    marginHorizontal: 30,
  },
});

export default Onboarding3;