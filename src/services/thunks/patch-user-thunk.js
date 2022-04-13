import { patchUser } from '../api';
import { profileUpdateFailed, profileUpdateSucceed, setUser } from '../actionCreators';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshTokenThunk from './refresh-token-thunk';

const patchUserThunk = () => async (dispatch, getState) => {
  const { forms: { profile: { name, email, password } } } = getState();

  try {
    console.log('Checking funcs...');
    console.dir(dispatch);
    console.dir(getState);
    const res = await patchUser(name, email, password);
    console.log('Updating profile!...');
    console.dir(res);
    const { success, user = null, message = 'При обновлении профиля произошла ошибка :(' } = res;
    if (success && !!user) {
      console.log('Success profile patch!');
      dispatch(setUser(user));
      dispatch(profileUpdateSucceed('Вы успешно обновили профиль!'));
    } else if (!success && (message === EXPIRY_MESSAGE)) {
      dispatch(refreshTokenThunk(patchUserThunk));
    } else {
      console.log('Something wrong in answer or interpretation!');
      dispatch(profileUpdateFailed(message));
    }
  } catch (err) {
    console.log('Error updating profile!');
    console.dir(err);
    dispatch(profileUpdateFailed(err.message));
  }
};

export default patchUserThunk;
