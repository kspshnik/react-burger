import { AxiosError } from 'axios';
import { fetchUser } from '../api';
import { setUser, userFailed } from '../store';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshTokenThunk from './refresh-token-thunk';
import { AppThunk } from '../store/store';
import { TAPIError } from '../../types/api.types';
import { getAxiosErrorMessage } from '../helpers';

const getUserThunk : AppThunk = () => async (dispatch) => {
  try {
    const {
      data: {
        success,
        user = null,
        message = 'Неизвестная ошибка при получении данных пользователя :(',
      },
    } = await fetchUser();
    if (success && !!user) {
      dispatch(setUser(user));
    } else if (!success && (message === EXPIRY_MESSAGE)) {
      dispatch(refreshTokenThunk(getUserThunk));
    } else {
      dispatch(userFailed(message));
    }
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
      ?? 'Неизвестная ошибка при получении данных пользователя :(';
    dispatch(userFailed(message));
  }
};
export default getUserThunk;
