import ToastMessage from '../../components/ToastMessage';
import http from '../../helpers/http';
const API_URL = 'http://localhost:8080';

export const getProfile = (token: null | undefined) => {
  return async (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
      const {data: newData} = await http(token).get(`${API_URL}/user/login`);
      dispatch({type: 'GET_PROFILE', payload: newData.data});
      dispatch({type: 'SET_LOADING', payload: false});
    } catch (err: any) {
      ToastMessage(err.response.data.message);
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };
};
