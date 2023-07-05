import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TextLink = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 600,
  }
});

export default TextLink;
