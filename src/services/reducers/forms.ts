import { combineReducers } from 'redux';

import registerFormReducer from './register-form';
import loginFormReducer from './login-form';
import forgotFormReducer from './forgot-form';
import resetFormReducer from './reset-form';
import profileFormReducer from './profile-form';

const formsReducer = combineReducers({
  register: registerFormReducer,
  login: loginFormReducer,
  forgot: forgotFormReducer,
  reset: resetFormReducer,
  profile: profileFormReducer,
});

export default formsReducer;
