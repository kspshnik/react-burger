import { AxiosError } from 'axios';
import { resetPassword } from '../api';
import { passwordResetFailed, passwordResetSucceed, resetResetForm } from '../store';
import { AppThunk } from '../store/store';
import { TAPIError, TAPIPostOrderRequestData, TAPIResetRequestData } from '../../types/api.types';
import { getAxiosErrorMessage } from '../helpers';

const resetPasswordThunk : AppThunk = () => async (dispatch, getState) => {
  const { forms: { reset: { code, password } } } = getState();
  const resetData : TAPIResetRequestData = { token: code, password };
  try {
    const {
      data: {
        success, message = 'Неизвестная ошибка при смене пароля :(',
      },
    } = await resetPassword(resetData);
    if (success) {
      dispatch(passwordResetSucceed('Вы успешно изменили пароль!'));
      dispatch(resetResetForm());
    } else {
      dispatch(passwordResetFailed(message));
    }
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
      ?? 'Неизвестная ошибка при смене пароля :(';
    dispatch(passwordResetFailed(message || 'При смене пароля произошла ошибка :('));
  }
};

export default resetPasswordThunk;
