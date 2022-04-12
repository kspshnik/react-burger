import { sendPasswordCode } from '../api';
import { resetForgotForm } from '../actionCreators';

const requestCodeThunk = () => async (dispatch, getState) => {
  const { forms: { forgot: { email } } } = getState();
  try {
    const { success } = await sendPasswordCode(email);
    if (success) {
      dispatch(resetForgotForm());
    }
  } catch (err) {
    console.dir(err);
    // TODO: Сделать нормальную обработку ошибок здесь, с тултипом и баллалайками
  }
};

export default requestCodeThunk;
