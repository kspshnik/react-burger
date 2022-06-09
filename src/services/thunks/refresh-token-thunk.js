import { fetchToken, jwt, token } from '../api';
import { stripBearer }   from '../../helpers';
import { refreshFailed } from '../actionCreators';

const refreshTokenThunk = (thunk = null) => async (dispatch) => {
  try {
    const res = await fetchToken();
    const {
      success, accessToken, refreshToken, message = 'Неизвестная ошибка при обновлении токена :(',
    } = res;
    if (success && !!accessToken && !!refreshToken) {
      jwt.set(stripBearer(accessToken));
      token.set(refreshToken);
      if (thunk) {
        dispatch(thunk());
      }
    } else {
      dispatch(refreshFailed(message));
    }
  } catch (err) {
    dispatch(refreshFailed(err.message));
  }
};

export default refreshTokenThunk;
