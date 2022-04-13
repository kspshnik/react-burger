import { jwt, logout, token } from '../api';
import { generalAPIError, resetProfileForm, resetUser } from '../actionCreators';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshToken from './refresh-token';

const logoutUserThunk = () => async (dispatch) => {
  const { success, message = 'Неизвестная ошибка!' } = await logout();
  try {
    if (success) {
      jwt.set('');
      token.set('');
      dispatch(resetUser());
      dispatch(resetProfileForm());
    } else if (!success && message === EXPIRY_MESSAGE) {
      dispatch(refreshToken(logoutUserThunk));
    } else {
      dispatch(generalAPIError(message));
    }
  } catch (err) {
    dispatch(generalAPIError(err.message));
  }
};

export default logoutUserThunk;
