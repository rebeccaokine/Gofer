import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
import FormTextInput from '../components/formTextInput';

const ForgotPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
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
          resizeMode="contain"
        />
      </View>

      <View>
        <FormTextInput placeholder="Email" />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OneTimePassword');
        }}
        style={{
          padding: 15,
          backgroundColor: '#F8EBD3',
          borderRadius: 30,
          borderWidth: 2,
          borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '500',
          marginTop: 10,
          marginHorizontal: 40,
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Submit
        </Text>
      </TouchableOpacity>

      <View
        style={{
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
              fontSize: 18,
              textAlign: 'center',
              marginTop: 20,
              fontWeight: '500',
            }}>
            {' '}
            Back to login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
    fontFamily: 'Poppins',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 300,
    width: 400,
  },
});

export default ForgotPassword;
