import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FormTextInput = ({ placeholder }) => {
  const [text, setText] = useState('');

  const handleChangeText = (value) => {
    setText(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={text}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 40,
    fontFamily: 'Poppins',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    padding: 15,
    fontSize: 18,
    backgroundColor: 'white',
    paddingLeft: 30,
    fontWeight: '500',
    color: 'gray',
  },
});

export default FormTextInput;
