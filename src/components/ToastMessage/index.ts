import {showMessage} from 'react-native-flash-message';

const ToastMessage = (message: string, type?: string | undefined) => {
  showMessage({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#0BCAD4' : '#d63031',
    color: '#fff',
  });
};

export default ToastMessage;
