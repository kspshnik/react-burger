import { AxiosError } from 'axios';
import { batch } from 'react-redux';
import { jwt, registerUser, token } from '../api';
import { getAxiosErrorMessage, stripBearer } from '../helpers';
import {
  registerFailed, registerSucceed, resetRegisterForm, setUser,
} from '../store';
import { AppThunk } from '../store/store';
import { TAPIError } from '../../types/api.types';

const registerUserThunk : AppThunk = () => async (dispatch, getState) => {
  const { forms: { register } } = getState();
  try {
    const {
      data: {
        success,
        user,
        accessToken,
        refreshToken,
        message = 'При регистрации произошла неизвестная ошибка :(',
      },
    } = await registerUser(register);
    if (success && !!user && !!accessToken && !!refreshToken) {
      batch(() => {
        jwt.set(stripBearer(accessToken));
        token.set(refreshToken);
        dispatch(setUser(user));
        dispatch(resetRegisterForm());
        dispatch(registerSucceed('Вы успешно зарегистрировались!'));
      });
    } else {
      dispatch(registerFailed(message));
    }
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
      ?? 'При регистрации произошла неизвестная ошибка :(';
    dispatch(registerFailed(message || 'При регистрации произошла ошибка :('));
  }
};

export default registerUserThunk;
