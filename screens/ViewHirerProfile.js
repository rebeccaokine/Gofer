import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import NavigationBar from '../components/navigationBar';
import { AntDesign } from '@expo/vector-icons';

const ViewHirerProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GoferHome');
            }}
            style={styles.backButton}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Hirer Profile</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={require('../assets/avatar.jpeg')}
            style={styles.image}
          />
          <View style={styles.verifyContainer}>
            <Image
              source={require('../assets/verify.png')}
              style={styles.verifyImage}
            />
          </View>
        </View>
        <TouchableOpacity
              onPress={() => {
                navigation.navigate('Messages');
              }}
              style={{
                padding: 5,
                backgroundColor: '#F8EBD3',
                borderRadius: 30,
                borderWidth: 2,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Poppins-Medium',
                marginHorizontal: 120,
              }}>
              <Text
                style={{
                  fontSize: 20,
                }}>
                Message
              </Text>
        </TouchableOpacity>

        <View style={styles.hirerInformation}>
          {/**NAME */}
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  fontFamily: 'Poppins-Medium',
                }}>
                Name
              </Text>
            </View>
            <Text
              style={{
                marginTop: 5,
                fontSize: 24,
                fontFamily: 'Poppins-Regular',
              }}>
              Dereck Griffin
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'grey',
                fontFamily: 'Poppins-Medium',
              }}>
              Email
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 22,
                fontFamily: 'Poppins-Regular',
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
                  fontFamily: 'Poppins-Medium',
                }}>
                Phone Number
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 22,
                  fontFamily: 'Poppins-Regular',
                }}>
                0245637389
              </Text>
            </View>
          </View>
        </View>
      </View>
      <NavigationBar />
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
    marginVertical: 40,
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
    marginLeft: 5,
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
  verifyContainer: {
    borderRadius: 15,
    marginLeft: -30, 
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyImage: {
    width: 40,
    height: 40,
  },
});

export default ViewHirerProfile;
