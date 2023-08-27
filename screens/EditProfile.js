import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../firebaseConfig';
import 'firebase/firestore';

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState('Rebecca Okine');
  const [email, setEmail] = useState('rebecca@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('023456777');
  const [imageUri, setImageUri] = useState(null);

  const openGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setImageUri(result.assets[0].uri); // Update the image URI state
      }
    }
  };

  const handleSave = async () => {
    try {
      const userRef = firebase.firestore().collection('users').doc('user_id'); // Replace 'user_id' with the actual user ID

      const userData = {
        name,
        email,
        phoneNumber,
        // Add the new image URI to the userData object if available
        imageUri: imageUri || null,
      };

      await userRef.set(userData, { merge: true }); // Update the document with new fields
      console.log('User data saved to Firestore');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={styles.backButton}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={imageUri ? { uri: imageUri } : require('../assets/avatar.jpeg')}
              style={styles.image}
            />
            <View style={styles.overlay}>
              <TouchableOpacity style={styles.cameraicon} onPress={openGallery}>
                <Feather name="camera" size={64} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.hirerInformation}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: 'grey',
                fontFamily: 'Poppins-SemiBold',
              }}>
              Name
            </Text>
            <TextInput
              style={{
                marginTop: 5,
                fontSize: 24,
                fontFamily: 'Poppins-Medium',
              }}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'grey',
                fontFamily: 'Poppins-SemiBold',
              }}>
              Email
            </Text>
            <TextInput
              style={{
                marginTop: 5,
                fontSize: 22,
                fontFamily: 'Poppins-Medium',
              }}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Phone Number
              </Text>
              <TextInput
                style={{
                  marginTop: 5,
                  fontSize: 22,
                  fontFamily: 'Poppins-Medium',
                }}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <TouchableOpacity
              onPress={handleSave}
              style={{
                flex: 1,
                padding: 10,
                backgroundColor: '#F8EBD3',
                borderRadius: 30,
                borderWidth: 2,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Poppins-Medium',
                marginTop: 50,
              }}>
              <Text
                style={{
                  fontSize: 24,
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
  },
  contentContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 20,
  },
  backButton: {
    marginRight: 40,
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontFamily: 'Poppins-Medium',
    marginLeft: 3,
    marginVertical: 20,
  },
  hirerInformation: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 110,
    marginBottom: 20,
  },
  cameraicon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -35 }, { translateY: -35 }],
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 112 ,
    width: 151,
    height: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 110,
  },
});

export default EditProfile;
