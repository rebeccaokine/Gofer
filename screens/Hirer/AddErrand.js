import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Alert } from "react-native";
import { firebase } from "../../firebaseConfig";
import "firebase/firestore";

const Locations = [
  "Dstrkt 24",
  "Cantoments",
  "Trust Hospital",
  "Kwabenya KFC",
  "Makola Market",
  "Osu Oxford Street",
  "Accra Mall",
  "University of Ghana",
  "W.E.B. DuBois Center",
  "Jamestown Lighthouse",
  "Oxford Street, Osu",
  "National Museum",
  "Christiansborg Castle",
  "Achimota Forest",
  "Trade Fair Centre",
  "Jumia Head Office",
  "A&C Mall",
  "Sakumono",
];

const AddErrand = ({ navigation }) => {
  const [category, setCategory] = useState("Home Cleaning");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState("");
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const updateDatabaseWithCoordinates = async (locationName) => {
    try {
      const apiKey = "AIzaSyCoTiHaUtOLEJ4QHK1AN0Jlqn3B0_pMSc4";
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          locationName
        )}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.status === "OK") {
        const { lat, lng } = data.results[0].geometry.location;
        setCoordinates(new firebase.firestore.GeoPoint(lat, lng));
      }
    } catch (error) {
      console.error("Error updating database:", error);
    }
  };

  const handleLocationChange = (itemValue) => {
    setSelectedLocation(itemValue);
    setLocation(itemValue);
    updateDatabaseWithCoordinates(itemValue);
  };

  const publishErrand = async () => {
    try {
      const db = firebase.firestore();

      const authUser = firebase.auth().currentUser;
      if (authUser) {
        const creatorId = authUser.uid;
        const creatorName = authUser.displayName;

        const errandData = {
          category,
          title,
          dateTime: firebase.firestore.Timestamp.fromDate(new Date(date)), // Convert to Firestore Timestamp
          price: parseFloat(price),
          location: selectedLocation,
          coordinates,
          creatorId, // Use the fetched creatorId here
          creatorName, // Use the fetched creatorName here
        };

        // Add the errand data to the "createErrand" collection
        await db.collection("createErrand").add(errandData);

        navigation.navigate("HirerHome"); // Navigate back to the home screen
      }
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
          <Picker
            selectedValue={selectedLocation}
            onValueChange={handleLocationChange}
            style={styles.picker}
          >
            <Picker.Item label="Select a location" value="" />
            {Locations.map((location, index) => (
              <Picker.Item key={index} label={location} value={location} />
            ))}
          </Picker>
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

        <TouchableOpacity onPress={publishErrand} style={styles.publishButton}>
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
    marginTop: 80,
  },
  publishButtonText: {
    fontSize: 24,
    fontFamily: "Poppins-Medium",
  },
  dateTimePriceContainer: {
    flexDirection: "row",
    marginTop: 10,
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
