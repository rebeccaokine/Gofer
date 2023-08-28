import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { firebase } from "../firebaseConfig";

const UpcomingHirerErrands = ({}) => {
  const [upcomingErrands, setUpcomingErrands] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("createErrand")
      .get()
      .then((querySnapshot) => {
        const errands = [];
        querySnapshot.forEach((doc) => {
          const errandData = doc.data();
          errands.push({
            id: doc.id,
            category: errandData.category,
            title: errandData.title,
            dateTime: errandData.dateTime.toDate(),
          });
        });
        errands.sort((a, b) => a.dateTime - b.dateTime);
        setUpcomingErrands(errands);
      })
      .catch((error) => {
        console.error("Error fetching errands:", error);
      });
  }, []);

  const categoryImageMappings = {
    "Home Cleaning": require("../assets/cleaning.png"),
    Laundry: require("../assets/laundry-machine.png"),
    Cooking: require("../assets/cooking.png"),
    Babysitting: require("../assets/babysitting.png"),
    Delivery: require("../assets/delivery.png"),
    "Pet Care": require("../assets/animal-care.png"),
    "Grocery Shopping": require("../assets/grocery.png"),
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View style={styles.container}>
        {upcomingErrands.map((errand) => (
          <View style={styles.categoryItem} key={errand.id}>
            <Image
              source={categoryImageMappings[errand.category]}
              style={styles.image}
            />
            <Text style={styles.shortDescription}>{errand.title}</Text>
            <Text style={styles.categoryTitle}>{errand.category}</Text>
            <Text style={styles.dateTime}>
              {errand.dateTime.toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </Text>
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
  categoryItem: {
    width: 200,
    height: 230,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "rgba(0, 178, 255, 0.50)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  shortDescription: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
  },
  dateTime: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});

export default UpcomingHirerErrands;
