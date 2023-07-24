import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import NavigationBar from '../components/navigationBar';
import UpcomingErrands from '../components/upcomingErrands';
import { AntDesign } from '@expo/vector-icons';
import ScheduleOptions from '../components/scheduleOptions';

const UpcomingSchedule = () => {
  return (
    <SafeAreaView style={styles.container}>
     
      <View
        style={{
          flex: 1,
          marginVertical: 20,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
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
              fontWeight: 600,
              textAlign: 'center',
            }}>
            Schedule
          </Text>
        </View>
         <ScheduleOptions />
      </View>

      <NavigationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
    fontFamily: 'Poppins',
  },
});

export default UpcomingSchedule;
