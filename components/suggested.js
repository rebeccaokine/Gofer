import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { firebase } from "../firebaseConfig";
import "firebase/firestore";

const Suggested = ({ navigation }) => {
  const [suggestedErrands, setSuggestedErrands] = useState([]);

  const categoryImageMappings = {
    "Home Cleaning": require("../assets/cleaning.png"),
    Laundry: require("../assets/laundry-machine.png"),
    Cooking: require("../assets/cooking.png"),
    Babysitting: require("../assets/babysitting.png"),
    Delivery: require("../assets/delivery.png"),
    "Pet Care": require("../assets/animal-care.png"),
    "Grocery Shopping": require("../assets/grocery.png"),
  };

  useEffect(() => {
    const fetchSuggestedErrands = async () => {
      try {
        const snapshot = await firebase
          .firestore()
          .collection("createErrand")
          .get();
        const allErrands = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const randomIndices = generateRandomIndices(allErrands.length, 5);
        const selectedErrands = randomIndices.map((index) => allErrands[index]);
        setSuggestedErrands(selectedErrands);
      } catch (error) {
        console.error("Error fetching errands:", error);
      }
    };

    fetchSuggestedErrands();
  }, []);

  const generateRandomIndices = (max, count) => {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  const handleBookButton = async (errand) => {
    try {
     
      const userUid = firebase.auth().currentUser.uid;

      // Add the errand to the 'upcomingErrands' subcollection of the user's document
      await firebase
        .firestore()
        .collection("users")
        .doc(userUid)
        .collection("upcomingErrands")
        .add({
          errandId: errand.id,
          category: errand.category,
          title: errand.title,
          location: errand.location,
          price: errand.price,
          dateTime: errand.dateTime,
        });

      // Navigate to the confirmation screen
      navigation.navigate("BookingConfirmation");
    } catch (error) {
      console.error("Error booking errand:", error);
    }
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View style={styles.container}>
        {suggestedErrands.map((errand) => (
          <View key={errand.id} style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={categoryImageMappings[errand.category]}
                style={styles.image}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{errand.title}</Text>
              <View style={styles.locationRow}>
                <Octicons name="location" size={18} color="black" />
                <Text style={styles.location}>{errand.location}</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.price}>GH₵ {errand.price}</Text>
                <View style={styles.priceRow}>
                      <AntDesign name="star" size={18} color="#FFA800" />
                      <Text style={styles.rating}>(4.3)</Text>
                </View>
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ErrandDetails", {
                      errandId: errand.id,
                    });
                  }}
                  style={styles.detailsButton}
                >
                  <Text>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                      onPress={() => {
                        handleBookButton(errand);
                      }}
                      style={styles.bookButton}
                    >
                      <Text>Book</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  cardContainer: {
    width: 220,
    height: 270,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "white",
    marginLeft: 10,
  },
  imageContainer: {
    width: 200,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "rgba(0, 178, 255, 0.50)",
    marginHorizontal: 9,
    marginTop: 20,
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  location: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    marginLeft: 5,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#00B2FF",
    marginRight: 20,
  },
  starRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rating: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    marginLeft: 5,
    color: "gray",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  detailsButton: {
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
  },
  bookButton: {
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});

export default Suggested;
