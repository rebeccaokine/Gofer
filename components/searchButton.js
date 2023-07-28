import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchButton = ({ placeholder }) => {
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
      <Feather 
      name="search" 
      size={24} 
      color="black" 
      style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    fontFamily: 'Poppins',
    position: 'relative',
  },
  textInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    padding: 10,
    fontSize: 16,
    backgroundColor: 'white',
    paddingLeft: 50,
    fontFamily: 'Poppins-Regular',
    color: 'gray',
  },
  icon: {
    position: 'absolute',
    marginLeft: 10,
    marginRight: 30,
    left: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});

export default SearchButton;
