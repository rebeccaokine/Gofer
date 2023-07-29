import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import NavigationBar from '../../components/navigationBar';
import SearchButton from '../../components/searchButton';
import Categories from '../../components/categories';
import Suggested from '../../components/suggested';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const GoferHome = ({navigation}) => {
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
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Hello, Naa
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Onboarding2');
            }}
            style={{
            }}>
            <Ionicons
              name="notifications-circle-outline"
              size={37}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Octicons name="location" size={20} color="black" />
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-Medium',
            }}>
            {' '}
            Accra, Ghana{' '}
          </Text>
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
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
            marginTop: 15,
            marginBottom: 5,
          }}>
          {' '}
          Categories{' '}
        </Text>
        <Categories navigation={navigation} />
      </View>

      <View
        style={{
          flex: 4,
          marginLeft: 20,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
            marginBottom: 10,
            marginTop: 10,
          }}>
          Suggested for you
        </Text>
        <Suggested navigation={navigation}/>
      </View>

      <NavigationBar/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
  },
});

export default GoferHome;
