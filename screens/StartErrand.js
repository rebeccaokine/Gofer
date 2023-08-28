import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import NavigationBar from "../components/navigationBar";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const StartErrand = ({ navigation }) => {
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
    if (status === "granted") {
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
              navigation.navigate("UpcomingSchedule");
            }}
            style={styles.backButton}
          >
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Start Errand</Text>
        </View>

        <View style={styles.details}>
          {/**DESCRIPTION*/}
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                marginTop: 5,
                marginBottom: 30,
                fontSize: 22,
                fontFamily: "Poppins-Medium",
              }}
            >
              You are about to start Home Cleaning at East Legon Boundary Road.
            </Text>
          </View>

          <View style={styles.mapContainer}>
            <MapView style={styles.map} region={mapRegion}>
              <Marker
                coordinate={
                  userLocation || { latitude: 5.6037, longitude: -0.187 }
                }
                title="Start Location"
                description="Your errand starting point"
                pinColor="#00B2FF"
              />
            </MapView>
            <View style={styles.zoomButtons}>
              <TouchableOpacity onPress={zoomOut} style={styles.zoomButton}>
                <AntDesign name="minuscircle" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={zoomIn} style={styles.zoomButton}>
                <AntDesign name="pluscircle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginHorizontal: 40 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SharingLocation");
              }}
              style={{
                marginTop: 70,
                padding: 10,
                backgroundColor: "#F8EBD3",
                borderRadius: 30,
                borderWidth: 2,
                borderColor: "black",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Poppins-Medium",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                }}
              >
                Share live location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8EBD3",
  },
  contentContainer: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  backButton: {
    marginRight: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: "Poppins-Medium",
    marginLeft: 5,
  },
  mapContainer: {
    height: 280,
    borderRadius: 10,
    overflow: "hidden",
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    bottom: 50,
  },
  zoomButton: {
    backgroundColor: "#F8EBD3",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default StartErrand;
