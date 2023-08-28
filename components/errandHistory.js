import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ErrandHistory = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} vertical>
      <View style={styles.container}>
        {/* Start of the first view */}
        {/* Date and Status */}
        <View style={[styles.row, styles.spaceBetween]}>
          <Text style={styles.date}>Monday, 20th August</Text>
          <Text style={[styles.date, styles.greenText]}>Completed</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {/* Main content */}
          <View style={styles.cardContent}>
            {/* Image */}
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/laundry-machine.png")}
                style={styles.image}
              />
            </View>
            {/* Text Content */}
            <View style={styles.textContainer}>
              {/* Task Title */}
              <Text style={styles.title}>Wash my clothes</Text>

              {/* Location */}
              <View style={[styles.row, styles.locationRow]}>
                <Octicons name="location" size={20} color="black" />
                <Text style={styles.location}> Mile 7, Achimota</Text>
              </View>

              {/* Price and Rating */}
              <View style={[styles.row, styles.priceRow]}>
                <Text style={[styles.price, styles.blueText]}>GH₵ 200</Text>
                <View style={styles.row}>
                  <AntDesign name="star" size={20} color="#FFA800" />
                  <Text style={styles.rating}>(3.2)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
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
    width: 120,
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
  locationRow: {
    marginTop: 4,
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
