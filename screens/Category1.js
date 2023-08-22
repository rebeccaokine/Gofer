import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import NavigationBar from '../components/navigationBar';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { firebase } from '../firebaseConfig';
import 'firebase/firestore'; 

const Category1 = ({ navigation }) => {
  const [errands, setErrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firebase.firestore().collection('category1errands').get();
        const errandData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setErrands(errandData);
      } catch (error) {
        console.error('Error fetching errands:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          marginVertical: 40,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GoferHome');
            }}
            style={{
              marginRight: 25,
            }}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 32,
              color: 'black',
              marginBottom: 20,
              textAlign: 'center',
              fontFamily: 'Poppins-Medium',
            }}>
            Home Cleaning
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} vertical>
          <View style={styles.container}>
            {errands.map((errand) => (
              <View
                key={errand.id}
                style={{
                  flexDirection: 'row',
                  width: 340,
                  height: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderRadius: 20,
                  backgroundColor: 'white',
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    width: 140,
                    height: 130,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderRadius: 15,
                    backgroundColor: 'rgba(0, 178, 255, 0.50)',
                    marginHorizontal: 10,
                  }}>
                  <Image source={{ uri: errand.imageUrl }} style={styles.image} />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'left',
                    justifyContent: 'center',
                    marginRight: 10,
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    {errand.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 4,
                    }}>
                    <Octicons name="location" size={18} color="black" />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        marginLeft: 5,
                      }}>
                      {errand.location}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 4,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Medium',
                        color: '#00B2FF',
                      }}>
                      GH₵
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Poppins-Medium',
                        marginLeft: 5,
                        marginRight: 20,
                        color: '#00B2FF',
                      }}>
                      {errand.price}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <AntDesign name="star" size={18} color="#FFA800" />
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Poppins-Medium',
                          marginLeft: 5,
                          color: 'gray',
                        }}>
                        ({errand.rating})
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 4,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ErrandDetails');
                      }}
                      style={{
                        borderWidth: 2,
                        borderRadius: 15,
                        backgroundColor: 'white',
                        marginTop: 5,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        marginRight: 10,
                      }}>
                      <View>
                        <Text>Details</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('BookingConfirmation');
                      }}
                      style={{
                        borderWidth: 2,
                        borderRadius: 15,
                        backgroundColor: 'white',
                        marginTop: 5,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                      }}>
                      <View>
                        <Text>Book</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Category1;
