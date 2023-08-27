import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { firebase } from '../firebaseConfig';
import "firebase/firestore"; 

const Locations = [
  "Dstrkt 24",
  "Cantoments",
  "Trust Hospital",
  "Kwabenya KFC",
  "Makola Market",
  "Osu Oxford Street",
  "Accra Mall",
  "University of Ghana",
  "Legon Botanical Gardens",
  "W.E.B. DuBois Center",
  "Jamestown Lighthouse",
  "Oxford Street, Osu",
  "National Museum",
  "Christiansborg Castle",
  "Achimota Forest",
  "Palace Mall",
  "Trade Fair Centre",
  "Jumia Head Office",
  "A&C Mall",
  "Sakumono",
];

const LocationInput = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const updateDatabaseWithCoordinates = async (locationName) => {
    try {
      const apiKey = "AIzaSyCoTiHaUtOLEJ4QHK1AN0Jlqn3B0_pMSc4";
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          locationName
        )}&key=${apiKey}`
      );
      const data = await response.json();
      
      if (data.status === "OK") {
        const { lat, lng } = data.results[0].geometry.location;
        const coordinates = new firebase.firestore.GeoPoint(lat, lng);

        // Update the database with location name and coordinates
        const errandRef = firebase.firestore().collection("createErrand");
        await errandRef.add({
          location: locationName,
          coordinates: coordinates,
          // ... other errand fields
        });
      }
    } catch (error) {
      console.error("Error updating database:", error);
    }
  };

  const handleLocationChange = (itemValue) => {
    setSelectedLocation(itemValue);
    updateDatabaseWithCoordinates(itemValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Location</Text>
      <Picker
        selectedValue={selectedLocation}
        onValueChange={handleLocationChange}
        style={styles.textInput}
      >
        <Picker.Item label="Select a location" value="" />
        {Locations.map((location, index) => (
          <Picker.Item key={index} label={location} value={location} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    marginBottom: 5,
  },
  textInput: {
    height: 50,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});

export default LocationInput;
