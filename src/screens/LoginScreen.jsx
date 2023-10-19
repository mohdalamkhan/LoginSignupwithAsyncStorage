import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuthForm} from './useAuthForm';
import {Controller} from 'react-hook-form';
import {login} from '../redux/actions/auth';
import {useDispatch} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const {control, handleSubmit, errors, reset} = useAuthForm();
  const dispatch = useDispatch();

  const handleLogin = async data => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      const userData = JSON.parse(storedUserData);

      if (
        !userData ||
        userData.email !== data.email ||
        userData.password !== data.password
      ) {
        alert('Invalid credentials');
        return;
      }

      setTimeout(() => {
        // Dispatch the login action upon successful login
        dispatch(login(userData));

        // Clear the input fields
        reset();
        navigation.navigate('Home');
      }, 500);
    } catch (error) {
      console.error('Error during login:', error);

      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <View style={styles.cantainer}>
      <View style={styles.headingBox}>
        <Text style={styles.loginHeading}>Login</Text>
      </View>
      <Controller
        control={control}
        render={({field}) => (
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="email"
        rules={{required: 'Email is required'}}
        defaultValue=""
      />
      <Text>{errors.email?.message}</Text>
      <Controller
        control={control}
        render={({field}) => (
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={field.onChange}
            value={field.value}
            secureTextEntry
          />
        )}
        name="password"
        rules={{required: 'Password is required'}}
        defaultValue=""
      />
      <Text>{errors.password?.message}</Text>

      <TouchableOpacity
        onPress={handleSubmit(handleLogin)}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signtextBox}>
        <Text style={styles.dntHaveAccoutText}>Don't have an account</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={styles.signupBtn}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  cantainer: {
    flex: 1,
  },
  headingBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: '15%',
  },
  textInput: {
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
    paddingLeft: 15,
    marginVertical: 20,
  },
  loginBtn: {
    width: '85%',
    height: 50,
    backgroundColor: 'blue',
    alignSelf: 'center',
    borderRadius: 15,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  signtextBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '85%',
    height: 30,
  },
  dntHaveAccoutText: {
    fontSize: 16,
    fontWeight: '350',
    color: '#000',
  },
  signupBtn: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '350',
  },
});
