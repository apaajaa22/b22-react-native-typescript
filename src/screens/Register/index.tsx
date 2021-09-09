import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Header, Input} from '../../components';
import {Register as RegisterAction} from '../../redux/action/auth';

interface RegisterProps {
  navigation: any;
}
const Register: React.FC<RegisterProps> = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const form = {
    name,
    email,
    password,
  };
  const onSubmit = () => {
    dispatch(RegisterAction(form, navigation));
  };
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title="Register" />
      <ScrollView>
        <View style={styles.containerContent}>
          <View>
            <Input
              value={name}
              onChangeText={setName}
              label="Name"
              placeholder="Please input your name"
            />
            <Input
              value={email}
              onChangeText={setEmail}
              label="Email"
              placeholder="Please input your email"
            />
            <Input
              value={password}
              onChangeText={setPassword}
              label="Password"
              secureTextEntry
              placeholder="Please input your password"
            />
          </View>
          <View style={styles.wrapperButton}>
            <Button title="Sign up" onPress={onSubmit} />
            <Text style={styles.or}>or</Text>
            <Button
              onPress={() => navigation.navigate('Login')}
              title="Already have an account ?"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerContent: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 30,
  },
  wrapperButton: {
    marginVertical: 30,
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
    fontSize: 16,
  },
});
