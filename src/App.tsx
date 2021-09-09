import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './Router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxConfig from './redux/store';
import FlashMessage from 'react-native-flash-message';

const redux = reduxConfig();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
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
