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

const CompleteTask = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          marginVertical: 40,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity
            style={{
              marginRight: 25,
            }}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 32,
              color: 'black',
              fontFamily: 'Poppins-Medium',
            }}>
            Complete Task
          </Text>
        </View>

        <Image
        source={require('../assets/high-five.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.bottomSpace}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: 'Poppins-Bold',
            textAlign: 'center',
            color: 'black',
            paddingTop: 20,
          }}>
          Task Completed
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
            textAlign: 'center',
            color: 'black',
            paddingTop: 10,
            paddingBottom: 60,
          }}>
          Good Job!
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RateHirer');
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
            }}>
            <Text
              style={{
                fontSize: 24,
              }}>
             Rate Hirer
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

export default CompleteTask;
