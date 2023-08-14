import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

// This component displays categories and allows navigation to specific screens
const Categories = ({ navigation }) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View style={styles.container}>
        {/* Category: Home Cleaning */}
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => {
            navigation.navigate('HomeCleaning');
          }}>
          <Image
            source={require('../assets/cleaning.png')}
            style={styles.image}
          />
          <Text style={styles.categoryTitle}>Home Cleaning</Text>
        </TouchableOpacity>

        {/* Category: Laundry */}
        <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require('../assets/laundry-machine.png')}
            style={styles.image}
          />
          <Text style={styles.categoryTitle}>Laundry</Text>
        </TouchableOpacity>

        {/* Category: Babysitting */}
        <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require('../assets/babysitting.png')}
            style={styles.image}
          />
          <Text style={styles.categoryTitle}>Babysitting</Text>
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
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  categoryTitle: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
});

export default Categories;
