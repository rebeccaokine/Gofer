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

const BookingConfirmation = ({ navigation }) => {
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
            style={{
              marginRight: 40,
            }}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 32,
              color: 'black',
              textAlign: 'center',
              fontWeight: 600,
            }}>
            Confirmation
          </Text>
        </View>

        <Image
        source={require('../assets/happiness.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.bottomSpace}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            textAlign: 'center',
            color: 'black',
            paddingTop: 20,
          }}>
          Booking Confirmed
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            fontFamily: 'Poppins',
            textAlign: 'center',
            color: 'black',
            paddingTop: 10,
            paddingBottom: 60,
          }}>
          Task has been added to your schedule
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
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
              fontWeight: 700,
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
    marginHorizontal: 30,
  },
});

export default BookingConfirmation;
