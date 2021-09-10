import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Input, Header} from '../../components';
import {generateCode} from '../../redux/action/auth';

interface forgotPasswordProps {
  navigation: any;
}
const ForgotPassword: React.FC<forgotPasswordProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(generateCode(email, navigation));
  };

  return (
    <View style={styles.mainContainer}>
      <Header title="Forgot Password" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Input
          value={email}
          onChangeText={setEmail}
          label="Email"
          placeholder="Please input your email"
        />
        <Button title="Send Request" onPress={onSubmit} />
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
