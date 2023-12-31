import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { getStorage, ref, uploadString } from 'firebase/storage';
import { firebase } from '../firebaseConfig';

const ScanID = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const handleCameraPress = async () => {
    if (!hasCameraPermission) {
      console.log('Camera permission not granted');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
      exif: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      
      const imageRef = ref(firebase.storage(), 'images/' + result.assets[0].uri);
      
      try {
        // Upload the image
        await uploadString(imageRef, result.assets[0].base64, 'base64');
        console.log('Image uploaded successfully');
      } catch (error) {
        console.error('Error uploading image:', error);
      }
      
      navigation.navigate('VerificationFeedback', {
        imageUri: result.assets[0].uri,
      });
    }
  };

  const handleGalleryPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Media library permission not granted');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
      exif: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      
      const imageRef = ref(firebase.storage(), 'images/' + result.assets[0].uri);
      
      try {
        // Upload the image
        await uploadString(imageRef, result.assets[0].base64, 'base64');
        console.log('Image uploaded successfully');
      } catch (error) {
        console.error('Error uploading image:', error);
      }
      
      navigation.navigate('VerificationFeedback', {
        imageUri: result.assets[0].uri,
      });
    }       
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleCameraPress}
          disabled={!hasCameraPermission}>
          <Text style={styles.buttonText}>Take a Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleGalleryPress}>
          <Text style={styles.buttonText}>Choose from Gallery</Text>
        </TouchableOpacity>

        {selectedImage && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedImage }} style={styles.image} />
          </View>
        )}
      </View>
      <TouchableOpacity
      style={{flex: 1}}
        onPress={() => {
          navigation.navigate('VerifyProfile');
        }}>
        <Text style={styles.buttonText}>Back </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 350,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8EBD3',
  },
  buttoncontainer: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#F8EBD3',
  },
  button: {
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 2,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  imageContainer: {
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
});

export default ScanID;
