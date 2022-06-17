import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { jwt, login, token } from '../api';
import { getAxiosErrorMessage, stripBearer } from '../helpers';
import { setUser, loginFailed, loginSucceed } from '../store';
import { TAPIError } from '../../types/api.types';
import { AppThunk } from '../store/store';

const loginUserThunk : AppThunk = () => async (dispatch, getState) => {
  try {
    const { forms: { login: loginData } } = getState();
    const {
      data: {
        success, user, accessToken, refreshToken,
      },
    } = await login(loginData);
    if (success) {
      batch(() => {
        jwt.set(stripBearer(accessToken));
        token.set(refreshToken);
        dispatch(setUser(user));
        dispatch(loginSucceed('Вы успешно вошли в систему!'));
      });
    }
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
       ?? 'Неизвестная ошибка при входе в систему :(';
    dispatch(loginFailed(message));
  }
};

export default loginUserThunk;
