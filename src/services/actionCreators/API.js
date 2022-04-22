import {
  DISMISS_ERROR,
  GET_INGREDIENTS_FAIL,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCEED,
  GET_USER_FAIL,
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCEED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCEED,
  GET_ORDER_FAIL,
  REFRESH_TOKEN_FAIL,
  REGISTER_SUCCEED,
  REGISTER_FAILED,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  LOGOUT_SUCCEED,
  LOGOUT_FAILED,
  REQUEST_CODE_SUCCEED,
  REQUEST_CODE_FAILED,
  RESET_PASSWORD_SUCCEED,
  RESET_PASSWORD_FAILED,
  UPDATE_PROFILE_SUCCEED,
  UPDATE_PROFILE_FAILED,
  CLOSE_SUCCESS,
  ERROR_500,
  WS_ERROR, GET_ORDER_404, CLEAR_404,
} from '../actions';

export const ingredientsRequested = () => ({ type: GET_INGREDIENTS_REQUEST });
export const ingredientsReceived = () => ({ type: GET_INGREDIENTS_SUCCEED });
export const ingredientsFailed = (message) => ({ type: GET_INGREDIENTS_FAIL, payload: message });

export const placeOrderRequested = () => ({ type: PLACE_ORDER_REQUEST });
export const placeOrderSucceed = () => ({ type: PLACE_ORDER_SUCCEED });
export const placeOrderFailed = (message) => ({ type: PLACE_ORDER_FAIL, payload: message });

export const getOrderRequested = () => ({ type: GET_ORDER_REQUEST });
export const getOrderSucceed = () => ({ type: GET_ORDER_SUCCEED });
export const getOrderFailed = (message) => ({ type: GET_ORDER_FAIL, payload: message });
export const getOrderNotFound = () => ({ type: GET_ORDER_404 });

export const userFailed = (message) => ({ type: GET_USER_FAIL, payload: message });
export const refreshFailed = (message) => ({ type: REFRESH_TOKEN_FAIL, payload: message });

export const registerSucceed = (message) => ({ type: REGISTER_SUCCEED, payload: message });
export const registerFailed = (message) => ({ type: REGISTER_FAILED, payload: message });

export const loginSucceed = (message) => ({ type: LOGIN_SUCCEED, payload: message });
export const loginFailed = (message) => ({ type: LOGIN_FAILED, payload: message });
export const logoutSucceed = (message) => ({ type: LOGOUT_SUCCEED, payload: message });
export const logoutFailed = (message) => ({ type: LOGOUT_FAILED, payload: message });

export const codeRequestSucceed = (message) => ({ type: REQUEST_CODE_SUCCEED, payload: message });
export const codeRequestFailed = (message) => ({ type: REQUEST_CODE_FAILED, payload: message });

export const passwordResetSucceed = (message) => ({
  type: RESET_PASSWORD_SUCCEED,
  payload: message,
});
export const passwordResetFailed = (message) => ({ type: RESET_PASSWORD_FAILED, payload: message });

export const profileUpdateSucceed = (message) => ({
  type: UPDATE_PROFILE_SUCCEED,
  payload: message,
});
export const profileUpdateFailed = (message) => ({ type: UPDATE_PROFILE_FAILED, payload: message });

export const clearSuccess = () => ({ type: CLOSE_SUCCESS });
export const clearError = () => ({ type: DISMISS_ERROR });
export const clearOrderNotFound = () => ({ type: CLEAR_404 });

export const wsError = (message) => ({ type: WS_ERROR, payload: message });

export const generalAPIError = (message) => ({ type: ERROR_500, payload: message });
