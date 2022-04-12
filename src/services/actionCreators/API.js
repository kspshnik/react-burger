import {
  DISMISS_ERROR,
  GET_INGREDIENTS_FAIL,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCEED,
  GET_USER_FAIL,
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCEED,
  REFRESH_TOKEN_FAIL,
  REQUEST_CODE_SUCCEED,
  REQUEST_CODE_FAILED,
  RESET_PASSWORD_SUCCEED,
  RESET_PASSWORD_FAILED,
  UPDATE_PROFILE_SUCCEED,
  UPDATE_PROFILE_FAILED,
  CLOSE_SUCCESS,
} from '../actions';

export const ingredientsRequested = () => ({ type: GET_INGREDIENTS_REQUEST });
export const ingredientsReceived = () => ({ type: GET_INGREDIENTS_SUCCEED });
export const ingredientsFailed = (message) => ({ type: GET_INGREDIENTS_FAIL, payload: message });

export const orderRequested = () => ({ type: PLACE_ORDER_REQUEST });
export const orderPlaced = () => ({ type: PLACE_ORDER_SUCCEED });
export const orderFailed = (message) => ({ type: PLACE_ORDER_FAIL, payload: message });

export const userFailed = (message) => ({ type: GET_USER_FAIL, payload: message });
export const refreshFailed = (message) => ({ type: REFRESH_TOKEN_FAIL, payload: message });

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
