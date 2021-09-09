import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {bgWelcome} from '../../assets';
import {Button, Gap} from '../../components';

interface welcomeProps {
  navigation: any;
}

const WelcomePage: React.FC<welcomeProps> = ({navigation}) => {
  return (
    <ImageBackground
      source={bgWelcome}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Welcome to</Text>
        <Gap height={10} />
        <Text style={styles.title}>Auth Flow App</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={20} />
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
};

export default WelcomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  wrapperTitle: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginVertical: 20,
  },
});
