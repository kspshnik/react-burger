import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { jwt, logout, token } from '../api';
import { generalAPIError, resetProfileForm, resetUser } from '../store';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshTokenThunk from './refresh-token-thunk';
import { AppThunk } from '../store/store';
import { getAxiosErrorMessage } from '../helpers';
import { TAPIError } from '../../types/api.types';

const logoutUserThunk : AppThunk = () => async (dispatch) => {
  try {
    const {
      data: {
        success, message = 'Неизвестная ошибка при выходе из приложения :(',
      },
    } = await logout();
    if (success) {
      jwt.set('');
      token.set('');
      batch(() => {
        dispatch(resetUser());
        dispatch(resetProfileForm());
      });
    } else if (!success && message === EXPIRY_MESSAGE) {
      dispatch(refreshTokenThunk(logoutUserThunk));
    } else {
      dispatch(generalAPIError(message));
    }
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
      ?? 'Неизвестная ошибка при выходе из приложения :(';
    dispatch(generalAPIError(message));
  }
};

export default logoutUserThunk;
