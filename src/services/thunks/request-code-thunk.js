import { sendPasswordCode } from '../api';
import { codeRequestFailed, codeRequestSucceed, resetForgotForm } from '../actionCreators';

const requestCodeThunk = () => async (dispatch, getState) => {
  const { forms: { forgot: { email } } } = getState();
  try {
    const { success, message = 'При запросе кода произошла ошибка!' } = await sendPasswordCode(email);
    if (success) {
      dispatch(resetForgotForm());
      dispatch(codeRequestSucceed('Код для смены пароля успешно запрошен! Проверьте почту :)'));
    } else {
      dispatch(codeRequestFailed(message));
    }
  } catch (err) {
    dispatch(codeRequestFailed(err.message));
  }
};

export default requestCodeThunk;
