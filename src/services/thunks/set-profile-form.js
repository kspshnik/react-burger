import { setProfileEmail, setProfileName, setProfilePass } from '../actionCreators';

const setProfileForm = () => (dispatch, getState) => {
  const { user: { name, email } } = getState();
  dispatch(setProfileName(name));
  dispatch(setProfileEmail(email));
  dispatch(setProfilePass(''));
};
export default setProfileForm;
