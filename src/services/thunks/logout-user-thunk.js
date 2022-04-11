import { logout } from '../api';
import { resetUser, userFailed } from '../actionCreators';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshToken from './refresh-token';

const logoutUserThunk = () => (dispatch) => logout()
  .then((res) => {
    // eslint-disable-next-line promise/always-return
    if (res.success) {
      dispatch(resetUser(res.user));
    } else if (!res.success && res.message === EXPIRY_MESSAGE) {
      dispatch(refreshToken(logoutUserThunk));
    }
  })
  .catch((err) => {
    dispatch(userFailed(err.message));
  });

export default logoutUserThunk;
