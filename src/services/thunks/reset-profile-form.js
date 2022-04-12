import { setProfileEmail, setProfileName, setProfilePass } from '../actionCreators';

const resetProfileForm = (name, email) => (dispatch) => {
  dispatch(setProfileName(name));
  dispatch(setProfileEmail(email));
  dispatch(setProfilePass(''));
};
export default resetProfileForm;
