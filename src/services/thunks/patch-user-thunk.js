import { patchUser } from '../api';
import { profileUpdateFailed, profileUpdateSucceed, setUser } from '../actionCreators';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshToken from './refresh-token';

const patchUserThunk = () => async (dispatch, getState) => {
  const { forms: { profile: { name, email, password } } } = getState();

  try {
    const { success, user = null, message = 'Вы успешно обновили профиль!' } = patchUser(name, email, password);
    if (success && !!user) {
      dispatch(setUser(user));
      dispatch(profileUpdateSucceed(message));
    } else if (success && (message === EXPIRY_MESSAGE)) {
      dispatch(refreshToken(patchUserThunk));
    } else {
      dispatch(profileUpdateFailed(message));
    }
  } catch (err) {
    dispatch(profileUpdateFailed(err.message));
  }
};

export default patchUserThunk;
