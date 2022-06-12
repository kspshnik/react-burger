import { AxiosError } from 'axios';
import { sendPasswordCode } from '../api';
import { codeRequestFailed, codeRequestSucceed, resetForgotForm } from '../store';
import { AppThunk } from '../store/store';
import { getAxiosErrorMessage } from '../helpers';
import { TAPIError } from '../../types/api.types';

const requestCodeThunk : AppThunk = () => async (dispatch, getState) => {
  const { forms: { forgot: { email } } } = getState();
  try {
    const {
      data: {
        success, message = 'Неизвестная ошибка при запросе кода :(',
      },
    } = await sendPasswordCode(email);
    if (success) {
      dispatch(resetForgotForm());
      dispatch(codeRequestSucceed('Код для смены пароля успешно запрошен! Проверьте почту :)'));
    } else {
      dispatch(codeRequestFailed(message));
    }
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
      ?? 'Неизвестная ошибка при запросе кода :(';
    dispatch(codeRequestFailed(message));
  }
};

export default requestCodeThunk;
