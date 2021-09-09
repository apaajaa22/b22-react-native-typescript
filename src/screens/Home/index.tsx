import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap} from '../../components';
import {getProfile} from '../../redux/action/profile';

const Home = () => {
  const dispatch = useDispatch();
  const {token} = useSelector<any, any>(state => state.auth);
  const {dataProfile} = useSelector<any, any>(state => state.profile);
  useEffect(() => {
    dispatch(getProfile(token));
  }, []);
  const onPressBtn = () => {
    dispatch({type: 'GET_TOKEN', payload: null});
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textContent}>Selamat Datang</Text>
        <Gap height={20} />
        <Text style={styles.textContent}>{dataProfile.name}</Text>
      </View>
      <View style={styles.wrapperButton}>
        <Button onPress={onPressBtn} title="Signout" />
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
    textTransform: 'capitalize',
  },
  wrapperButton: {
    marginVertical: 30,
  },
});
