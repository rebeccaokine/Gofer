import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HirerProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HirerHome");
            }}
            style={styles.backButton}
          >
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Profile</Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/avatar.jpeg")}
            style={styles.image}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Poppins-Medium",
              marginBottom: 20,
            }}
          >
            Dereck Griffin
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
          style={styles.optionContainer}
        >
          <View style={styles.optionIconContainer}>
            <Octicons name="pencil" size={24} color="black" />
          </View>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("VerifyProfile");
          }}
          style={styles.optionContainer}
        >
          <View style={styles.optionIconContainer}>
            <FontAwesome5 name="check-circle" size={24} color="black" />
          </View>
          <Text style={styles.optionText}>Verify Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.optionContainer}
        >
          <View style={styles.optionIconContainer}>
            <Ionicons name="card-outline" size={26} color="black" />
          </View>
          <Text style={styles.optionText}>View Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.optionIconContainer}>
            <SimpleLineIcons name="settings" size={24} color="black" />
          </View>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.optionContainer}
        >
          <View style={styles.optionIconContainer}>
            <AntDesign name="logout" size={24} color="black" />
          </View>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.details}></View>
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
    marginVertical: 20,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    marginHorizontal: 20,
  },
  backButton: {
    marginRight: 40,
  },
  title: {
    fontSize: 32,
    color: "black",
    fontFamily: "Poppins-Medium",
    marginLeft: 45,
    marginVertical: 20,
  },
  optionContainer: {
    flexDirection: "row",
    marginTop: 15,
    padding: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 30,
    marginHorizontal: 20,
  },
  optionIconContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  optionText: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    marginLeft: 15,
  },
  image: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 110,
    marginBottom: 5,
  },
});

export default HirerProfile;
