import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';

const AddErrand = ({ navigation }) => {
  const [category, setCategory] = useState('Home Cleaning');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const publishErrand = () => {
    // Perform actions to publish the errand
    // For example, make an API call
    navigation.navigate('HirerHome'); // Navigate back to the home screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HirerHome');
          }}
          style={styles.backButton}>
          <AntDesign name="leftcircleo" size={37} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Errand</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.label}>Category</Text>
        <Picker
          style={styles.picker}
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Home Cleaning" value="Home Cleaning" />
          <Picker.Item label="Laundry" value="Laundry" />
          <Picker.Item label="Babysitting" value="Babysitting" />
          {/* Add more category options here */}
        </Picker>

        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter errand title"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter errand description"
        />

        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="Enter errand date"
        />

        <Text style={styles.label}>Time</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={setTime}
          placeholder="Enter errand time"
        />

        <TouchableOpacity
          onPress={publishErrand}
          style={styles.publishButton}
        >
          <Text style={styles.publishButtonText}>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8EBD3',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 40,
      },
      backButton: {
        marginRight: 40,
      },
      title: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
        marginLeft: 20,
        color: 'black',
      },
      contentContainer: {
        flex: 1,
        marginHorizontal: 30,
        marginTop: 30,
      },
      label: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        marginBottom: 5,
      },
      input: {
        height: 50,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
      },
      picker: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 25,
        marginBottom: 10,
        fontSize: 16,
      },
      publishButton: {
        backgroundColor: '#F8EBD3',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        marginHorizontal: 30,
        marginTop: 40,
      },
      publishButtonText: {
        fontSize: 24,
        fontFamily: 'Poppins-Medium',
      }, 
});

export default AddErrand;
