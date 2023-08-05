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
import HomeCleaningErrands from '../components/homeCleaningErrands';
import { AntDesign } from '@expo/vector-icons';

const HomeCleaning = ({ navigation }) => {
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
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GoferHome');
            }}
            style={{
              marginRight: 25,
            }}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 32,
              color: 'black',
              marginBottom: 20,
              textAlign: 'center',
              fontFamily: 'Poppins-Medium',
            }}>
            Home Cleaning
          </Text>
        </View>
        <HomeCleaningErrands navigation={navigation} />
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
});

export default HomeCleaning;
