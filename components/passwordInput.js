import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const PasswordInput = ({ placeholder }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
        placeholder={placeholder}
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
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    padding: 15,
    fontSize: 18,
    backgroundColor: 'white',
    paddingLeft: 30,
    fontFamily: 'Poppins-Medium',
    color: 'gray',
  },
});

export default PasswordInput;
