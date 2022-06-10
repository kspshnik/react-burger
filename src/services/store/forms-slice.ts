import { combineReducers } from 'redux';

import forgotFormReducer, {
  setForgotEmail,
  resetForgotForm,
} from './forgot-form-sub-slice';
import loginFormReducer, {
  setLoginEmail,
  setLoginPass,
  resetLoginForm,
} from './login-form-sub-slice';
import profileFormReducer, {
  setProfileName,
  setProfilePass,
  setProfileEmail,
  resetProfileForm,
} from './profile-form-sub-slice';
import registerFormReducer, {
  setRegisterName,
  setRegisterPass,
  setRegisterEmail,
  resetRegisterForm,
} from './register-form-sub-slice';
import resetFormReducer, {
  setResetCode,
  setResetPass,
  resetResetForm,
} from './reset-form-sub-slice';

const formsReducer = combineReducers({
  register: registerFormReducer,
  login: loginFormReducer,
  forgot: forgotFormReducer,
  reset: resetFormReducer,
  profile: profileFormReducer,
});

export {
  setForgotEmail,
  resetForgotForm,
  setLoginEmail,
  setLoginPass,
  resetLoginForm,
  setProfileName,
  setProfilePass,
  setProfileEmail,
  resetProfileForm,
  setRegisterName,
  setRegisterPass,
  setRegisterEmail,
  resetRegisterForm,
  setResetCode,
  setResetPass,
  resetResetForm,
};

export default formsReducer;
