import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import MapViewDirections from "react-native-maps-directions";
import { firebase } from "../firebaseConfig";
import "firebase/firestore"; 

const SharingLocation = ({ navigation, route }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 5.6037,
    longitude: -0.187,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  const [routeDirections, setRouteDirections] = useState(null);
  const GOOGLE_MAPS_APIKEY = "AIzaSyCoTiHaUtOLEJ4QHK1AN0Jlqn3B0_pMSc4"; 

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
      setMapRegion({
        ...mapRegion,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const destinationLocationName = route.params?.destinationLocationName;

      // Fetch route directions
      const directions = await fetchDirections(
        location.coords,
        destinationLocationName,
        GOOGLE_MAPS_APIKEY
      );
      setRouteDirections(directions);
    }
  };

  const fetchDirections = async (origin, destinationName, apiKey) => {
    const encodedDestination = encodeURIComponent(destinationName);
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${encodedDestination}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      return response.data.routes[0];
    } catch (error) {
      console.error("Error fetching directions:", error);
      return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Current Location"
            description="Your current location"
            pinColor="#00B2FF"
          />
        )}
        {userLocation && routeDirections && (
          <>
            <MapViewDirections
              origin={userLocation}
              destination={route.params.destinationLocationName}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="blue"
              directions={routeDirections}
            />
            <Marker
              coordinate={{
                latitude: routeDirections.legs[0].start_location.lat,
                longitude: routeDirections.legs[0].start_location.lng,
              }}
              title="Origin"
              description="Starting point"
            />
            <Marker
              coordinate={{
                latitude: routeDirections.legs[0].end_location.lat,
                longitude: routeDirections.legs[0].end_location.lng,
              }}
              title="Destination"
              description={route.params.destinationLocationName}
            />
          </>
        )}
      </MapView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CompleteTask");
        }}
        style={styles.completeButton}
      >
        <Text style={styles.buttonText}>Complete Task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  completeButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: "#F8EBD3",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "black",
  },
  buttonText: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default SharingLocation;
