import ToastMessage from '../../components/ToastMessage';
import http from '../../helpers/http';
const API_URL = 'http://localhost:8080';

export const getProfile = (token: null | undefined) => {
  return async (dispatch: (arg0: {type: string; payload: any}) => void) => {
    try {
      const {data: newData} = await http(token).get(`${API_URL}/user/login`);
      dispatch({type: 'GET_PROFILE', payload: newData.data});
    } catch (err: any) {
      ToastMessage(err.response.data.message);
    }
  };
};
