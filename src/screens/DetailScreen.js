// DetailScreen.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailScreen = ({route}) => {
  const {itemId} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
