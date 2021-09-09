import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './Router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxConfig from './redux/store';

const redux = reduxConfig();

const App = () => {
  return (
    <Provider store={redux.store}>
      <PersistGate persistor={redux.persistor}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
