import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {  Foundation , MaterialCommunityIcons, Ionicons, FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Navigationbar = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const navigateToScreen = (screenName) => {
    setActiveTab(screenName);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
        onPress={() => navigateToScreen('Home')}
      >
        <Foundation name="home" size={30} color={activeTab === 'Home' ? 'black' : '#00B2FF'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'UpcomingSchedule' && styles.activeTab]}
        onPress={() => navigateToScreen('UpcomingSchedule')}
      >
        <FontAwesome name="list-ul" size={24}  color={activeTab === 'UpcomingSchedule' ? 'black' : '#00B2FF' } />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'AddErrand' && styles.activeTab]}
        onPress={() => navigateToScreen('AddErrand')}
      >
        <FontAwesome name="plus" size={30} color={activeTab === 'AddErrand' ? 'black' : '#00B2FF'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Profile' && styles.activeTab]}
        onPress={() => navigateToScreen('Profile')}
      >
       <Ionicons name="person" size={26} color={activeTab === 'Profile' ? 'black' : '#00B2FF'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Messages' && styles.activeTab]}
        onPress={() => navigateToScreen('Messages')}
      >
        <MaterialCommunityIcons name="message-processing" size={24} color={activeTab === 'Messages' ? 'black' : '#00B2FF'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#F8EBD3',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: 40,
    marginBottom: 10,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    color: '#00B2FF',
  },
};

export default Navigationbar;
