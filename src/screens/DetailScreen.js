import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const DetailScreen = ({route}) => {
  const {itemId} = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/itemImage.jpg')}
      />
      <Text style={styles.title}>Detail Screen</Text>
      <Text>Item ID: {itemId}</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Description:</Text>
        <Text style={styles.detailText}>
          This is a detailed description of the item. Provide information about
          the item's features, specifications, and more.
        </Text>
      </View>
      <Image
        style={styles.image}
        source={require('../../assets/itemImage2.jpg')}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Description:</Text>
        <Text style={styles.detailText}>
          This is a detailed description of the item. Provide information about
          the item's features, specifications, and more.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    width: '40%',
    fontWeight: 'bold',
  },
  detailText: {
    width: '60%',
  },
});

export default DetailScreen;
