import { patchUser } from '../api';
import { setUser, userFailed } from '../actionCreators';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshToken from './refresh-token';

const patchUserThunk = (name = null, email = null, password = null ) => (dispatch) => {
  const thunkRecall = () => patchUserThunk(name, email, password);
  patchUser()
    .then((res) => {
      // eslint-disable-next-line promise/always-return
      if (res?.success) {
        dispatch(setUser(res.user));
      } else if (!res.success && res?.message === EXPIRY_MESSAGE) {
        dispatch(refreshToken(thunkRecall()));
      }
    })
    .catch((err) => {
      dispatch(userFailed(err.message));
    });
}

export default patchUserThunk;