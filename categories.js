import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, Image, StyleSheet } from 'react-native';

const Categories = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View style={styles.container}>
        <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require('../assets/cleaning .png')}
            style={styles.image}
          />
          <Text style={styles.categoryTitle}>Home Cleaning</Text>
        </TouchableOpacity>
       
       <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require('../assets/cleaning .png')}
            style={styles.image}
          />
          <Text style={styles.categoryTitle}>Home Cleaning</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require('../assets/cleaning .png')}
            style={styles.image}
          />
          <Text style={styles.categoryTitle}>Home Cleaning</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  categoryItem: {
    width: 150,
    height: 180,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 178, 255, 0.50)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Categories;
