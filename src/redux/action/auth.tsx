import ToastMessage from '../../components/ToastMessage';
import http from '../../helpers/http';
const API_URL = 'http://localhost:8080';

export const Login = (data: {email: string; password: string}) => {
  return async (dispatch: (arg0: {type: string; payload: any}) => void) => {
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('password', data.password);
    try {
      const {data: newData} = await http().post(`${API_URL}/auth/login`, form);
      dispatch({type: 'GET_TOKEN', payload: newData.data.token});
      ToastMessage('Login Success' || newData.data.message, 'success');
    } catch (err: any) {
      ToastMessage(err.response.data.message);
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
    const form = new URLSearchParams();
    form.append('name', data.name);
    form.append('email', data.email);
    form.append('password', data.password);
    try {
      const {data: newData} = await http().post(
        `${API_URL}/auth/register`,
        form,
      );
      navigation.navigate('Login');
      ToastMessage('Register Success', 'success');
    } catch (err: any) {
      ToastMessage(err.response.data.message);
    }
  };
};
