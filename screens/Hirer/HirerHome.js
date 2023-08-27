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
import * as Location from 'expo-location';
import axios from 'axios';

const HirerHome = ({ navigation, route }) => {
  const [userName, setUserName] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const displayName = route.params?.displayName || '';
    setUserName(displayName);

    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation(location);

        const apiKey = 'AIzaSyCoTiHaUtOLEJ4QHK1AN0Jlqn3B0_pMSc4'; 

        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${apiKey}`
        );
       
        if (response.data.results.length > 0) {
          const addressComponents = response.data.results[0].address_components;
          const cityComponent = addressComponents.find(
            (component) => component.types.includes('locality')
          );
          const countryComponent = addressComponents.find(
            (component) => component.types.includes('country')
          );
          
          const city = cityComponent ? cityComponent.long_name : '';
          const country = countryComponent ? countryComponent.long_name : '';
          
          setAddress(`${city}, ${country}`);
        }
      } else {
        console.error('Error requesting location permission');
      }
    };

    requestLocationPermission();

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
          <Text style={styles.locationText}> {address}</Text>
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
    flex: 13,
    marginLeft: 20,
  },
  suggestedHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    marginBottom: 10,
  },
});

export default HirerHome;