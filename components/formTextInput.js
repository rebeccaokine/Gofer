import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const FormTextInput = ({ placeholder, value, onChangeText, error }) => {
  return (
    <View style={[styles.container, error ? styles.containerError : null]}>
      <TextInput
        style={[styles.textInput, error ? styles.textInputError : null]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 40,
    fontFamily: 'Poppins-Medium',
  },
  containerError: {
    borderColor: 'red',
    borderRadius: 30,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    padding: 15,
    fontSize: 18,
    backgroundColor: 'white',
    paddingLeft: 30,
    color: 'gray',
  },
  textInputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 15,
  },
});

export default FormTextInput;

