import { fetchUser } from '../api';
import { setUser, userFailed } from '../actionCreators';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshTokenThunk from './refresh-token-thunk';

const getUserThunk = () => async (dispatch) => {
  try {
    const { success, user = null, message = '' } = await fetchUser();
    if (success && !!user) {
      dispatch(setUser(user));
    } else if (!success && (message === EXPIRY_MESSAGE)) {
      dispatch(refreshTokenThunk(getUserThunk));
    } else {
      dispatch(userFailed(message));
    }
  } catch (err) {
    dispatch(userFailed(err.message));
  }
};
export default getUserThunk;
