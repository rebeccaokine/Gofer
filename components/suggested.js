import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Suggested = ({navigation}) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'column',
            width: 220,
            height: 290,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderRadius: 20,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              width: 200,
              height: 140,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderRadius: 15,
              backgroundColor: 'rgba(0, 178, 255, 0.50)',
              marginHorizontal: 9,
              marginTop: 20,
              marginBottom: 5,
            }}>
            <Image
              source={require('../assets/laundry-machine.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              marginHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-Medium',
              }}>
              Wash my clothes
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Octicons name="location" size={18} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',
                }}>
                {' '}
                Mile 7, Achimota
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                  color: '#00B2FF',
                }}>
                GH₵
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 5,
                  marginRight: 20,
                  color: '#00B2FF',
                }}>
                200
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="star" size={18} color="#FFA800" />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                    marginLeft: 5,
                    color: 'gray',
                  }}>
                  (3.2)
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 20,
                marginTop: 5,
              }}>
              <TouchableOpacity
               onPress={()=>{navigation.navigate("ErrandDetails")}}
                style={{
                  borderWidth: 2,
                  borderRadius: 15,
                  backgroundColor: 'white',
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

        {/**second view**/}

        <View
          style={{
            flexDirection: 'column',
            width: 220,
            height: 290,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderRadius: 20,
            backgroundColor: 'white',
            marginLeft: 10,
          }}>
          <View
            style={{
              width: 200,
              height: 140,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderRadius: 15,
              backgroundColor: 'rgba(0, 178, 255, 0.50)',
              marginHorizontal: 9,
              marginTop: 20,
              marginBottom: 5,
            }}>
            <Image
              source={require('../assets/laundry-machine.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              marginHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-Medium',
              }}>
              Wash my clothes
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Octicons name="location" size={18} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',
                }}>
                {' '}
                Mile 7, Achimota
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                  color: '#00B2FF',
                }}>
                GH₵
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 5,
                  marginRight: 20,
                  color: '#00B2FF',
                }}>
                200
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="star" size={18} color="#FFA800" />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                    marginLeft: 5,
                    color: 'gray',
                  }}>
                  (3.2)
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 20,
                marginTop: 5,
              }}>
              <TouchableOpacity
               onPress={()=>{navigation.navigate("ErrandDetails")}}
                style={{
                  borderWidth: 2,
                  borderRadius: 15,
                  backgroundColor: 'white',
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

        {/**third view */}
        <View
          style={{
            flexDirection: 'column',
            width: 220,
            height: 290,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderRadius: 20,
            backgroundColor: 'white',
            marginLeft: 10,
          }}>
          <View
            style={{
              width: 200,
              height: 140,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderRadius: 15,
              backgroundColor: 'rgba(0, 178, 255, 0.50)',
              marginHorizontal: 9,
              marginTop: 20,
              marginBottom: 5,
            }}>
            <Image
              source={require('../assets/laundry-machine.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              marginHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-Medium',
              }}>
              Wash my clothes
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Octicons name="location" size={18} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',
                }}>
                {' '}
                Mile 7, Achimota
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                  color: '#00B2FF',
                }}>
                GH₵
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 5,
                  marginRight: 20,
                  color: '#00B2FF',
                }}>
                200
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="star" size={18} color="#FFA800" />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                    marginLeft: 5,
                    color: 'gray',
                  }}>
                  (3.2)
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 20,
                marginTop: 5,
              }}>
              <TouchableOpacity
               onPress={()=>{navigation.navigate("ErrandDetails")}}
                style={{
                  borderWidth: 2,
                  borderRadius: 15,
                  backgroundColor: 'white',
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

        {/**end of cards */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
  },
});

export default Suggested;
