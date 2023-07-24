import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Image} from 'react-native';


const SplashScreen = ({navigation}) => {
  
   useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Onboarding1');
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [navigation]);

 
  return (
  <View style={styles.container}>
    <Image 
    source={require('../assets/Gofer.png')}
    style={styles.image}
    />

  </View>
);
}

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