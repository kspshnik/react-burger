import { fetchToken, jwt, token } from '../api';
import { stripBearer } from '../../helpers';
import { refreshFailed } from '../actionCreators';

const refreshToken = (thunk) => (dispatch) => fetchToken()
  .then((res) => {
    console.log('Got fetchToken response:');
    console.dir(res);
    // eslint-disable-next-line promise/always-return
    if (res.success) {
      jwt.set(stripBearer(res.accessToken));
      token.set(res.refreshToken);
      dispatch(thunk);
    }
  })
  .catch((err) => {
    console.dir(err);
    dispatch(refreshFailed(err.message));
  });

export default refreshToken;
