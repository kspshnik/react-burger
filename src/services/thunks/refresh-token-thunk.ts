import { AxiosError } from 'axios';
import { fetchToken, jwt, token } from '../api';
import { getAxiosErrorMessage, stripBearer } from '../helpers';
import { refreshFailed } from '../store';
import { AppThunk } from '../store/store';
import { TAPIError } from '../../types/api.types';

const refreshTokenThunk : AppThunk = (thunk : AppThunk | null = null) => async (dispatch) => {
  try {
    const res = await fetchToken();
    const {
      data: {
        success,
        accessToken,
        refreshToken,
        message = 'Неизвестная ошибка при обновлении токена :(',
      },
    } = res;
    if (success && !!accessToken && !!refreshToken) {
      jwt.set(stripBearer(accessToken));
      token.set(refreshToken);
      if (thunk) {
        dispatch(thunk());
      }
    } else {
      dispatch(refreshFailed(message));
    }
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
      ?? 'Неизвестная ошибка при обновлении токена :(';
    dispatch(refreshFailed(message));
  }
};

export default refreshTokenThunk;
