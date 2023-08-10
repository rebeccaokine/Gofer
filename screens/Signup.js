import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import FormTextInput from '../components/formTextInput';
import PasswordInput from '../components/passwordInput';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';

const Signup = ({ navigation }) => {
  const [activeOption, setActiveOption] = useState('gofer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    if (activeOption === 'gofer') {
      setActiveOption('hirer');
    } else {
      setActiveOption('gofer');
    }
  };

  const handleSignup = async () => {
    const auth = getAuth(); // Initialize Firebase auth instance
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Set the display name for the user
    await updateProfile(userCredential.user, {
      displayName: name, // Set the user's name from the input
    });

      // User account creation successful, you can now navigate to the appropriate screen
      if (activeOption === 'gofer') {
        navigation.navigate('GoferHome');
      } else {
        navigation.navigate('HirerHome');
      }
    } catch (error) {
      // Handle signup errors
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.button, activeOption === 'gofer' && styles.activeButton]}
          onPress={handleToggle}
        >
          <Text style={[styles.buttonText, activeOption === 'gofer' && styles.activeButtonText]}>
            Gofer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeOption === 'hirer' && styles.activeButton]}
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
            fontFamily: 'Poppins-SemiBold',
            marginHorizontal: 30,
            marginTop: 40,
            marginBottom: 30,
            textAlign: 'center',
          }}
        >
          Signup
        </Text>
      </View>

      <View>
        <FormTextInput
          placeholder="Fullname"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <FormTextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        onPress={handleSignup}
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
        }}
      >
        <Text style={{ fontSize: 20 }}>Signup</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
            textAlign: 'center',
            marginTop: 20,
            fontFamily: 'Poppins-Regular',
          }}
        >
          Already have an account?
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              marginTop: 20,
              fontFamily: 'Poppins-Regular',
            }}
          >
            {' '}
            Login
          </Text>
        </Pressable>
      </View>

      <Text
        style={{
          fontSize: 16,
          color: 'gray',
          marginTop: 40,
          textAlign: 'center',
          fontFamily: 'Poppins-Regular',
        }}
      >
        Or connect with
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 40,
          marginTop: 15,
          justifyContent: 'center',
        }}
      >
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
          }}
        >
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
          }}
        >
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
          }}
        >
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

export default Signup;
