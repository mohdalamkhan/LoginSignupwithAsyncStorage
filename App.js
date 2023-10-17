// import React from 'react';
// import {Provider} from 'react-redux';
// import store from './src/redux/store';
// import AppNavigator from './src/navigation/AppNavigator';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <AppNavigator />;
//     </Provider>
//   );
// }

import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';

export const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

// const styles = StyleSheet.create({});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import AppNavigator from './src/navigation/AppNavigator';

// const App = () => {
//   return <AppNavigator />;
// };

// export default App;

// const styles = StyleSheet.create({});

// App.js;
