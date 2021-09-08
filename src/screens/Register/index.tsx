import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from '../../components';

const Register = () => {
  return (
    <View style={styles.container}>
      <Input label="Name" placeholder="Please input your name" />
      <Input label="Email" placeholder="Please input your email" />
      <Input
        label="Password"
        secureTextEntry
        placeholder="Please input your password"
      />
      <Button title="Sign up" />
      <Text style={styles.or}>or</Text>
      <Button title="Already have an account ?" />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
    fontSize: 16,
  },
});
