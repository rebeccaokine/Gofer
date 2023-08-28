import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import FormTextInput from "../components/formTextInput";
import PasswordInput from "../components/passwordInput";
import "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Login = ({ navigation }) => {
  const [activeOption, setActiveOption] = useState("gofer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleToggle = () => {
    if (activeOption === "gofer") {
      setActiveOption("hirer");
    } else {
      setActiveOption("gofer");
    }
  };

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    // Clear previous errors
    setEmailError("");
    setPasswordError("");

    // Validate email and password
    if (!email) {
      setEmailError("Please enter email");
      return;
    }

    if (!password) {
      setPasswordError("Please enter password");
      return;
    }

    const auth = getAuth(); // Initialize Firebase auth instance
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Fetch the currently signed-in user
        const user = userCredential.user;

        // Authentication successful, navigate to the appropriate screen
        const displayName = user.displayName;

        // Additional information to store
        const username = displayName; // Use full display name
        const firstName = displayName.split(" ")[0]; // Extract first name
        const role = activeOption === "gofer" ? "gofer" : "hirer"; // Set role based on activeOption

        // Initialize Firebase Firestore instance
        const db = getFirestore();

        // Add user information to Firestore
        try {
          await addDoc(collection(db, "users"), {
            username, // Store the username
            email,
            role,
          });
        } catch (error) {
          console.error("Error adding document: ", error);
        }

        if (activeOption === "gofer") {
          navigation.navigate("GoferHome", { displayName: firstName }); // Pass only first name to GoferHome
        } else {
          navigation.navigate("HirerHome", { displayName: firstName }); // Pass only first name to HirerHome
        }
      })
      .catch((error) => {
        // Handle login errors
        if (error.code === "auth/invalid-email") {
          setEmailError("Please enter a valid email.");
        } else if (error.code === "auth/wrong-password") {
          setPasswordError("Please enter a valid password.");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeOption === "gofer" && styles.activeButton,
          ]}
          onPress={handleToggle}
        >
          <Text
            style={[
              styles.buttonText,
              activeOption === "gofer" && styles.activeButtonText,
            ]}
          >
            Gofer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeOption === "hirer" && styles.activeButton,
          ]}
          onPress={handleToggle}
        >
          <Text
            style={[
              styles.buttonText,
              activeOption === "hirer" && styles.activeButtonText,
            ]}
          >
            Hirer
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontSize: 32,
            fontFamily: "Poppins-SemiBold",
            marginHorizontal: 30,
            marginTop: 40,
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </View>

      <View>
        <FormTextInput
          placeholder="Email"
          onChangeText={setEmail}
          error={emailError}
        />
        <PasswordInput
          placeholder="Password"
          onChangeText={setPassword}
          error={passwordError}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 50,
          alignSelf: "flex-end",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginTop: 10,
              fontFamily: "Poppins-Regular",
            }}
          >
            {" "}
            Forgot Password?
          </Text>
        </Pressable>
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          padding: 15,
          backgroundColor: "#F8EBD3",
          borderRadius: 30,
          borderWidth: 2,
          borderColor: "black",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins-Medium",
          marginTop: 10,
          marginHorizontal: 40,
        }}
      >
        <Text style={{ fontSize: 20 }}>Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 16,
            color: "gray",
            textAlign: "center",
            marginTop: 20,
            fontFamily: "Poppins-Regular",
          }}
        >
          Don't have an account?
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginTop: 20,
              fontFamily: "Poppins-Regular",
            }}
          >
            {" "}
            Sign Up
          </Text>
        </Pressable>
      </View>

      {/* Add later
      <Text
        style={{
          fontSize: 16,
          color: 'gray',
          marginTop: 60,
          textAlign: 'center',
          fontFamily: 'Poppins-Regular',
        }}
      >
        Or connect with
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 40,
          marginTop: 15,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Onboarding2');
          }}
          style={{
            padding: 4,
            backgroundColor: '#F8EBD3',
            borderRadius: 30,
            borderWidth: 2,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
            marginRight: 10,
          }}
        >
          <AntDesign name="google" size={42} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Onboarding2');
          }}
          style={{
            padding: 6,
            backgroundColor: '#F8EBD3',
            borderRadius: 30,
            borderWidth: 2,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
            marginRight: 10,
          }}
        >
          <FontAwesome name="apple" size={42} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Onboarding2');
          }}
          style={{
            padding: 10,
            backgroundColor: '#F8EBD3',
            borderRadius: 30,
            borderWidth: 2,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
          }}
        >
          <FontAwesome name="facebook" size={42} color="black" />
        </TouchableOpacity>
      </View>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8EBD3",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    marginHorizontal: 50,
    marginTop: 60,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: "black",
    backgroundColor: "white",
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginHorizontal: 4,
  },
  buttonText: {
    color: "black",
    fontSize: 24,
  },
  activeButton: {
    backgroundColor: "black",
  },
  activeButtonText: {
    color: "white",
  },
});

export default Login;
