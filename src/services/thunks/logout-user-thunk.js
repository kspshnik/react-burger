import { jwt, logout, token } from '../api';
import { resetUser, userFailed } from '../actionCreators';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshToken from './refresh-token';

const logoutUserThunk = () => (dispatch) => logout()
  .then((res) => {
    // eslint-disable-next-line promise/always-return
    if (res.success) {
      jwt.set('');
      token.set('');
      dispatch(resetUser());
    } else if (!res.success && res.message === EXPIRY_MESSAGE) {
      dispatch(refreshToken(logoutUserThunk));
    }
  })
  .catch((err) => {
    dispatch(userFailed(err.message));
  });

export default logoutUserThunk;
