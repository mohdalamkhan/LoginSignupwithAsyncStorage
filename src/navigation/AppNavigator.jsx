import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSelector, useDispatch} from 'react-redux';
import {login} from './redux/actions/auth'; // Update the import path
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import DetailScreen from '../screens/DetailScreen';
import Splash from '../screens/Splash';
// import Splash from './screens/Splash'; // If you have a Splash screen, update the import path

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const user = useSelector(state => state.auth.user); // Assuming you have a 'user' in your Redux state
  const dispatch = useDispatch();

  useEffect(() => {
    const isUserAuthenticated = !!user;

    if (isUserAuthenticated) {
      // If the user is already authenticated, navigate to the HomeScreen
      // You can use the 'Stack.Navigator' reference to navigate.
    } else {
      // If the user is not authenticated, you can decide to navigate to the LoginScreen.
      // Here, we're navigating to the 'Login' screen when the user is not authenticated.
    }
  }, [user]);

  return (
    <NavigationContainer>
      {/* Uncomment and configure the Splash screen if needed */}
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        {user ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

// // App.js
// import React, {useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from '../screens/LoginScreen';
// import SignupScreen from '../screens/SignupScreen';
// import HomeScreen from '../screens/HomeScreen';
// import {useSelector, useDispatch} from 'react-redux';
// import {login} from './redux/actions/auth';
// // import Splash from '../screens/Splash';

// const Stack = createNativeStackNavigator();

// const AppNavigator = () => {
//   const user = useSelector(state => state.auth.user); // Assuming you have a 'user' in your Redux state
//   const dispatch = useDispatch();
//   useEffect(() => {
//     // Check if the user is authenticated (you might need to adapt this check)
//     const isUserAuthenticated = !!user;

//     if (isUserAuthenticated) {
//       // If the user is already authenticated, navigate to the HomeScreen
//       // You can use the 'Stack.Navigator' reference to navigate.
//     } else {
//       // If the user is not authenticated, you can decide to navigate to the LoginScreen.
//       // Here, we're navigating to the 'Login' screen when the user is not authenticated.
//     }
//   }, [user]);

//   return (
//     <NavigationContainer>
//       {/* <Stack.Navigator
//         initialRouteName="Login"
//         name="Splash"
//         component={Splash}
//         options={{headerShown: false}}
//       /> */}
//       <Stack.Navigator>
//         {user ? (
//           <Stack.Screen name="Home" component={HomeScreen} />
//         ) : (
//           <Stack.Screen name="Login" component={LoginScreen} />
//         )}
//         {/* <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{headerShown: false}}
//         /> */}
//         <Stack.Screen
//           name="Signup"
//           component={SignupScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;
