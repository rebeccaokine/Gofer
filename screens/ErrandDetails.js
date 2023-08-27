import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { firebase } from "../firebaseConfig";
import "firebase/firestore";
import Geocoder from "react-native-geocoding";

Geocoder.init("AIzaSyCoTiHaUtOLEJ4QHK1AN0Jlqn3B0_pMSc4");
const ErrandDetails = ({ route, navigation }) => {
  const { errandId } = route.params;
  const [errandData, setErrandData] = useState({});
  const [hirerName, setCreatorName] = useState("");
  const [resolvedAddress, setResolvedAddress] = useState("");

  const { BookErrand } = require("../components/errandUtils");

  useEffect(() => {
    const fetchErrandData = async () => {
      try {
        const errandRef = firebase
          .firestore()
          .collection("createErrand")
          .doc(errandId);
        const errandDoc = await errandRef.get();
        if (errandDoc.exists) {
          const fetchedErrandData = errandDoc.data();
          setErrandData(fetchedErrandData);

          // Fetch the hirer's name directly from the fetched errand data
          const hirerName = fetchedErrandData.creatorName;
          setCreatorName(hirerName);
        }
        // Perform reverse geocoding
        if (errandData.coordinates) {
          const response = await Geocoder.from(
            errandData.coordinates.latitude,
            errandData.coordinates.longitude
          );
          const address = response.results[0].formatted_address;
          setResolvedAddress(address);
        }
      } catch (error) {
        console.error("Error fetching errand data:", error);
      }
    };
    fetchErrandData();
  }, [errandId]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("GoferHome");
            }}
            style={styles.backButton}
          >
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Errand Details</Text>
        </View>

        {/**Map view 
        <View style={styles.mapContainer}>
          <MapView style={styles.map} initialRegion={mapRegion}>
            {errandData.location && (
              <Marker
                coordinate={mapRegion}
                title={errandData.location}
                description={resolvedAddress || 'Loading...'} // Use resolved address or loading message
              />
            )}
          </MapView>
        </View>
        */}
       

        <View style={styles.hirerInformation}>
          <View>
            <View style={styles.hirerNameContainer}>
              <Text style={styles.hirerNameText}>Hirer Name</Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("ViewHirerProfile", {
                    hirerName: hirerName,
                  });
                }}
              >
                <Text style={styles.viewProfileText}>View Profile</Text>
              </Pressable>
            </View>
            <Text style={styles.hirerName}>{hirerName}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Title</Text>
            <Text style={styles.infoText}>{errandData.title}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Location</Text>
            <Text style={styles.infoText}>{errandData.location}</Text>
          </View>
          <View style={styles.dateTimeContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.infoTitle}>Date</Text>
              <Text style={styles.infoText}>
                {errandData.dateTime &&
                  errandData.dateTime.toDate().toLocaleDateString()}
              </Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.infoTitle}>Time</Text>
              <Text style={styles.infoText}>
                {errandData.dateTime &&
                  errandData.dateTime.toDate().toLocaleTimeString()}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.infoTitle}>Price</Text>
              <Text style={styles.infoText}>{errandData.price}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              const errand = {
                id: errandId,
                category: errandData.category,
                title: errandData.title,
                location: errandData.location,
                price: errandData.price,
                dateTime: errandData.dateTime,
              };
              BookErrand(errand, navigation);
            }}
            style={styles.bookButton}
          >
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8EBD3",
  },
  contentContainer: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginHorizontal: 20,
  },
  backButton: {
    marginRight: 30,
  },
  title: {
    fontSize: 32,
    color: "black",
    fontWeight: "400",
  },
  mapContainer: {
    height: 260,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 20,
  },
  map: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 30,
  },
  hirerInformation: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
  },
  hirerNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hirerNameText: {
    fontSize: 20,
    color: "grey",
    fontFamily: "Poppins-SemiBold",
  },
  viewProfileText: {
    color: "#00B2FF",
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
  hirerName: {
    marginTop: 5,
    fontSize: 24,
    fontFamily: "Poppins-Regular",
  },
  infoContainer: {
    marginTop: 10,
  },
  infoTitle: {
    fontSize: 20,
    color: "grey",
    fontFamily: "Poppins-Medium",
  },
  infoText: {
    marginTop: 5,
    fontSize: 22,
    fontFamily: "Poppins-Regular",
  },
  dateTimeContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateContainer: {
    flexDirection: "column",
  },
  timeContainer: {
    flexDirection: "column",
  },
  priceContainer: {
    flexDirection: "column",
  },
  bookButton: {
    marginTop: 110,
    padding: 10,
    backgroundColor: "#F8EBD3",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  bookButtonText: {
    fontSize: 24,
  },
});

export default ErrandDetails;
