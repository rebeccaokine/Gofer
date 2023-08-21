import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AddErrand = ({ navigation }) => {
  const [category, setCategory] = useState('Home Cleaning');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState('');
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const publishErrand = () => {
    // Perform actions to publish the errand
    // For example, make an API call
    navigation.navigate('HirerHome'); // Navigate back to the home screen
  };

  const handleDateChange = (selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (selectedTime) => {
    if (selectedTime) {
      const selectedHour = selectedTime.getHours();
      const selectedMinute = selectedTime.getMinutes();

      // Enforce time range from 5 AM to 10 PM
      if (selectedHour < 5 || (selectedHour === 22 && selectedMinute > 0)) {
        console.warn('Please select a time between 5 AM and 10 PM.');
      } else {
        const formattedTime = `${selectedHour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')}`;
        setTime(formattedTime);
      }
    }
    setTimePickerVisible(false);
  };

  return (
    <View style={styles.container} >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HirerHome');
            }}
            style={styles.backButton}
          >
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
            {/* Your Picker Items */}
          </Picker>

          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter errand title"
          />

          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Enter location"
          />

          <View style={styles.dateTimeContainer}>
            <View style={styles.dateInput}>
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                style={[styles.input, { justifyContent: 'center' }]}
              >
                <Text style={{ fontSize: 16 }}>{date.toDateString()}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={showDatePicker}
                mode="date"
                onConfirm={handleDateChange}
                onCancel={() => setShowDatePicker(false)}
              />
            </View>

            <View style={styles.TimeInput}>
              <Text style={styles.label}>Time</Text>
              <TouchableOpacity
                onPress={() => setTimePickerVisible(true)}
                style={[styles.input, { justifyContent: 'center' }]}
              >
                <Text style={{ fontSize: 18 }}>{time}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeChange}
                onCancel={() => setTimePickerVisible(false)}
              />
            </View>
          </View>

          <Text style={styles.label}>Price (GHC)</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={(value) => {
              if (value === '' || value.match(/^\d+$/)) {
                setPrice(value);
              }
            }}
            placeholder="Enter price"
            keyboardType="numeric"
          />

          <TouchableOpacity
            onPress={publishErrand}
            style={styles.publishButton}
          >
            <Text style={styles.publishButtonText}>Publish</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
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
    marginBottom: 10,
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
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddErrand;
