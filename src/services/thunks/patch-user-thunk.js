import { patchUser }                                          from '../api';
import { profileUpdateFailed, profileUpdateSucceed, setUser } from '../actionCreators';
import { EXPIRY_MESSAGE }                                     from '../../constants';
import refreshTokenThunk from './refresh-token-thunk';

const patchUserThunk = () => async (dispatch, getState) => {
  const { forms: { profile: { name, email, password } } } = getState();

  try {
    const res = await patchUser(name, email, password);
    const { success, user = null, message = 'При обновлении профиля произошла ошибка :(' } = res;
    if (success && !!user) {
      dispatch(setUser(user));
      dispatch(profileUpdateSucceed('Вы успешно обновили профиль!'));
    } else if (!success && (message === EXPIRY_MESSAGE)) {
      dispatch(refreshTokenThunk(patchUserThunk));
    } else {
      dispatch(profileUpdateFailed(message));
    }
  } catch (err) {
    dispatch(profileUpdateFailed(err.message));
  }
};

export default patchUserThunk;
