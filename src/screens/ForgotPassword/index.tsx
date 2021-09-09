import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Header} from '../../components';

interface forgotPasswordProps {
  navigation: any;
}
const ForgotPassword: React.FC<forgotPasswordProps> = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Header title="Forgot Password" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Input label="Email" placeholder="Please input your email" />
        <Button title="Send Request" />
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
