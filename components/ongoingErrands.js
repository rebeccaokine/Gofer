import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import { firebase } from "../firebaseConfig";

const OngoingErrands = ({ navigation }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [ongoingErrands, setOngoingErrands] = useState([]);

  useEffect(() => {
    getLocationAsync();
    fetchOngoingErrands();
  }, []);

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
    }
  };

  const categoryImageMappings = {
    "Home Cleaning": require("../assets/cleaning.png"),
    "Laundry": require("../assets/laundry-machine.png"),
    "Cooking": require("../assets/cooking.png"),
    "Babysitting": require("../assets/babysitting.png"),
    "Delivery": require("../assets/delivery.png"),
    "Pet Care": require("../assets/animal-care.png"),
    "Grocery Shopping": require("../assets/grocery.png"),
  };

  const fetchOngoingErrands = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        const db = firebase.firestore();
        const userDocRef = db.collection("users").doc(user.uid);

        const snapshot = await userDocRef.collection("ongoingErrands").get();

        const errands = snapshot.docs.map((doc) => {
          const errandData = doc.data();
          return {
            id: doc.id,
            title: errandData.title,
            category: errandData.category,
            location: errandData.location,
          };
        });

        setOngoingErrands(errands);
      }
    } catch (error) {
      console.error("Error fetching ongoing errands:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {ongoingErrands.map((errand) => (
        <View style={styles.errandItem} key={errand.id}>
          <Image
            source={categoryImageMappings[errand.category]}
            style={styles.image}
          />
          <View style={styles.errandDetails}>
            <Text style={styles.errandTitle}>{errand.title}</Text>
            <Text style={styles.category}>{errand.category}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TrackLocation", {
                userLocation,
                destinationLocationName: errand.location,
              });
            }}
            style={styles.trackButton}
          >
            <Text style={styles.trackButtonText}>Track</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errandItem: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    paddingVertical: 10,
    marginHorizontal: 15,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  errandDetails: {
    flex: 1,
  },
  errandTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
  category: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "gray",
  },
  trackButton: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  trackButtonText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "black",
  },
});

export default OngoingErrands;
