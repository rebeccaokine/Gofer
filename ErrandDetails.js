import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import NavigationBar from '../components/navigationBar';
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const ErrandDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
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
                  fontWeight: 600,
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
                    fontWeight: 600,
                  }}>
                  View Profile
                </Text>
              </Pressable>
            </View>
            <Text
              style={{
                marginTop: 5,
                fontSize: 24,
                fontWeight: 600,
              }}>
              Dereck Owusu
            </Text>
          </View>
          {/**DESCRIPTION*/}
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'grey',
                fontWeight: 600,
              }}>
              Description
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 22,
                fontWeight: 600,
              }}>
              I need help cleaning my house. You will be cleaning two
              bedrooms and a kitchen
            </Text>
          </View>
          {/**DATE and TIME*/}
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent:'space-between',
            }}>
            <View style={{ flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  fontWeight: 600,
                }}>
                Date
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 22,
                  fontWeight: 600,
                }}>
                12/11/21
              </Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  fontWeight: 600,
                }}>
                Time
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 22,
                  fontWeight: 600,
                }}>
                3:00pm
              </Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  fontWeight: 600,
                }}>
                Price
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 22,
                  fontWeight: 600,
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
                  marginTop: 40,
                  padding: 10,
                  backgroundColor: '#F8EBD3',
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: '500',
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
    marginVertical: 20,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
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
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 30,
  },
  hirerInformation: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 10,
  },
});

export default ErrandDetails;
