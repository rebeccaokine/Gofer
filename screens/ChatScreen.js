import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { firebase } from '../firebaseConfig'; 
import 'firebase/firestore';

const ChatScreen = ({ navigation }) => {
  const db = firebase.firestore();
 
  const [inputText, setInputText] = useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('chats')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        const newChats = snapshot.docs.map((doc) => {
          const chatData = doc.data();
          return {
            ...chatData,
            timestamp: chatData.timestamp.toDate(), // Convert Firestore timestamp to JavaScript Date object
          };
        });
        setChats(newChats);
      });
  
    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (inputText.trim() === '') {
      return;
    }

    const newChat = {
      sender: 'John Doe', 
      message: inputText.trim(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
      await db.collection('chats').add(newChat);
      setInputText('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        styles.rightMessageContainer,
      ]}
    >
      <View style={styles.messageContent}>
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
      <Text style={styles.title}>Chat</Text>
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
    marginLeft: 110,
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
