import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Header, Input} from '../../components';

interface RegisterProps {
  navigation: any;
}
const Register: React.FC<RegisterProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title="Register" />
      <ScrollView>
        <View style={styles.containerContent}>
          <View>
            <Input label="Name" placeholder="Please input your name" />
            <Input label="Email" placeholder="Please input your email" />
            <Input
              label="Password"
              secureTextEntry
              placeholder="Please input your password"
            />
          </View>
          <View style={styles.wrapperButton}>
            <Button title="Sign up" />
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
