import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = () => {
  const [otp, setOTP] = useState('');

  const handleOTPChange = (text) => {
    // Limit input to 4 characters
    if (text.length <= 4) {
      setOTP(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={handleOTPChange}
        keyboardType="numeric"
        maxLength={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    width: 50,
    textAlign: 'center',
  },
});

export default OTPInput;
