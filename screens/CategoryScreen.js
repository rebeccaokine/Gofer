import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import NavigationBar from "../components/navigationBar";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { firebase } from "../firebaseConfig";
import "firebase/firestore";

const CategoryScreen = ({ route, navigation }) => {
  const [filteredErrands, setFilteredErrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = route.params;

  const categoryImageMappings = {
    "Home Cleaning": require("../assets/cleaning.png"),
    "Laundry": require("../assets/laundry-machine.png"),
    "Cooking": require("../assets/cooking.png"),
    "Babysitting": require("../assets/babysitting.png"),
    "Delivery": require("../assets/delivery.png"),
    "Pet Care": require("../assets/animal-care.png"),
    "Grocery Shopping": require("../assets/grocery.png"),
  };

  useEffect(() => {
    const fetchFilteredErrands = async () => {
      try {
        const snapshot = await firebase
          .firestore()
          .collection("createErrand")
          .get();

        const allErrands = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const filteredErrands = allErrands.filter(
          (errand) => errand.category === category
        );
        setFilteredErrands(filteredErrands);
      } catch (error) {
        console.error("Error fetching errands:", error);
      }
    };

    fetchFilteredErrands();
  }, [category]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesSnapshot = await firebase
          .firestore()
          .collection("categories")
          .get();
        const categoriesData = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleBookButton = async (errand) => {
    try {
      // Replace 'userDocumentId' with the actual ID of the user's document
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("GoferHome");
          }}
          style={styles.backButton}
        >
          <AntDesign name="leftcircleo" size={37} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{category}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        <View style={styles.errandContainer}>
          {filteredErrands.map((errand) => {
            return (
              <View key={errand.id} style={styles.errandCard}>
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
                  </View>
                  <View style={styles.buttonRow}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ErrandDetails', { errandId: errand.id });
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
            );
          })}
        </View>
      </ScrollView>
      <NavigationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8EBD3",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    marginHorizontal: 20,
  },
  backButton: {
    marginRight: 2,
  },
  headerText: {
    flex: 1,
    fontSize: 32,
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "Poppins-Medium",
  },
  errandContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 20,
  },
  errandCard: {
    flexDirection: "row",
    width: 340,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  imageContainer: {
    width: 140,
    height: 130,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "rgba(0, 178, 255, 0.50)",
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
  locationRow: {
    flexDirection: "row",
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    marginLeft: 5,
  },
  priceRow: {
    flexDirection: "row",
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#00B2FF",
    marginLeft: 5,
    marginRight: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 3,
  },
  detailsButton: {
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
  },
  bookButton: {
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});

export default CategoryScreen;
