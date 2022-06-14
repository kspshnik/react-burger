import { setProfileEmail, setProfileName, setProfilePass } from '../store';
import { AppThunk } from '../store/store';

const setProfileForm : AppThunk = () => (dispatch, getState) => {
  const { user: { name, email } } = getState();
  dispatch(setProfileName(name));
  dispatch(setProfileEmail(email));
  dispatch(setProfilePass(''));
};
export default setProfileForm;
