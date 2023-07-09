import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import NavigationBar from '../../components/navigationBar';
import SearchButton from '../../components/searchButton';
import Categories from '../../components/categories';
import Suggested from '../../components/suggested';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Home = () => {
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
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
            }}>
            Hello, Naa
          </Text>

          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Onboarding2');
              }}
              style={{
                marginLeft: 140,
              }}>
              <Ionicons
                name="notifications-circle-outline"
                size={35}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            fontSize: 18,
            fontWeight: 600,
          }}>
          <Octicons name="location" size={20} color="black" />
          <Text> Accra, Ghana </Text>
        </View>

        <SearchButton placeholder="Find an errand" />
      </View>
      <View
        style={{
          flex: 3,
          marginLeft: 20,
        }}>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 22,
            marginTop: 25,
            marginBottom: 10,
          }}>
          {' '}
          Categories{' '}
        </Text>
        <Categories />
      </View>
 
      <View style={{
          flex: 4,
          marginLeft: 20,
        }}>
      <Text
          style={{
            fontWeight: 600,
            fontSize: 22,
            marginBottom: 10,
          }}>
          {' '}
          Suggested for you
        </Text>
        <Suggested />
      </View>

        

      <NavigationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
    fontFamily: 'Poppins',
  },
});

export default Home;
