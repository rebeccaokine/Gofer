import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import NavigationBar from '../components/navigationBar';
import { AntDesign } from '@expo/vector-icons';
import ScheduleOptions from '../components/scheduleOptions';

const UpcomingSchedule = ({navigation}) => {
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
            navigation.navigate('Home');
          }}
            style={{
              marginRight: 40,
            }}>
            <AntDesign name="leftcircleo" size={37} color="black" />
          </TouchableOpacity>
          
          <Text
            style={{
              fontSize: 32,
              color: 'black',
              marginBottom: 30,
              fontFamily: 'Poppins-SemiBold',
              marginLeft: 35,
            }}>
            Schedule
          </Text>
         
        </View>
         <ScheduleOptions  navigation={navigation} />
      </View>

      <NavigationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3'
  },
});

export default UpcomingSchedule;
