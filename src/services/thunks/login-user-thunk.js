import { jwt, login, token } from '../api';
import { stripBearer }       from '../helpers';
import { setUser }           from '../actionCreators';
import { loginFailed, loginSucceed } from '../actionCreators/API';

const loginUserThunk = () => async (dispatch, getState) => {
  try {
    const { forms: { login: { email, password } } } = getState();
    const {
      success, user, accessToken, refreshToken,
    } = await login(email, password);
    if (success) {
      jwt.set(stripBearer(accessToken));
      token.set(refreshToken);
      dispatch(setUser(user));
      dispatch(loginSucceed('Вы успешно вошли в систему!'));
    }
  } catch (err) {
    dispatch(loginFailed(err.message));
  }
};

export default loginUserThunk;
