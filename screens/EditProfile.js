import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Profile = ({ navigation }) => {
   const openGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        // Handle the selected image here
        console.log(result.uri);
      }
    }
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

          <Text style={styles.title}>Profile</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View>
            <Image
              source={require('../assets/avatar.jpeg')}
              style={styles.image}
            />
          </View>
          <View style={styles.overlay}>
            <TouchableOpacity style={styles.cameraicon } onPress={openGallery}>
              <Feather name="camera" size={64} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.hirerInformation}>
          {/**NAME */}
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  fontWeight: 600,
                }}>
                Name
              </Text>
            </View>
            <Text
              style={{
                marginTop: 5,
                fontSize: 24,
                fontWeight: 600,
              }}>
              Dereck Griffin
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'grey',
                fontWeight: 600,
              }}>
              Email
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 22,
                fontWeight: '400',
              }}>
              dereckgriffin@gmail.com
            </Text>
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
                  fontWeight: '400',
                }}>
                Date
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 22,
                  fontWeight: '400',
                }}>
                0245637389
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Onboarding2');
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
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 40,
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontWeight: '400',
    marginLeft: 55,
  },
  hirerInformation: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
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
  left: 100,
  width: 150,
  height: 150,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  borderRadius: 110,
},
});

export default Profile;