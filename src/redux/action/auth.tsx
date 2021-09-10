/* eslint-disable @typescript-eslint/no-unused-vars */
import ToastMessage from '../../components/ToastMessage';
import http from '../../helpers/http';
import {API_URL} from '@env';

export const Login = (data: {email: string; password: string}) => {
  return async (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({type: 'SET_LOADING', payload: true});
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('password', data.password);
    try {
      const {data: newData} = await http().post(`${API_URL}/auth/login`, form);
      dispatch({type: 'GET_TOKEN', payload: newData.data.token});
      dispatch({type: 'SET_LOADING', payload: false});
      ToastMessage('Login Success', 'success');
    } catch (err: any) {
      ToastMessage(err.response.data.message);
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };
};

export const Register = (
  data: {
    name: string;
    email: string;
    password: string;
  },
  navigation: any,
) => {
  return async (dispatch: any) => {
    dispatch({type: 'SET_LOADING', payload: true});
    const form = new URLSearchParams();
    form.append('name', data.name);
    form.append('email', data.email);
    form.append('password', data.password);
    try {
      const {data: newData} = await http().post(
        `${API_URL}/auth/register`,
        form,
      );
      dispatch({type: 'SET_LOADING', payload: false});
      navigation.navigate('Login');
      ToastMessage('Register Success', 'success');
    } catch (err: any) {
      ToastMessage(err.response.data.message);
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };
};

export const generateCode = (email: string, navigation: any) => {
  return async (dispatch: any) => {
    dispatch({type: 'SET_LOADING', payload: true});
    const form = new URLSearchParams();
    form.append('email', email);
    try {
      const {data: newData} = await http().post(
        `${API_URL}/auth/forgot-password`,
        form,
      );
      dispatch({type: 'SET_LOADING', payload: false});
      navigation.navigate('ChangeForgotPassword');
      ToastMessage('Code successfully sent to your email', 'success');
    } catch (err: any) {
      ToastMessage(err.response.data.message);
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };
};

export const ChangeForgotPassword = (
  data: {
    code: string;
    email: string;
    password: string;
  },
  navigation: any,
) => {
  return async (dispatch: any) => {
    dispatch({type: 'SET_LOADING', payload: true});
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('code', data.code);
    form.append('password', data.password);
    try {
      const {data: newData} = await http().patch(
        `${API_URL}/auth/forgot-change-password`,
        form,
      );
      dispatch({type: 'SET_LOADING', payload: false});
      navigation.replace('Login');
      ToastMessage('Password has been reset', 'success');
    } catch (err: any) {
      ToastMessage(err.response.data.message);
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };
};
