/* eslint-disable @typescript-eslint/prefer-as-const */

export const REGISTER_SET_NAME : 'REGISTER_SET_NAME' = 'REGISTER_SET_NAME';
export const REGISTER_SET_EMAIL : 'REGISTER_SET_EMAIL' = 'REGISTER_SET_EMAIL';
export const REGISTER_SET_PASS : 'REGISTER_SET_PASS' = 'REGISTER_SET_PASS';

export const LOGIN_SET_EMAIL : 'LOGIN_SET_EMAIL' = 'LOGIN_SET_EMAIL';
export const LOGIN_SET_PASS : 'LOGIN_SET_PASS' = 'LOGIN_SET_PASS';

export const FORGOT_SET_EMAIL : 'FORGOT_SET_EMAIL' = 'FORGOT_SET_EMAIL';

export const RESET_SET_PASS : 'RESET_SET_PASS' = 'RESET_SET_PASS';
export const RESET_SET_CODE : 'RESET_SET_CODE' = 'RESET_SET_CODE';

export const PROFILE_SET_NAME : 'PROFILE_SET_NAME' = 'PROFILE_SET_NAME';
export const PROFILE_SET_EMAIL : 'PROFILE_SET_EMAIL' = 'PROFILE_SET_EMAIL';
export const PROFILE_SET_PASS : 'PROFILE_SET_PASS' = 'PROFILE_SET_PASS';

export const REGISTER_FORM_RESET : 'REGISTER_FORM_RESET' = 'REGISTER_FORM_RESET';
export const LOGIN_FORM_RESET : 'LOGIN_FORM_RESET' = 'LOGIN_FORM_RESET';
export const FORGOT_FORM_RESET : 'FORGOT_FORM_RESET' = 'FORGOT_FORM_RESET';
export const RESET_FORM_RESET : 'RESET_FORM_RESET' = 'RESET_FORM_RESET';
export const PROFILE_FORM_RESET = 'PROFILE_FORM_RESET';

type TActionTypesForms = 'REGISTER_SET_NAME' | 'REGISTER_SET_EMAIL' | 'REGISTER_SET_PASS' | 'LOGIN_SET_EMAIL'
| 'LOGIN_SET_PASS' | 'FORGOT_SET_EMAIL' | 'RESET_SET_PASS' | 'RESET_SET_CODE' | 'PROFILE_SET_NAME'
| 'PROFILE_SET_EMAIL' | 'PROFILE_SET_PASS' | 'REGISTER_FORM_RESET' | 'LOGIN_FORM_RESET' | 'FORGOT_FORM_RESET'
| 'RESET_FORM_RESET' | 'PROFILE_FORM_RESET';

export default TActionTypesForms;
