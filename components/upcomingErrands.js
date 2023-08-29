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

const UpcomingErrands = ({ navigation }) => {
  const [upcomingErrands, setUpcomingErrands] = useState([]);

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
    // Fetch upcoming errands from the subcollection within the user's document
    const fetchUpcomingErrands = async () => {
      try {
        const user = firebase.auth().currentUser; // Get the currently logged in user
        if (user) {
          const userDocRef = firebase
            .firestore()
            .collection("users")
            .doc(user.uid);

          const snapshot = await userDocRef.collection("upcomingErrands").get();

          const errands = snapshot.docs.map((doc) => {
            const errandData = doc.data();
            return {
              id: doc.id,
              category: errandData.category,
              title: errandData.title,
              dateTime: errandData.dateTime
                ? errandData.dateTime.toDate()
                : null,
              price: errandData.price,
              location: errandData.location,
            };
          });

          setUpcomingErrands(errands);
        }
      } catch (error) {
        console.error("Error fetching upcoming errands:", error);
      }
    };

    fetchUpcomingErrands();
  }, []);

  const handleCancelErrand = async (errandId) => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        const userDocRef = firebase
          .firestore()
          .collection("users")
          .doc(user.uid);
        await userDocRef.collection("upcomingErrands").doc(errandId).delete();

        setUpcomingErrands((prevErrands) =>
          prevErrands.filter((errand) => errand.id !== errandId)
        );
      }
    } catch (error) {
      console.error("Error canceling errand:", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} vertical>
      {upcomingErrands
        .sort((a, b) => a.dateTime - b.dateTime)
        .map((errand) => (
          <View style={styles.container} key={errand.id}>
            <View>
              <View style={[styles.row, styles.spaceBetween]}>
                <Text style={styles.date}>
                  {errand.dateTime.toLocaleDateString(undefined, {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </Text>
                <Text style={[styles.date, styles.greenText]}>
                  {errand.dateTime.toLocaleTimeString(undefined, {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={categoryImageMappings[errand.category]}
                    style={styles.image}
                  />
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.title}>{errand.title}</Text>
                  <View style={styles.row}>
                    <Octicons name="location" size={18} color="black" />
                    <Text style={styles.location}>{errand.location}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.price}>GH₵ {errand.price}</Text>
                    <View style={styles.row}>
                      <AntDesign name="star" size={18} color="#FFA800" />
                      <Text style={styles.rating}>(4.3)</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => handleCancelErrand(errand.id)}
                    >
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={async () => {
                        try {
                          const user = firebase.auth().currentUser;
                          if (user) {
                            const db = firebase.firestore();
                            const userDocRef = db
                              .collection("users")
                              .doc(user.uid);
                            
                            // Get the errand document reference                                                  
                            const errandRef = userDocRef
                              .collection("upcomingErrands")
                              .doc(errand.id);
                        
                            // Fetch the errand data before starting
                            const errandDoc = await errandRef.get();
                            if (errandDoc.exists) {
                              const errandData = errandDoc.data();

                              await userDocRef
                              .collection("ongoingErrands")
                              .add(errandData);

                              // Add the started errand to errandHistory subcollection
                              await userDocRef
                                .collection("createErrand")
                                .doc("errandHistory")
                                .collection("errandHistory")
                                .add(errandData);

                              // Delete the started errand from upcomingErrands subcollection
                              await errandRef.delete();

                              console.log(
                                "Errand added to errandHistory and removed from upcomingErrands on start"
                              );

                              // Navigate to the SharingLocation screen
                              navigation.navigate("SharingLocation", {
                                destinationLocationName: errand.location,
                              });
                            } else {
                              console.log(
                                "Errand not found in upcomingErrands subcollection"
                              );
                            }
                          }
                        } catch (error) {
                          console.error("Error starting errand:", error);
                        }
                      }}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  date: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
  greenText: {
    color: "#26AD5C",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "white",
    paddingVertical: 5,
    flexDirection: "row",
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
    marginLeft: 20,
    marginRight: 5,
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
    marginTop: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
  location: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    marginLeft: 5,
  },
  price: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    marginLeft: 5,
    marginRight: 20,
    color: "#00B2FF",
  },
  rating: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    marginLeft: 5,
    color: "gray",
  },
  button: {
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
  },
  buttonText: {
    fontFamily: "Poppins-Medium",
  },
});

export default UpcomingErrands;
