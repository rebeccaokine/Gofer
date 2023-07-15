import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
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

          <Text style={styles.title}>Profile</Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/avatar.jpeg')}
            style={styles.image}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: '400',
            }}>
            Dereck Griffin
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            padding: 15,
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Octicons name="pencil" size={24} color="black" />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Pressable
              onPress={() => {
                navigation.navigate('EditProfile');
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400'
                }}>
                {'  '}
                Edit Profile
              </Text>
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 15,
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <FontAwesome5 name="check-circle" size={24} color="black" />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Pressable
              onPress={() => {
                navigation.navigate('GoferLogin');
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400'
                }}>
                {'  '}
                Verify Profile
              </Text>
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 15,
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Ionicons name="card-outline" size={26} color="black" />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Pressable
              onPress={() => {
                navigation.navigate('GoferLogin');
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400'
                }}>
                {'  '}
                View Payments
              </Text>
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 15,
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Ionicons name="card-outline" size={26} color="black" />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Pressable
              onPress={() => {
                navigation.navigate('GoferLogin');
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400'
                }}>
                {'  '}
                Change Payment Preference
              </Text>
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 15,
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <SimpleLineIcons name="settings" size={24} color="black" />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Pressable
              onPress={() => {
                navigation.navigate('GoferLogin');
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400'
                }}>
                {'  '}
                Settings
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.details}></View>
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
    marginLeft: 55,
  },
  details: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 110,
    marginBottom: 5,
  },
});

export default Profile;
