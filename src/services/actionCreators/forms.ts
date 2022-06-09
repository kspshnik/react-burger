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
  PROFILE_FORM_RESET,
} from '../actions';

import {
  TResetForgotFormAction,
  TResetLoginFormAction,
  TResetProfileFormAction,
  TResetRegisterFormAction,
  TResetResetFormAction,
  TSetForgotEmailAction,
  TSetLoginEmailAction,
  TSetLoginPassAction,
  TSetProfileEmailAction,
  TSetProfileNameAction,
  TSetProfilePassAction,
  TSetRegisterEmailAction,
  TSetRegisterNameAction,
  TSetRegisterPassAction,
  TSetResetCodeAction,
  TSetResetPassAction,
} from './actions.types';

export const setRegisterName = (name : string) : TSetRegisterNameAction => (
  {
    type: REGISTER_SET_NAME,
    payload: name,
  }
);
export const setRegisterEmail = (email : string) : TSetRegisterEmailAction => (
  {
    type: REGISTER_SET_EMAIL,
    payload: email,
  }
);
export const setRegisterPass = (password : string) : TSetRegisterPassAction => (
  {
    type: REGISTER_SET_PASS,
    payload: password,
  }
);

export const setLoginEmail = (email : string) : TSetLoginEmailAction => (
  {
    type: LOGIN_SET_EMAIL,
    payload: email,
  }
);
export const setLoginPass = (password : string) : TSetLoginPassAction => (
  {
    type: LOGIN_SET_PASS,
    payload: password,
  }
);

export const setForgotEmail = (email : string) : TSetForgotEmailAction => (
  {
    type: FORGOT_SET_EMAIL,
    payload: email,
  }
);

export const setResetCode = (code : string) : TSetResetCodeAction => (
  {
    type: RESET_SET_CODE,
    payload: code,
  }
);
export const setResetPass = (password : string) : TSetResetPassAction => (
  {
    type: RESET_SET_PASS,
    payload: password,
  }
);

export const setProfileName = (name : string) : TSetProfileNameAction => (
  {
    type: PROFILE_SET_NAME,
    payload: name,
  }
);
export const setProfileEmail = (email : string) : TSetProfileEmailAction => (
  {
    type: PROFILE_SET_EMAIL,
    payload: email,
  }
);
export const setProfilePass = (password : string) : TSetProfilePassAction => (
  {
    type: PROFILE_SET_PASS,
    payload: password,
  }
);

export const resetRegisterForm = () : TResetRegisterFormAction => (
  {
    type: REGISTER_FORM_RESET,
  }
);
export const resetLoginForm = () : TResetLoginFormAction => (
  {
    type: LOGIN_FORM_RESET,
  }
);
export const resetForgotForm = () : TResetForgotFormAction => (
  {
    type: FORGOT_FORM_RESET,
  }
);
export const resetResetForm = () : TResetResetFormAction => (
  {
    type: RESET_FORM_RESET,
  }
);
export const resetProfileForm = () : TResetProfileFormAction => (
  {
    type: PROFILE_FORM_RESET,
  }
);
