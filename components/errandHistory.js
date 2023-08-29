import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { firebase } from "../firebaseConfig";

const ErrandHistory = () => {
  const [errandHistory, setErrandHistory] = useState([]);

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
    const fetchErrandHistory = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          const userId = user.uid;
          const db = firebase.firestore();
          
          const errandHistoryRef = db
            .collection("users")
            .doc(userId)
            .collection("createErrand")
            .doc("errandHistory")
            .collection("errandHistory");
  
          const snapshot = await errandHistoryRef.get();
          const historyData = snapshot.docs.map((doc) => doc.data());
  
          setErrandHistory(historyData);
        }
      } catch (error) {
        console.error("Error fetching errand history:", error);
      }
    };
  
    fetchErrandHistory();
  }, []);
  

  return (
    <ScrollView showsVerticalScrollIndicator={false} vertical>
    {errandHistory.map((errand) => (
      <View style={styles.container} key={errand.id}>
        <View>
          <View style={[styles.row, styles.spaceBetween]}>
            <Text style={styles.date}>
              {errand.dateTime.toDate().toLocaleDateString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </Text>
            <Text style={[styles.date, styles.greenText]}>Completed</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {/* Main content */}
            <View style={styles.cardContent}>
              {/* Image */}
              <View style={styles.imageContainer}>
                <Image
                    source={categoryImageMappings[errand.category]}
                    style={styles.image}
                  />
              </View>
              {/* Text Content */}
              <View style={styles.textContainer}>
                {/* Task Title */}
                <Text style={styles.title}>{errand.title}</Text>

                {/* Location */}
                <View style={[styles.row, styles.locationRow]}>
                  <Octicons name="location" size={20} color="black" />
                  <Text style={styles.location}>{errand.location}</Text>
                </View>

                {/* Price and Rating */}
                <View style={[styles.row, styles.priceRow]}>
                  <Text style={[styles.price, styles.blueText]}>
                    GH₵ {errand.price}
                  </Text>
                  {/* Rating */}
                  <View style={styles.row}>
                    <AntDesign name="star" size={20} color="#FFA800" />
                    <Text style={styles.rating}>(3.5)</Text>
                  </View>
                </View>
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
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 350,
    height: 130,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  imageContainer: {
    width: 150,
    height: 110,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "rgba(0, 178, 255, 0.50)",
    marginRight: 5,
  },
  image: {
    width: 90,
    height: 90,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
  location: {
    fontSize: 16,
    fontWeight: "400",
  },
  priceRow: {
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    marginLeft: 5,
    marginRight: 20,
  },
  blueText: {
    color: "#00B2FF",
  },
  rating: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    marginLeft: 5,
    color: "gray",
  },
});

export default ErrandHistory;
