<<<<<<< HEAD:screens/GoferSignup.js
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import FormTextInput from '../components/formTextInput';
import TextLink from '../components/textLink';
import PasswordInput from '../components/passwordInput';

const GoferSignup  = ({navigation}) => {
  const [activeOption, setActiveOption] = useState('gofer');

  const handleToggle = () => {
    if (activeOption === 'gofer') {
      setActiveOption('hirer');
    } else {
      setActiveOption('gofer')}
  }

  return(
    <SafeAreaView style={styles.container}>
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          activeOption === 'gofer' && styles.activeButton,
        ]}
        onPress={handleToggle}
      >
        <Text style={[styles.buttonText, activeOption === 'gofer' && styles.activeButtonText]}>
          Gofer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeOption === 'hirer' && styles.activeButton,
        ]}
        onPress={handleToggle}
      >
        <Text style={[styles.buttonText, activeOption === 'hirer' && styles.activeButtonText]}>
          Hirer
        </Text>
      </TouchableOpacity>
    </View>

    <View>
    <Text 
    style={{
     fontSize: 32,
     fontWeight: '500',
     marginHorizontal: 30,
     marginTop: 40,
     marginBottom: 30,
     textAlign: 'center',
    }}>
    Sign Up</Text>
    </View>

    <View>
      <FormTextInput 
       placeholder="Fullname" 
      />
      <FormTextInput 
       placeholder="Email" 
      />
      <PasswordInput 
       placeholder="Password"
      />
    </View>

    <View style={{
        marginHorizontal: 50,
        textAlign: 'right',
      }}>
     <TextLink text=" Forgot Password?" onPress={()=> navigation.navigate("ForgotPassword")} />
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
          >Sign Up</Text>
      </TouchableOpacity>

      <Text 
      style={{
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
      }}>
      Already have an account?
      <TextLink text=" Login" onPress={()=> navigation.navigate("GoferLogin")} />
      </Text>
     
     <Text
      style={{
        fontSize: 16,
        color: 'gray',
        marginTop: 60,
        textAlign: 'center',
      }}>
       Or connect with
      </Text>
      
     <View style={{ flexDirection: "row", marginHorizontal: 40, marginTop: 15,  justifyContent: 'center',}}>
      <TouchableOpacity
      onPress={()=>{navigation.navigate("Onboarding2")}}
        style={{
          padding: 4, 
          backgroundColor: '#F8EBD3',
          borderRadius: 30, 
          borderWidth: 2, 
          borderColor: 'black', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: 60,
          height: 60,
          marginRight: 10,
          }}
          >
        <AntDesign name="google" size={42} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>{navigation.navigate("Onboarding2")}}
        style={{
          padding: 6, 
          backgroundColor: '#F8EBD3',
          borderRadius: 30, 
          borderWidth: 2, 
          borderColor: 'black', 
          justifyContent: 'center',  
          alignItems: 'center',
          width: 60,
          height: 60,
          marginRight: 10,
          }}
          >
        <FontAwesome name="apple" size={42} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>{navigation.navigate("Onboarding2")}}
        style={{
          padding: 10, 
          backgroundColor: '#F8EBD3',
          borderRadius: 30, 
          borderWidth: 2, 
          borderColor: 'black', 
          justifyContent: 'center',  
          alignItems: 'center',
          width: 60,
          height: 60,
          }}
          >
        <FontAwesome name="facebook" size={42} color="black" />
      </TouchableOpacity>
     </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
    fontFamily: 'Poppins'
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    marginHorizontal: 50,
    marginTop: 60,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 4,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
  },
  activeButton: {
    backgroundColor: 'black',
  },
  activeButtonText: {
    color: 'white',
  },
});


export default GoferSignup;
=======
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Pressable
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import FormTextInput from '../../components/formTextInput';
import PasswordInput from '../../components/passwordInput';

const GoferSignup = ({ navigation }) => {
  const [activeOption, setActiveOption] = useState('gofer');

  const handleToggle = () => {
    if (activeOption === 'gofer') {
      setActiveOption('hirer');
    } else {
      setActiveOption('gofer');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeOption === 'gofer' && styles.activeButton,
          ]}
          onPress={handleToggle}>
          <Text
            style={[
              styles.buttonText,
              activeOption === 'gofer' && styles.activeButtonText,
            ]}>
            Gofer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeOption === 'hirer' && styles.activeButton,
          ]}
          onPress={handleToggle}>
          <Text
            style={[
              styles.buttonText,
              activeOption === 'hirer' && styles.activeButtonText,
            ]}>
            Hirer
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '500',
            marginHorizontal: 30,
            marginTop: 40,
            marginBottom: 30,
            textAlign: 'center',
          }}>
          Sign Up
        </Text>
      </View>

      <View>
        <FormTextInput placeholder="Fullname" />
        <FormTextInput placeholder="Email" />
        <PasswordInput placeholder="Password" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 50,
          alignSelf: 'flex-end',
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text
            style={{
             fontSize: 16,
            textAlign: 'center',
            marginTop: 10,
            }}>
           {' '} Forgot Password?
          </Text>
        </Pressable>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
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
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
            textAlign: 'center',
            marginTop: 20,
          }}>
          Already have an account?
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('GoferLogin');
          }}>
          <Text
            style={{
             fontSize: 16,
            textAlign: 'center',
            marginTop: 20,
            }}>
           {' '} Login
          </Text>
        </Pressable>
      </View>

      <Text
        style={{
          fontSize: 16,
          color: 'gray',
          marginTop: 60,
          textAlign: 'center',
        }}>
        Or connect with
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 40,
          marginTop: 15,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Onboarding2');
          }}
          style={{
            padding: 4,
            backgroundColor: '#F8EBD3',
            borderRadius: 30,
            borderWidth: 2,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
            marginRight: 10,
          }}>
          <AntDesign name="google" size={42} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Onboarding2');
          }}
          style={{
            padding: 6,
            backgroundColor: '#F8EBD3',
            borderRadius: 30,
            borderWidth: 2,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
            marginRight: 10,
          }}>
          <FontAwesome name="apple" size={42} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Onboarding2');
          }}
          style={{
            padding: 10,
            backgroundColor: '#F8EBD3',
            borderRadius: 30,
            borderWidth: 2,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
          }}>
          <FontAwesome name="facebook" size={42} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
    fontFamily: 'Poppins',
    fontWeight: '500',   
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    marginHorizontal: 50,
    marginTop: 60,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 4,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
  },
  activeButton: {
    backgroundColor: 'black',
  },
  activeButtonText: {
    color: 'white',
  },
});

export default GoferSignup;
>>>>>>> 2eee1778c4f544f254bb0146be571e6fefdaf157:GoferSignup.js
