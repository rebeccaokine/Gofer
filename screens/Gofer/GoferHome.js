import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NavigationBar from '../../components/navigationBar';
import Categories from '../../components/categories';
import Suggested from '../../components/suggested';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const GoferHome = ({ navigation, route }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve the displayName from navigation parameters
    const displayName = route.params?.displayName || '';

    // Set the retrieved displayName as the user's name
    setUserName(displayName);

    // Unsubscribe when the component is unmounted
    return () => {
      // Cleanup if needed
    };
  }, [route.params?.displayName]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hello, {userName}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Onboarding2');
            }}
          >
            <Ionicons name="notifications-circle-outline" size={37} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.locationContainer}>
          <Octicons name="location" size={20} color="black" />
          <Text style={styles.locationText}> Accra, Ghana</Text>
        </View>

      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesHeader}>Categories</Text>
        <Categories navigation={navigation} />
      </View>

      <View style={styles.suggestedContainer}>
        <Text style={styles.suggestedHeader}>Suggested for you</Text>
        <Suggested navigation={navigation} />
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
  mainContainer: {
    flex: 2,
    marginVertical: 40,
    marginHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  locationContainer: {
    flexDirection: 'row',
  },
  locationText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  categoriesContainer: {
    flex: 14,
    marginLeft: 20,
  },
  categoriesHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
  },
  suggestedContainer: {
    flex: 18,
    marginLeft: 20,
  },
  suggestedHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default GoferHome;
