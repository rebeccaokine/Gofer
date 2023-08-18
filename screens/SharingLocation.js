import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const SharingLocation = ({ navigation }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 5.6037,
    longitude: -0.187,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
      setMapRegion({
        ...mapRegion,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  };

  const zoomIn = () => {
    setMapRegion({
      ...mapRegion,
      latitudeDelta: mapRegion.latitudeDelta / 2,
      longitudeDelta: mapRegion.longitudeDelta / 2,
    });
  };

  const zoomOut = () => {
    setMapRegion({
      ...mapRegion,
      latitudeDelta: mapRegion.latitudeDelta * 2,
      longitudeDelta: mapRegion.longitudeDelta * 2,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UpcomingSchedule');
            }}
            style={styles.backButton}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Sharing Location</Text>
        </View>

        <View style={styles.details}>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={mapRegion}>
              <Marker
                coordinate={userLocation || { latitude: 5.6037, longitude: -0.187 }}
                title="Current Location"
                description="Your current location"
                pinColor="#00B2FF"
              />
            </MapView>
          </View>

          <View style={styles.zoomButtons}>
            <View style={{marginRight: 85}}>
            <TouchableOpacity onPress={zoomOut} style={styles.zoomButton}>
              <AntDesign name="minuscircle" size={24} color="black" />
            </TouchableOpacity>
            </View>
            <View style={{marginLeft: 60}}>
            <TouchableOpacity onPress={zoomIn} style={styles.zoomButton}>
              <AntDesign name="pluscircle" size={24} color="black" />
            </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginHorizontal: 40 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CompleteTask');
              }}
              style={{
                marginTop: 12,
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
                Complete Task
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
  contentContainer: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
  mapContainer: {
    height: 600,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 30,
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
  },
  zoomButtons: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 50,
    right: 60,
  },
  zoomButton: {
    backgroundColor: '#F8EBD3',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default SharingLocation;
