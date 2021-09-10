import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Header, Input} from '../../components';
import {ChangeForgotPassword as ChangeForgotPasswordActions} from '../../redux/action/auth';

interface ChangeForgotPasswordProps {
  navigation: any;
}
const ChangeForgotPassword: React.FC<ChangeForgotPasswordProps> = ({
  navigation,
}) => {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const form = {
    code,
    email,
    password,
  };
  const onSubmit = () => {
    dispatch(ChangeForgotPasswordActions(form, navigation));
  };
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title="Change Password" />
      <ScrollView>
        <View style={styles.containerContent}>
          <View>
            <Input
              value={email}
              onChangeText={setEmail}
              label="Email"
              placeholder="Please input your email"
            />
            <Input
              value={code}
              onChangeText={setCode}
              label="Code"
              placeholder="Please input your code"
            />
            <Input
              value={password}
              onChangeText={setPassword}
              label="New password"
              secureTextEntry
              placeholder="Please input your password"
            />
          </View>
          <View style={styles.wrapperButton}>
            <Button title="Reset Password" onPress={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangeForgotPassword;

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
