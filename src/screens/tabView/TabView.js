import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const Tab1Screen = () => (
  <View style={styles.container}>
    <Text>Tab 1 Content</Text>
  </View>
);

const Tab2Screen = () => (
  <View style={styles.container}>
    <Text>Tab 2 Content</Text>
  </View>
);

const Tab3Screen = () => (
  <View style={styles.container}>
    <Text>Tab 3 Content</Text>
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};

const TabViewExample = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tab1', title: 'OPINION'},
    {key: 'tab2', title: 'NEWS'},
    {key: 'tab3', title: 'CORNER'},
  ]);

  const renderScene = SceneMap({
    tab1: Tab1Screen,
    tab2: Tab2Screen,
    tab3: Tab3Screen,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    zIndex: 100,
    position: 'absolute',
    width: 1,
    height: 48,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
});

export default TabViewExample;
