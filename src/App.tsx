import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './Router';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxConfig from './redux/store';
import FlashMessage from 'react-native-flash-message';
import {Loading} from './components';

const redux = reduxConfig();

const MainApp = () => {
  const {isLoading} = useSelector<any, any>(state => state.globalReducer);
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <Provider store={redux.store}>
      <PersistGate persistor={redux.persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
