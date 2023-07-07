import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('home')}
      >
        {activeTab === 'home' ? (
          <Feather name="home" size={24} color="#00B2FF" />
        ) : (
          <Feather name="home" size={24} color="black" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('profile')}
      >
        {activeTab === 'profile' ? (
          <AntDesign name="profile" size={24} color="#00B2FF" />
        ) : (
          <AntDesign name="profile" size={24} color="black" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('plus')}
      >
        {activeTab === 'plus' ? (
          <Feather name="plus-circle" size={30} color="#00B2FF" />
        ) : (
          <Feather name="plus-circle" size={30} color="black" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('person')}
      >
        {activeTab === 'person' ? (
          <Octicons name="person" size={24} color="#00B2FF" />
        ) : (
          <Octicons name="person" size={24} color="black" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleTabPress('message')}
      >
        {activeTab === 'message' ? (
          <AntDesign name="message1" size={24} color="#00B2FF" />
        ) : (
          <AntDesign name="message1" size={24} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default NavigationBar;
