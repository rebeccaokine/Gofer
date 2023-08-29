import React from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Onboarding1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/multitasking.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.bottomSpace}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Poppins-Bold",
            textAlign: "left",
            color: "black",
            paddingBottom: 20,
          }}
        >
          Welcome To Gofer
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins-Regular",
            textAlign: "left",
            color: "black",
            paddingBottom: 40,
          }}
        >
          Effortlessly delegate your tasks and errands. Let Gofer be your
          personal assistant, helping you save time and stay organised.
        </Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Onboarding2");
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
              fontFamily: "Poppins-Regular",
            }}
          >
            <Text
              style={{
                fontSize: 24,
              }}
            >
              Next
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
  image: {
    flex: 1,
    alignSelf: "center",
    paddingTop: 360,
    width: 400,
  },
  bottomSpace: {
    flex: 3,
    marginHorizontal: 30,
  },
});

export default Onboarding1;
