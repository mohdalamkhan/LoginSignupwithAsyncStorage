// screens/SignupScreen.js
import React, {useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {signup} from '../redux/actions/auth';

const SignupScreen = ({navigation}) => {
  const {control, handleSubmit, errors} = useAuthForm();
  const dispatch = useDispatch();

  const handleSignup = async data => {
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };

      dispatch(signup(userData));

      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      alert('Signup successful');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <View style={styles.cantainer}>
      <View style={styles.headingBox}>
        <Text style={styles.loginHeading}>Sign Up</Text>
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
        onPress={handleSubmit(handleSignup)}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>

      <View style={styles.signtextBox}>
        <Text style={styles.dntHaveAccoutText}>Already I have an account</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.signupBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  cantainer: {
    flex: 1,
  },
  headingBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHeading: {
    fontSize: 18,
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
    backgroundColor: 'orange',
    alignSelf: 'center',
    borderRadius: 15,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
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
