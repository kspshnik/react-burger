import { jwt, logout, token }                           from '../api';
import { generalAPIError, resetProfileForm, resetUser } from '../actionCreators';
import { EXPIRY_MESSAGE }                               from '../../constants';
import refreshTokenThunk from './refresh-token-thunk';

const logoutUserThunk = () => async (dispatch) => {
  const { success, message = 'Неизвестная ошибка!' } = await logout();
  try {
    if (success) {
      jwt.set('');
      token.set('');
      dispatch(resetUser());
      dispatch(resetProfileForm());
    } else if (!success && message === EXPIRY_MESSAGE) {
      dispatch(refreshTokenThunk(logoutUserThunk));
    } else {
      dispatch(generalAPIError(message));
    }
  } catch (err) {
    dispatch(generalAPIError(err.message));
  }
};

export default logoutUserThunk;
