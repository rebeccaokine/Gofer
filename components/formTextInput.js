import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FormTextInput = ({ placeholder,  value, onChangeText }) => {
 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 40,
    fontFamily: 'Poppins-Medium',
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
});

export default FormTextInput;
