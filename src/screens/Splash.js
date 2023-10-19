import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const Splash = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user); // Assuming you have a 'user' in your Redux state
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  // useEffect(() => {
  //   const isUserAuthenticated = !!user;

  //   if (isUserAuthenticated) {
  //     navigation.navigate('Home'); // Navigate to the HomeScreen
  //   } else {
  //     navigation.navigate('Login'); // Navigate to the LoginScreen
  //   }
  // }, [user]);

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
