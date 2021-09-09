import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textContent}>Selamat Datang</Text>
        <Text style={styles.textContent}>Rahadian</Text>
      </View>
      <View style={styles.wrapperButton}>
        <Button title="Signout" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  wrapperButton: {
    marginVertical: 30,
  },
});
