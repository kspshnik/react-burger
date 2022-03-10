import { fetchUser } from '../api';
import { setUser, userFailed } from '../actionCreators';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshToken from './refresh-token';

const getUser = () => (dispatch) => fetchUser()
  .then((res) => {
    console.log('Got fetchUser response:');
    console.dir(res);
    // eslint-disable-next-line promise/always-return
    if (res.success) {
      dispatch(setUser(res.user));
    } else if (!res.success && res.message === EXPIRY_MESSAGE) {
      dispatch(refreshToken(getUser));
    }
  })
  .catch((err) => {
    console.dir(err);
    dispatch(userFailed(err.message));
  });

export default getUser;
