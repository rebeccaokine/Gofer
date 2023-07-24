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

const RateHirer = ({ navigation }) => {
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
              marginRight: 40,
            }}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 32,
              color: 'black',
              marginLeft: 30,
              textAlign: 'center',
              fontWeight: '400',
            }}>
            Rate Hirer
          </Text>
        </View>

        <Image source={require('../assets/avatar.jpeg')} style={styles.image} />

        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 500,
              fontSize: 26,
            }}>
            How was working with Stan?
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <AntDesign
                name="star"
                size={40}
                color="#FFA800"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="star"
                size={40}
                color="#FFA800"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="star"
                size={40}
                color="#FFA800"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="star"
                size={40}
                color="#FFA800"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="star" size={40} color="#ABA6A6" />
            </TouchableOpacity>
          </View>

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
              All Done
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
              Thanks for your feedback
            </Text>
          </View>

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
                fontWeight: '500',
                marginTop: 200,
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
    alignSelf: 'center',
    width: 220,
    height: 220,
    borderRadius: 110,
    marginTop: 40,
    marginBottom: 20,
  },
  bottomSpace: {
    flex: 2,
    marginHorizontal: 30,
  },
});

export default RateHirer;
