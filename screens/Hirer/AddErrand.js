import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Alert } from "react-native";
import { firebase } from '../../firebaseConfig';
import "firebase/firestore"; 

const AddErrand = ({ navigation }) => {
  const [category, setCategory] = useState("Home Cleaning");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState("");
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const publishErrand = async () => {
    try {
      const db = firebase.firestore(); // Get a reference to Firestore
      const errandData = {
        category,
        title,
        dateTime: firebase.firestore.Timestamp.fromDate(new Date(date)), // Convert to Firestore Timestamp
        price: parseFloat(price),
        location,
      };

      // Add the errand data to the "createErrand" collection
      await db.collection("createErrand").add(errandData);

      navigation.navigate("HirerHome"); // Navigate back to the home screen
    } catch (error) {
      console.error("Error publishing errand:", error);
    }
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

      // Show a modal alert if time is outside the range
      if (selectedHour < 5 || selectedHour >= 22) {
        Alert.alert(
          "Invalid Time",
          "Please select a time between 5 AM and 10 PM.",
          [{ text: "OK" }]
        );
      } else {
        const selectedMinute = selectedTime.getMinutes();
        const formattedTime = `${selectedHour
          .toString()
          .padStart(2, "0")}:${selectedMinute.toString().padStart(2, "0")}`;
        setTime(formattedTime);
      }

      setTimePickerVisible(false);
    } else {
      setTimePickerVisible(false);
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HirerHome");
            }}
            style={styles.backButton}
          >
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Add Errand</Text>
        </View>


        <View style={styles.contentContainer}>
          <View>
          <Text style={styles.label}>Category</Text>
          <Picker
            style={styles.picker}
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Home Cleaning" value="Home Cleaning" />
            <Picker.Item label="Laundry" value="Laundry" />
            <Picker.Item label="Babysitting" value="Babysitting" />
            <Picker.Item label="Pet Care" value="Pet Care" />
            <Picker.Item label="Cooking" value="Cooking" />
            <Picker.Item label="Grocery Shopping" value="Grocery Shopping" />
            <Picker.Item label="Delivery" value="Delivery" />
          </Picker>
          </View>

          <View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter errand title"
          />
          </View>
          
          <View>
          <Text style={styles.label}>Location</Text>
          <GooglePlacesAutocomplete
            placeholder="Enter location"
            onPress={(data) => {
              setLocation(data.description);
            }}
            query={{
              key: "AIzaSyCoTiHaUtOLEJ4QHK1AN0Jlqn3B0_pMSc4",
              language: "en", 
              components: "country:gh"
            }}
            styles={{
              container: { flex: 1 },
              textInputContainer: {
                backgroundColor: "rgba(0,0,0,0)",
              },
              textInput: {
                height: 50,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 2,
                borderRadius: 25,
                paddingHorizontal: 15,
                fontFamily: "Poppins-Regular",
                fontSize: 16,
              },
            }}
          />
          </View>

          <View style={styles.dateTimePriceContainer}>
            <View style={styles.dateInput}>
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                style={[styles.input, { justifyContent: "center" }]}
              >
                <Text style={{ fontSize: 16 }}>
                  {date.toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  })}
                </Text>
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
                style={[styles.input, { justifyContent: "center" }]}
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

            <View style={styles.priceInput}>
              <Text style={styles.label}>Price (GHC)</Text>
              <TextInput
                style={styles.input}
                value={price}
                onChangeText={(value) => {
                  if (value === "" || value.match(/^\d+$/)) {
                    setPrice(value);
                  }
                }}
                placeholder="Enter price"
                keyboardType="numeric"
              />
            </View>
          </View>

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
    backgroundColor: "#F8EBD3",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 40,
  },
  backButton: {
    marginRight: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: "Poppins-Medium",
    marginLeft: 20,
    color: "black",
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 30,
  },
  label: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  picker: {
    height: 40,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 25,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  publishButton: {
    backgroundColor: "#F8EBD3",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    marginHorizontal: 30,
    marginTop: 50,
  },
  publishButtonText: {
    fontSize: 24,
    fontFamily: "Poppins-Medium",
  },
  dateTimePriceContainer: {
    flexDirection: "row",
    marginTop: 65,
  },
  dateInput: {
    marginRight: 10,
  },
  TimeInput: {
    marginRight: 10,
  },
  priceInput: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    height: 200,
    marginTop: 20,
  },
  map: {
    flex: 1,
  },
});

export default AddErrand;
