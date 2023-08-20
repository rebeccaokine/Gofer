import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState('Dereck Griffin');
  const [email, setEmail] = useState('dereckgriffin@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('0245637389');

  const openGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        // Handle the selected image here
        console.log(result.assets);
      }
    }
  };

  const handleSave = () => {
    // Handle saving the edited profile here
    console.log('Saving changes...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
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

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View>
            <Image
              source={require('../assets/avatar.jpeg')}
              style={styles.image}
            />
          </View>
          <View style={styles.overlay}>
            <TouchableOpacity style={styles.cameraicon} onPress={openGallery}>
              <Feather name="camera" size={64} color="black" />
            </TouchableOpacity>
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
                marginTop: 100,
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
      </View>
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
    marginLeft: 15,
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
    left: 110,
    width: 150,
    height: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 110,
  },
});

export default EditProfile;
