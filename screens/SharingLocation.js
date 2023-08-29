import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import MapViewDirections from "react-native-maps-directions";
import { firebase } from "../firebaseConfig";
import "firebase/firestore";

const CustomMarker = ({ coordinate, title, description }) => (
  <Marker coordinate={coordinate} title={title} description={description}>
    <View style={styles.customMarkerContainer}>
      <Text style={styles.customMarkerText}>{description}</Text>
    </View>
  </Marker>
);

const SharingLocation = ({ navigation, route }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({ });
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
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      });

      const destinationLocationName = route.params?.destinationLocationName;

      // Fetching route directions
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
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${encodedDestination}&key=${apiKey}&center=${origin.latitude},${origin.longitude}&zoom=6&size=600x300&maptype=roadmap`;

    try {
      const response = await axios.get(url);
      return response.data.routes[0];
    } catch (error) {
      console.error("Error fetching directions:", error);
      return null;
    }
  };

  const calculateETA = () => {
    if (routeDirections && routeDirections.legs && routeDirections.legs[0]) {
      const durationInSeconds = routeDirections.legs[0].duration.value;
      const minutes = Math.floor(durationInSeconds / 60);
      return `${minutes} min `;
    }
    return "";
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
              strokeWidth={8}
              strokeColor="rgba(0, 178, 255, 0.3)"
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

            {/* Custom marker at destination with ETA */}
            <CustomMarker
              coordinate={{
                latitude: routeDirections.legs[0].end_location.lat,
                longitude: routeDirections.legs[0].end_location.lng,
              }}
              title="Destination"
              description={`${calculateETA()}`}
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
  customMarkerContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 9, 
  },
  customMarkerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default SharingLocation;
