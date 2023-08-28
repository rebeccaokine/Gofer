import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Verify Profile</Text>
        </View>

        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: "Poppins-Medium" }}>
            Confirm your identity. Take a photo of your Ghana Card. Make sure
            your profile name and picture match with the name on your card
          </Text>
        </View>

        <View style={styles.details}></View>

        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ScanID");
            }}
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
              marginTop: 70,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 24,
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
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
    marginBottom: 30,
    marginHorizontal: 10,
  },
  backButton: {
    marginRight: 30,
  },
  title: {
    fontSize: 32,
    color: "black",
    fontFamily: "Poppins-Medium",
  },
  details: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
});

export default Profile;
