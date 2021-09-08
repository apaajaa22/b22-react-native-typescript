import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from '../../components';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Input label="Email" placeholder="Please input your email" />
      <Button title="Send Request" />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
