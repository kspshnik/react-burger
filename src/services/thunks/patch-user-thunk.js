import { jwt, patchUser, token } from '../api';
import { setUser, userFailed } from '../actionCreators';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshToken from './refresh-token';

const patchUserThunk = () => (dispatch, getState) => {
  const { forms: { profile: { name, email, password } } } = getState();
  console.log(`Actual jwt: '${jwt.get()}'.`);
  console.log(`Actual token: '${token.get()}'.`);
  console.log(`Patching user with following new data:
               \nname: '${name}',\nemail: '${email}',\npassword: '${password}'. `);
  patchUser(name, email, password)
    .then((res) => {
      console.log('Result received:');
      console.dir(res);
      // eslint-disable-next-line promise/always-return
      if (res?.success) {
        dispatch(setUser(res.user));
      } else if (!res.success && res?.message === EXPIRY_MESSAGE) {
        console.log('Requiring new jwt!');
        dispatch(refreshToken(patchUserThunk));
      }
    })
    .catch((err) => {
      dispatch(userFailed(err.message));
    });
};

export default patchUserThunk;
