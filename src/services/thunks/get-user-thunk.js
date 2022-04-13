import { fetchUser } from '../api';
import { setUser, userFailed } from '../actionCreators';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshToken from './refresh-token';

const getUserThunk = () => async (dispatch) => {
  try {
    const { success, user = null, message = '' } = fetchUser();
    if (success && !!user) {
      dispatch(setUser(user));
    } else if (success && (message === EXPIRY_MESSAGE)) {
      dispatch(refreshToken(getUserThunk));
    } else {
      dispatch(userFailed(message));
    }
  } catch (err) {
    dispatch(userFailed(err.message));
  }
};
export default getUserThunk;
