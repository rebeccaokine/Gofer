import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// This component displays categories and allows navigation to specific screens
const Categories = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from Firestore
    async function fetchCategories() {
      const db = getFirestore();
      const categoriesRef = collection(db, 'categories'); // Get a reference to the "categories" collection
      const categoriesSnapshot = await getDocs(categoriesRef);
      const categoriesData = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoriesData);
    }

    fetchCategories();
  }, []);


  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View style={styles.container}>
        {/* Fetch Categories */}
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryItem}
            onPress={() => {
              navigation.navigate('CategoryScreen', { category: category.name });
            }}
          >
            <Image source={{ uri: category.image }} style={styles.image} />
            <Text style={styles.categoryTitle}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  categoryItem: {
    width: 200,
    height: 240,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 178, 255, 0.50)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 10,
  },
  categoryTitle: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
});

export default Categories;
