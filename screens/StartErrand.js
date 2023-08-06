import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';
import NavigationBar from '../components/navigationBar';
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const StartErrand = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UpcomingSchedule');
            }}
            style={styles.backButton}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Start Errand</Text>
        </View>

        <View style={styles.details}>
          {/**DESCRIPTION*/}
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                marginTop: 5,
                marginBottom: 30,
                fontSize: 22,
                fontFamily: 'Poppins-Medium',
              }}>
              You are about to start Home Cleaning at East Legon Boundary Road.
            </Text>
          </View>

          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 5.6037,
                longitude: -0.187,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                coordinate={{ latitude: 5.6037, longitude: -0.187 }}
                title="Accra"
                description="Capital city of Ghana"
              />
            </MapView>
          </View>

          <View style={{marginHorizontal: 40}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SharingLocation');
              }}
              style={{
                marginTop: 70,
                padding: 10,
                backgroundColor: '#F8EBD3',
                borderRadius: 30,
                borderWidth: 2,
                borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Poppins-Medium',
              }}>
              <Text
                style={{
                  fontSize: 24,
                }}>
                Share live location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
  },
  contentContainer: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  backButton: {
    marginRight: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
  },
  mapContainer: {
    height: 230,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 30,
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default StartErrand;
