import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ChatScreen = ({ route, navigation }) => {
  const { message } = route.params;

  const [inputText, setInputText] = useState('');
  const [chats, setChats] = useState([
    {
      id: 1,
      sender: {
        name: 'John Doe',
        avatar: require('../assets/avatar.jpeg'),
      },
      message: 'Hello, how are you?',
      timestamp: '10:00 AM',
    },
    {
      id: 2,
      sender: {
        name: 'Jane Smith',
        avatar: require('../assets/avatar.jpeg'),
      },
      message: 'I am doing great!',
      timestamp: '10:05 AM',
    },
    
  ]);

  const handleSend = () => {
    if (inputText.trim() === '') {
      return;
    }

    const newChat = {
      id: chats.length + 1,
      sender: message.sender,
      message: inputText.trim(),
      timestamp: getCurrentTimestamp(),
    };

    setChats([...chats, newChat]);
    setInputText('');
  };

  const getCurrentTimestamp = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender.name === message.sender.name ? styles.rightMessageContainer : styles.leftMessageContainer,
      ]}
    >
      {item.sender.name !== message.sender.name && (
        <Image source={item.sender.avatar} style={styles.avatar} />
      )}
      <View style={styles.messageContent}>
        {item.sender.name !== message.sender.name && (
          <Text style={styles.senderName}>{item.sender.name}</Text>
        )}
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="leftcircleo" size={37} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{message.sender.name}</Text>
      </View>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        inverted
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <AntDesign name="rightcircle" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginLeft: 80,
    marginVertical: 40,
  },
  chatContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  leftMessageContainer: {
    justifyContent: 'flex-start',
  },
  rightMessageContainer: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  senderName: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    borderRadius: 30,
    paddingHorizontal: 12,
    marginRight: 10,
    borderWidth: 2,
  },
  sendButton: {
    padding: 4,
    borderRadius: 20,
    backgroundColor: '#F8EBD3',
  },
});

export default ChatScreen;
