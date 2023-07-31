import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const VerificationFeedback = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          marginVertical: 20,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
         <TouchableOpacity
            onPress={() => {
              navigation.navigate('GoferHome');
            }}
            style={{
              marginRight: 30,
            }}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 26,
              color: 'black',
              textAlign: 'center',
              fontFamily: 'Poppins-SemiBold',
            }}>
            Profile Under Review
          </Text>
        </View>

        <Image
        source={require('../assets/examining.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.bottomSpace}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: 'Poppins-SemiBold',
            fontFamily: 'Poppins',
            textAlign: 'center',
            color: 'black',
            paddingTop: 20,
          }}>
          We are reviewing your ID
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
            fontFamily: 'Poppins',
            textAlign: 'center',
            color: 'black',
            paddingTop: 10,
            paddingBottom: 60,
          }}>
          As soon as your details are verified, you’ll receive a blue checkmark on your profile
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GoferHome');
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
              fontFamily: 'Poppins-Medium',
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
              }}>
              Back to Home
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
    fontFamily: 'Poppins',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 300,
    width: 400,
  },
  bottomSpace: {
    flex: 2,
    marginHorizontal: 10,
  },
});

export default VerificationFeedback;
