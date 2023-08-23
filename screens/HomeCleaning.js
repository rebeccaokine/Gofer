import React from 'react';
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
{/**import HomeCleaningErrands from '../components/homeCleaningErrands';taking this out for now*/}
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HomeCleaning = ({ navigation }) => {
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
       {/**  <HomeCleaningErrands navigation={navigation} />*/}
      <ScrollView showsVerticalScrollIndicator={false} vertical>
      <View style={styles.container}>
        {/**first view */}
        <View
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
            <Image
              source={require('../assets/laundry-machine.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'left',
              justifyContent: 'center',
              marginRight: 10,
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
                marginTop: 4,
              }}>
              <Octicons name="location" size={18} color="black" />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Regular',
                }}>
                {' '}
                Mile 7, Achimota
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
                  fontFamily: 'Poppins-Regular',
                  color: '#00B2FF',
                }}>
                GH₵
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 5,
                  marginRight: 20,
                  color: '#00B2FF',
                }}>
                200
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <AntDesign name="star" size={18} color="#FFA800" />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
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
                marginTop: 10,
              }}>
              <TouchableOpacity
                onPress={()=>{navigation.navigate("ErrandDetails")}}
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

        {/**second view**/}

       <View
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
            <Image
              source={require('../assets/laundry-machine.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'left',
              justifyContent: 'center',
              marginRight: 10,
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
                marginTop: 4,
              }}>
              <Octicons name="location" size={18} color="black" />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Regular',
                }}>
                {' '}
                Mile 7, Achimota
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
                200
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
                  (3.2)
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <TouchableOpacity
               onPress={()=>{navigation.navigate("ErrandDetails")}}
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

        {/**third view */}
        <View
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
            <Image
              source={require('../assets/laundry-machine.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'left',
              justifyContent: 'center',
              marginRight: 10,
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
                marginTop: 4,
              }}>
              <Octicons name="location" size={18} color="black" />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-Regular',
                }}>
                {' '}
                Mile 7, Achimota
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
                200
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
                  (3.2)
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <TouchableOpacity
               onPress={()=>{navigation.navigate("ErrandDetails")}}
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
        {/**end of cards */}
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
    alignItems:'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default HomeCleaning;
