import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import NavigationBar from '../components/navigationBar';

const Messages = ({ navigation }) => {
  const messages = [
    {
      id: 1,
      sender: {
        name: 'John Doe',
        avatar: require('../assets/avatar.jpeg'),
      },
      message: 'Hello, how are you?',
    },
    {
      id: 2,
      sender: {
        name: 'Jane Smith',
        avatar: require('../assets/avatar.jpeg'),
      },
      message: 'Are you available tomorrow?',
    },
   
  ];

  const handlePressMessage = (message) => {
    // navigate to a chat screen
    navigation.navigate('ChatScreen', { message: message });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <AntDesign name="leftcircleo" size={37} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Messages</Text>
      </View>
      <View style={styles.messagesContainer}>
        {messages.map((message) => (
          <TouchableOpacity
            key={message.id}
            style={styles.messageContainer}
            onPress={() => handlePressMessage(message)}>
            <Image source={message.sender.avatar} style={styles.avatar} />
            <View style={styles.messageContent}>
              <Text style={styles.senderName}>{message.sender.name}</Text>
              <Text style={styles.messageSnippet}>{message.message}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 65,
  },
  messagesContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  senderName: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
  },
  messageSnippet: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Messages;
