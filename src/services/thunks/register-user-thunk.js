import { jwt, registerUser, token } from '../api';
import { stripBearer } from '../../helpers';
import {
  registerFailed, registerSucceed, resetRegisterForm, setUser,
} from '../actionCreators';

const registerUserThunk = () => async (dispatch, getState) => {
  const { forms: { register: { name, email, password } } } = getState();
  try {
    const {
      success, user, accessToken, refreshToken, message = 'При регистрации произошла ошибка :(',
    } = await registerUser(name, email, password);
    if (success && !!user && !!accessToken && !!refreshToken) {
      jwt.set(stripBearer(accessToken));
      token.set(refreshToken);
      dispatch(setUser(user));
      dispatch(resetRegisterForm());
      dispatch(registerSucceed());
    } else {
      dispatch(registerFailed(message));
    }
  } catch (err) {
    dispatch(registerFailed(err.message || 'При регистрации произошла ошибка :('));
  }
};

export default registerUserThunk;
