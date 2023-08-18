import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

// This component displays upcoming errands on the hirer's screen and allows navigation to specific screens
const UpcomingHirerErrands = ({ navigation }) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View style={styles.container}>
        {/* Category: Home Cleaning */}
        <View
          style={styles.categoryItem}
          onPress={() => {
            navigation.navigate('HomeCleaning');
          }}>
          <Image
            source={require('../assets/cleaning.png')}
            style={styles.image}
          />
          <Text style={styles.shortDescription}>Clean living room </Text>
          <Text style={styles.categoryTitle}>Home Cleaning</Text>
          <Text style={styles.dateTime}>08 Aug  3:00 PM</Text>
        </View>

        {/* Category: Laundry */}
        <View style={styles.categoryItem}>
          <Image
            source={require('../assets/laundry-machine.png')}
            style={styles.image}
          />
          <Text style={styles.shortDescription}>Wash clothes </Text>
          <Text style={styles.categoryTitle}>Laundry</Text>
          <Text style={styles.dateTime}>08 Aug  3:00 PM</Text>
        </View>

        {/* Category: Babysitting */}
        <View style={styles.categoryItem}>
          <Image
            source={require('../assets/babysitting.png')}
            style={styles.image}
          />
          <Text style={styles.shortDescription}>Watch kids </Text>
          <Text style={styles.categoryTitle}>Babysitting</Text>
          <Text style={styles.dateTime}>08 Aug  3:00 PM</Text>
        </View>

        {/* Category: Pet Care */}
        <View style={styles.categoryItem}>
          <Image
            source={require('../assets/animal-care.png')}
            style={styles.image}
          />
          <Text style={styles.shortDescription}>Watch my dog </Text>
          <Text style={styles.categoryTitle}>Pet Care</Text>
          <Text style={styles.dateTime}>08 Aug  3:00 PM</Text>
        </View>

        {/* Category: Cooking */}
        <View style={styles.categoryItem}>
          <Image
            source={require('../assets/cooking.png')}
            style={styles.image}
          />
          <Text style={styles.shortDescription}>Meal Prep </Text>
          <Text style={styles.categoryTitle}>Cooking</Text>
          <Text style={styles.dateTime}>08 Aug  3:00 PM</Text>
        </View>

        {/* Category: Grocery */}
        <View style={styles.categoryItem}>
          <Image
            source={require('../assets/grocery.png')}
            style={styles.image}
          />
        <Text style={styles.shortDescription}>Buy Tomatoes </Text>
        <Text style={styles.categoryTitle}> Grocery  Shopping</Text>
        <Text style={styles.dateTime}>08 Aug  3:00 PM</Text>
        </View>

        {/* Category: Delivery */}
        <View style={styles.categoryItem}>
          <Image
            source={require('../assets/delivery.png')}
            style={styles.image}
          />
          <Text style={styles.shortDescription}>Deliver packages </Text>
          <Text style={styles.categoryTitle}>Delivery</Text>
          <Text style={styles.dateTime}>08 Aug  3:00 PM</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  categoryItem: {
    width: 180,
    height: 200,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 178, 255, 0.50)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  category: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'gray',
  },
  shortDescription: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  dateTime: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

export default UpcomingHirerErrands;
