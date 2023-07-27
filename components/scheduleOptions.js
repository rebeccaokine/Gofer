import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import UpcomingErrands from './upcomingErrands';
import ErrandHistory from './errandHistory';

const ScheduleOptions = ({navigation}) => {
   const [activeTab, setActiveTab] = useState('upcoming');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'upcoming' && styles.activeTab,
          ]}
          onPress={() => handleTabPress('upcoming')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'upcoming' && styles.activeTabText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'history' && styles.activeTab,
          ]}
          onPress={() => handleTabPress('history')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'history' && styles.activeTabText,
            ]}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {activeTab === 'upcoming' && <UpcomingErrands  navigation={navigation}/>}
        {activeTab === 'history' && <ErrandHistory  navigation={navigation} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8EBD3',
    borderRadius: 30,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeTab: {
    borderRadius: 30,
  },
  activeTabText: {
    color: '#00B2FF',
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 10,
  },
});

export default ScheduleOptions;
