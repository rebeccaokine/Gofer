import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RateHirer = ({ navigation }) => {
  const [rating, setRating] = useState(0);

  const submitFeedback = () => {
    console.log("User rating:", rating);
    // Here you can perform actions based on the user's rating, like sending it to a server.

    // Redirect back to the home screen
    navigation.navigate("GoferHome");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("GoferHome");
            }}
            style={styles.backButton}
          >
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Rate Hirer</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            paddingBottom: 5,
            borderBottomWidth: 0.5,
            borderBottomColor: "gray",
          }}
        >
          <MaterialCommunityIcons name="cash" size={42} color="black" />
          <Text style={{ fontSize: 24, fontFamily: "Poppins-Regular" }}>
            {" "}
            Cash{"                           "}₵200
          </Text>
        </View>

        <Image source={require("../assets/avatar.jpeg")} style={styles.image} />

        <View style={{ marginTop: 5 }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins-Regular",
              fontSize: 24,
            }}
          >
            How was your hirer?
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            {[1, 2, 3, 4, 5].map((starIndex) => (
              <TouchableOpacity
                key={starIndex}
                onPress={() => setRating(starIndex)}
              >
                <AntDesign
                  name="star"
                  size={40}
                  color={rating >= starIndex ? "#FFA800" : "#ABA6A6"}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            ))}
          </View>

          {rating > 0 && (
            <View style={styles.feedbackContainer}>
              <Text
                style={{
                  fontSize: 28,
                  fontFamily: "Poppins-Medium",
                  textAlign: "center",
                  color: "black",
                  paddingTop: 20,
                }}
              >
                All Done
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins-Regular",
                  textAlign: "center",
                  color: "black",
                  paddingTop: 10,
                  paddingBottom: 60,
                }}
              >
                Thanks for your feedback
              </Text>
            </View>
          )}

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={submitFeedback}
              style={{
                flex: 1,
                padding: 10,
                backgroundColor: "#F8EBD3",
                borderRadius: 30,
                borderWidth: 2,
                borderColor: "black",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Poppins-Medium",
                marginTop: 140,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                }}
              >
                Back to Home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    marginLeft: 25,
    color: "black",
  },
  image: {
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 110,
    marginTop: 110,
    marginBottom: 20,
  },
  feedbackContainer: {
    marginTop: 30,
  },
});

export default RateHirer;
