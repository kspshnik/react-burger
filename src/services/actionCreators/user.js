import {
  SET_USER,
  LOGOUT_USER,
} from '../actions';

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const logoutUser = () => ({ type: LOGOUT_USER });
