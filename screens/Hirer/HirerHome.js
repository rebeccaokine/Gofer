import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import HirerNavbar from '../../components/hirernavbar';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import UpcomingHirerErrands from '../../components/upcomingHirerErrands';
import OngoingErrands from '../../components/ongoingErrands';

const HirerHome = ({ navigation }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Simulating Firebase auth state change
    const fakeUser = { displayName: 'Rebecca Okine' };

    // User is logged in, set the user's name
    setUserName(fakeUser.displayName);

    // Unsubscribe when the component is unmounted
    return () => {
      // Cleanup if needed
    };
  }, []);

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
      <View style={styles.suggestedContainer}>
        <Text style={styles.suggestedHeader}>Upcoming Errands</Text>
        <UpcomingHirerErrands />
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesHeader}>Ongoing Errands</Text>
        <OngoingErrands />
      </View>

      

      <HirerNavbar />
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
    flex: 15,
    marginLeft: 20,
  },
  categoriesHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginBottom: 5,
  },
  suggestedContainer: {
    flex: 12,
    marginLeft: 20,
  },
  suggestedHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginBottom: 10,
  },
});

export default HirerHome;