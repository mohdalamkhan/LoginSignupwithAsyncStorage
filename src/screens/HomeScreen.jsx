import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../redux/actions/auth';
import TabViewExample from './tabView/TabView';
// import TabViewExample from './tabView/TabView';
// import DrawerNavigator from '../../navigation/drawerNavigator/DrawerNavigator';

const newsData = [
  {
    id: '1',
    image: 'https://example.com/news1.jpg',
    title: 'What is Lorem Ipsum?',
    description:
      'What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum',
  },
  {
    id: '2',
    title: 'Why do we use it?',
    description:
      'This is the description for News Headline What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsu',
    image: 'https://example.com/news2.jpg',
  },
  {
    id: '3',
    title: 'Where does it come from?',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    image: 'https://example.com/news3.jpg',
  },
  // Add more news items
];

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {itemId: item.id});
      }}
      style={styles.newsItem}>
      <View>
        <Image source={{uri: item.image}} style={styles.newsImage} />
        <View style={styles.newsText}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Text style={styles.newsDescription}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleLogout = () => {
    console.log('logout');
    dispatch(logoutUser()); // Dispatch the logout action
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBox}>
        {/* <DrawerNavigator /> */}
        <Text style={styles.headerText}>NATIONAL REVIEW</Text>
      </View>
      <TabViewExample />
      <Text>testing</Text>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newsItem: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    // marginHorizontal: 10,
    marginLeft: 15,
  },
  newsImage: {
    width: '90%',
    height: 250,
    backgroundColor: 'blue',
    marginVertical: 15,
  },
  newsText: {
    // flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  newsDescription: {
    fontSize: 14,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  headerBox: {
    backgroundColor: '#000',
    width: '100%',
    height: '10%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontFamily: 'sans-serif-medium',
  },
});

export default HomeScreen;
