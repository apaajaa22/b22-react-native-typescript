import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import auth from './auth';
import profile from './profile';
// import phone from './phone';
// import globalReducer from './global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistAuth = {
  storage: AsyncStorage,
  key: 'auth',
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  // globalReducer,
  profile,
  // phone,
});

export default reducer;
