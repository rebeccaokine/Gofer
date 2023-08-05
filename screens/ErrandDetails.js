import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const ErrandDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GoferHome');
            }}
            style={styles.backButton}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Errand Details</Text>
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

        <View style={styles.hirerInformation}>
          {/**NAME */}
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Hirer Name
              </Text>
              <Pressable
                onPress={() => {
                  navigation.navigate('ViewHirerProfile');
                }}>
                <Text
                  style={{
                    color: '#00B2FF',
                    fontSize: 18,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  View Profile
                </Text>
              </Pressable>
            </View>
            <Text
              style={{
                marginTop: 5,
                fontSize: 24,
                fontFamily: 'Poppins-Regular',
              }}>
              Dereck Owusu
            </Text>
          </View>
          {/**DESCRIPTION*/}
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'grey',
                fontFamily: 'Poppins-Medium',
              }}>
              Description
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 22,
                fontFamily: 'Poppins-Regular',
              }}>
              I need help cleaning my house. You will be cleaning two
              bedrooms and a kitchen
            </Text>
          </View>
          {/**DATE and TIME*/}
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent:'space-between',
            }}>
            <View style={{ flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  fontFamily: 'Poppins-Medium',
                }}>
                Date
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 22,
                  fontFamily: 'Poppins-Regular',
                }}>
                12/11/21
              </Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  fontFamily: 'Poppins-Medium',
                }}>
                Time
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 22,
                  fontFamily: 'Poppins-Regular',
                }}>
                3:00pm
              </Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  fontFamily: 'Poppins-Medium',
                }}>
                Price
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 22,
                  fontFamily: 'Poppins-Regular',
                }}>
                ₵ 200
              </Text>
            </View>
           
          </View>
           <View style={{marginTop: 20}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BookingConfirmation');
                }}
                style={{
                  marginTop: 10,
                  padding: 10,
                  backgroundColor: '#F8EBD3',
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'Poppins-Medium',
                  marginHorizontal: 20,
                }}>
                <Text
                  style={{
                    fontSize: 24,
                  }}>
                 Book
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
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
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 20,
  },
  backButton: {
    marginRight: 40,
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontWeight: '400',
    marginLeft: 5,
  },
  mapContainer: {
    height: 230,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  map: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 30,
  },
  hirerInformation: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
  },
});

export default ErrandDetails;
