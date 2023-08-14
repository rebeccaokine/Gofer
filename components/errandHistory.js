import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ErrandHistory = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} vertical>
      <View style={styles.container}>
        {/* Start of the first view */}
        <View >
          {/* Date and Status */}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              marginHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-Medium',
              }}>
              Monday, 20th August
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#26AD5C',
                fontFamily: 'Poppins-Medium',
              }}>
              {' '}
              Completed
            </Text>
          </View>
          {/* Main content */}
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                width: 350,
                height: 130,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 2,
                borderRadius: 20,
                backgroundColor: 'white',
                marginBottom: 10,
              }}>
              {/* Image */}
              <View
                style={{
                  width: 130,
                  height: 110,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderRadius: 15,
                  backgroundColor: 'rgba(0, 178, 255, 0.50)',
                  marginRight: 15,
                }}>
                <Image
                  source={require('../assets/laundry-machine.png')}
                  style={styles.image}
                />
              </View>
              {/* Text Content */}
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'left',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                {/* Task Title */}
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Wash my clothes
                </Text>

                {/* Location */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 4,
                  }}>
                  <Octicons name="location" size={20} color="black" />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                    }}>
                    {' '}
                    Mile 7, Achimota
                  </Text>
                </View>

                {/* Price and Rating */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
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
                    }}>
                    <AntDesign name="star" size={20} color="#FFA800" />
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
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  image: {
    width: 90,
    height: 90,
  },
});

export default ErrandHistory;
