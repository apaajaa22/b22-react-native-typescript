import React, {useState} from 'react';
import {LogBox, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, Input, Link} from '../../components';
import {Login as LoginAction} from '../../redux/action/auth';
LogBox.ignoreAllLogs();

interface LoginProps {
  navigation?: any;
  email: string;
  password: string;
}
const Login: React.FC<LoginProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const form = {
    email,
    password,
  };

  const onSubmit = () => {
    dispatch(LoginAction(form));
  };
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title="Login" />
      <ScrollView>
        <Gap height={30} />
        <View style={styles.containerContent}>
          <Input
            value={email}
            onChangeText={setEmail}
            label="Email"
            placeholder="Please input your email"
          />
          <Input
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            label="Password"
            placeholder="Please input your password"
          />
          <Link
            onPress={() => navigation.navigate('ForgotPassword')}
            title="Forgot password ?"
          />
          <Gap height={20} />
          <Button title="Login" onPress={onSubmit} />
          <Text style={styles.or}>or</Text>
          <Button
            onPress={() => navigation.navigate('Register')}
            title="Create new account"
          />
        </View>
      </ScrollView>
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
    backgroundColor: 'white',
    marginBottom: 30,
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
    fontSize: 16,
  },
});
