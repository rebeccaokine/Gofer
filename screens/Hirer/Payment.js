import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import HirerNavbar from '../../components/hirernavbar';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('cash');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
     <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginVertical: 40,
          }}>
         <TouchableOpacity
            onPress={() => {
              navigation.navigate('HirerHome');
            }}
            style={{
              marginRight: 70,
            }}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 32,
              color: 'black',
              textAlign: 'center',
              fontFamily: 'Poppins-Medium',
            }}>
            Payment
          </Text>
        </View>
      <View style={styles.paymentOption}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOptionChange('cash')}>
          <MaterialCommunityIcons name="cash" size={40} color="black" />
          <Text style={styles.optionText}>Cash                                    </Text>
          <RadioButton
            value="cash"
            status={selectedOption === 'cash' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('cash')}
            color="#00B2FF"
          />
        </TouchableOpacity>

        {/*<TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOptionChange('mobileMoney')}>
          <Image
            source={require('../../assets/momo.png')}
            style={{width: 60, height: 40,}}
          />
          <Text style={styles.optionText}>MTN Mobile Money       </Text>
          <RadioButton
            value="mobileMoney"
            status={selectedOption === 'mobileMoney' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('mobileMoney')}
            color="#00B2FF"
          />
        </TouchableOpacity>*/}
      </View>
      <HirerNavbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3', 
  },
  paymentOption: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
  },
});

export default Payment;
