import { fetchToken, jwt, token } from '../api';
import { stripBearer } from '../../helpers';
import { refreshFailed } from '../actionCreators';

const refreshToken = (thunk) => (dispatch) => fetchToken()
  .then((res) => {
    // eslint-disable-next-line promise/always-return
    if (res.success) {
      jwt.set(stripBearer(res.accessToken));
      token.set(res.refreshToken);
      dispatch(thunk());
    } else {
      dispatch(refreshFailed(res.message));
    }
  })
  .catch((err) => {
    dispatch(refreshFailed(err.message));
  });

export default refreshToken;
