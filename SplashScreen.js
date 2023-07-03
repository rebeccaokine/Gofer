import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const SplashScreen = ({navigation}) => (
  <View style={styles.container}>
    <Image 
    source={require('../assets/Gofer.png')}
    style={styles.image}
    />

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 220,
    height: 120,
  },
 
    
});

export default SplashScreen;