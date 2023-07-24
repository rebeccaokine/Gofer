import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';


const ScanID = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
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

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      navigation.navigate('VerificationFeedback', { imageUri: result.uri });
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

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      navigation.navigate('VerificationFeedback', { imageUri: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleCameraPress}
        disabled={!hasCameraPermission}
      >
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
  );
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: 'bold',
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
