import { resetPassword } from '../api';
import { passwordResetFailed, passwordResetSucceed, resetResetForm } from '../actionCreators';

const resetPasswordThunk = () => async (dispatch, getState) => {
  const { forms: { reset: { code, password } } } = getState();
  try {
    const { success, message = 'При смене пароля произошла ошибка :(' } = await resetPassword(code, password);
    if (success) {
      dispatch(passwordResetSucceed('Вы успешно изменили пароль!'));
      dispatch(resetResetForm());
    } else {
      dispatch(passwordResetFailed(message));
    }
  } catch (err) {
    dispatch(passwordResetFailed(err.message || 'При смене пароля произошла ошибка :('));
  }
};

export default resetPasswordThunk;
