import {
  GET_USER_REQUEST,
  GET_USER_SUCCEED,
  GET_USER_FAIL,
} from '../actions';

export const userRequested = () => ({ type: GET_USER_REQUEST });
export const userReceived = () => ({ type: GET_USER_SUCCEED });
export const userFailed = (message) => ({ type: GET_USER_FAIL, payload: message });
