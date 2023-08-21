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
      const categoriesRef = collection(db, 'categories'); // Use the correct collection name
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
              navigation.navigate('CategoryScreen', { category });
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
    width: 170,
    height: 190,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 178, 255, 0.50)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 110,
    height: 110,
    marginTop: 10,
  },
  categoryTitle: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
});

export default Categories;
