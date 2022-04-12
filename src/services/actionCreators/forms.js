import {
  REGISTER_SET_NAME,
  REGISTER_SET_EMAIL,
  REGISTER_SET_PASS,
  LOGIN_SET_EMAIL,
  LOGIN_SET_PASS,
  FORGOT_SET_EMAIL,
  RESET_SET_PASS,
  RESET_SET_CODE,
  PROFILE_SET_NAME,
  PROFILE_SET_EMAIL,
  PROFILE_SET_PASS,
  REGISTER_FORM_RESET,
  LOGIN_FORM_RESET,
  FORGOT_FORM_RESET,
  RESET_FORM_RESET,
} from '../actions';

export const setRegisterName = (name) => ({ type: REGISTER_SET_NAME, payload: name });
export const setRegisterEmail = (email) => ({ type: REGISTER_SET_EMAIL, payload: email });
export const setRegisterPass = (password) => ({ type: REGISTER_SET_PASS, payload: password });

export const setLoginEmail = (email) => ({ type: LOGIN_SET_EMAIL, payload: email });
export const setLoginPass = (password) => ({ type: LOGIN_SET_PASS, payload: password });

export const setForgotEmail = (email) => ({ type: FORGOT_SET_EMAIL, payload: email });

export const setResetCode = (code) => ({ type: RESET_SET_CODE, payload: code });
export const setResetPass = (password) => ({ type: RESET_SET_PASS, payload: password });

export const setProfileName = (name) => ({ type: PROFILE_SET_NAME, payload: name });
export const setProfileEmail = (email) => ({ type: PROFILE_SET_EMAIL, payload: email });
export const setProfilePass = (password) => ({ type: PROFILE_SET_PASS, payload: password });

export const resetRegisterForm = () => ({ type: REGISTER_FORM_RESET });
export const resetLoginForm = () => ({ type: LOGIN_FORM_RESET });
export const resetForgotForm = () => ({ type: FORGOT_FORM_RESET });
export const resetResetForm = () => ({ type: RESET_FORM_RESET });
