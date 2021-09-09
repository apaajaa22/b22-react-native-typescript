import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input, Link} from '../../components';

interface LoginProps {
  navigation: any;
}
const Login: React.FC<LoginProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title="Login" />
      <Gap height={30} />
      <View style={styles.containerContent}>
        <Input label="Email" placeholder="Please input your email" />
        <Input
          secureTextEntry
          label="Password"
          placeholder="Please input your password"
        />
        <Link
          onPress={() => navigation.navigate('ForgotPassword')}
          title="Forgot password ?"
        />
        <Gap height={20} />
        <Button title="Login" />
        <Text style={styles.or}>or</Text>
        <Button
          onPress={() => navigation.navigate('Register')}
          title="Create new account"
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerContent: {
    paddingHorizontal: 20,
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
    fontSize: 16,
  },
});
