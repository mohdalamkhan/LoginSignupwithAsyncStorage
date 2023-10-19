import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.splashText}>newsABC</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  splashText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});
