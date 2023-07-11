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

const ErrandHistory = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} vertical>
      <View style={styles.container}>
        {/**first view */}
        <View >
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
                fontWeight: 600,
              }}>
              Monday, 20th August
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#26AD5C',
                fontWeight: 600,
              }}>
              {' '}
              Completed
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              width: 340,
              height: 130,
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
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'left',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  marginBottom: 5,
                }}>
                Wash my clothes
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 4,
                }}>
                <Octicons name="location" size={20} color="black" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
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
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#00B2FF',
                  }}>
                  GH₵
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
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
                      fontWeight: 600,
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
