import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const PasswordInput = ({ placeholder, value, onChangeText, error }) => {
  return (
    <View style={[styles.container, error && styles.containerError]}>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={true}
        placeholder={placeholder}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 40,
    fontFamily: "Poppins-Medium",
  },
  containerError: {
    borderColor: "red",
    borderRadius: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 30,
    padding: 15,
    fontSize: 18,
    backgroundColor: "white",
    paddingLeft: 30,

    color: "gray",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 15,
  },
});

export default PasswordInput;
