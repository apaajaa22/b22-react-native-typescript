import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input, Link} from '../../components';

const Login = () => {
  return (
    <View style={styles.container}>
      <Input label="Email" placeholder="Please input your email" />
      <Input
        secureTextEntry
        label="Password"
        placeholder="Please input your password"
      />
      <Link title="Forgot password ?" />
      <Button title="Login" />
      <Text style={styles.or}>or</Text>
      <Button title="Sign up" />
    </View>
  );
};

export default Login;

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
