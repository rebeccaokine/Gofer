import React, { useState } from 'react';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook'; // Import Facebook library
import * as Google from 'expo-google-app-auth'; // Import Google library
import * as AppleAuthentication from 'expo-apple-authentication'; // Import Apple Authentication library
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
import FormTextInput from '../components/formTextInput';
import PasswordInput from '../components/passwordInput';

const Login = ({ navigation }) => {
  const [activeOption, setActiveOption] = useState('gofer');

  const handleToggle = () => {
    if (activeOption === 'gofer') {
      setActiveOption('hirer');
    } else {
      setActiveOption('gofer');
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful, navigate to the appropriate screen
        if (activeOption === 'gofer') {
          navigation.navigate('GoferHome');
        } else {
          navigation.navigate('HirerHome');
        }
      })
      .catch((error) => {
        // Handle login errors (invalid credentials, network error, etc.)
        console.log(error);
      });
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
            fontFamily: 'Poppins-SemiBold',
            marginHorizontal: 30,
            marginTop: 40,
            marginBottom: 30,
            textAlign: 'center',
          }}>
          Login
        </Text>
      </View>

      <View>
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
            fontFamily: 'Poppins-Regular',
            }}>
           {' '} Forgot Password?
          </Text>
        </Pressable>
      </View>

       <TouchableOpacity
        onPress={handleLogin}
        style={{
          padding: 15,
          backgroundColor: '#F8EBD3',
          borderRadius: 30,
          borderWidth: 2,
          borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Poppins-Medium',
          marginTop: 10,
          marginHorizontal: 40,
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Login
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
            textAlign: 'center',
            marginTop: 20,
            fontFamily: 'Poppins-Regular',
          }}>
          Don't have an account?
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text
            style={{
             fontSize: 16,
            textAlign: 'center',
            marginTop: 20,
            fontFamily: 'Poppins-Regular',
            }}>
           {' '} Sign Up
          </Text>
        </Pressable>
      </View>

      <Text
        style={{
          fontSize: 16,
          color: 'gray',
          marginTop: 60,
          textAlign: 'center',
          fontFamily: 'Poppins-Regular',
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
  },
  activeButton: {
    backgroundColor: 'black',
  },
  activeButtonText: {
    color: 'white',
  },
});

export default Login;