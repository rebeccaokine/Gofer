import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OngoingErrands = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Ongoing Errand 1 */}
      <View style={styles.errandItem}>
        <Image
          source={require('../assets/cleaning.png')}
          style={styles.image}
        />
        <View style={styles.errandDetails}>
          <Text style={styles.errandTitle}>Home Cleaning</Text>
          <Text style={styles.category}>Home Cleaning</Text>
        </View>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track</Text>
        </TouchableOpacity>
      </View>

      {/* Ongoing Errand 2 */}
      <View style={styles.errandItem}>
        <Image
          source={require('../assets/laundry-machine.png')}
          style={styles.image}
        />
        <View style={styles.errandDetails}>
          <Text style={styles.errandTitle}>Laundry</Text>
          <Text style={styles.category}>Laundry</Text>
        </View>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track</Text>
        </TouchableOpacity>
      </View>

      {/* Ongoing Errand 3 */}
      <View style={styles.errandItem}>
        <Image
          source={require('../assets/cooking.png')}
          style={styles.image}
        />
        <View style={styles.errandDetails}>
          <Text style={styles.errandTitle}>Meal Prep</Text>
          <Text style={styles.category}>Cooking</Text>
        </View>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errandItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    paddingVertical: 10,
    marginHorizontal: 15,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  errandDetails: {
    flex: 1,
  },
  errandTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  category: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'gray',
  },
  trackButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  trackButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});

export default OngoingErrands;
