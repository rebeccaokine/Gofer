import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const TrackLocation = ({ route }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);

  useEffect(() => {
    getLocationAsync();
    setDestinationLocation(route.params?.destinationLocationName);
  }, []);

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation?.latitude || 0,
          longitude: userLocation?.longitude || 0,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
      >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Your Location"
          />
        )}
        {destinationLocation && (
          <Marker
            coordinate={{
              latitude: destinationLocation.latitude,
              longitude: destinationLocation.longitude,
            }}
            title="Destination"
          />
        )}
      </MapView>
      <Text style={styles.destinationText}>
        Destination: {destinationLocation}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  destinationText: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 16,
  },
});

export default TrackLocation;
