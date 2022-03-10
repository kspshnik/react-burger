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
} from '../actions';

export const ingredientsRequested = () => ({ type: GET_INGREDIENTS_REQUEST });
export const ingredientsReceived = () => ({ type: GET_INGREDIENTS_SUCCEED });
export const ingredientsFailed = (message) => ({ type: GET_INGREDIENTS_FAIL, payload: message });

export const orderRequested = () => ({ type: PLACE_ORDER_REQUEST });
export const orderPlaced = () => ({ type: PLACE_ORDER_SUCCEED });
export const orderFailed = (message) => ({ type: PLACE_ORDER_FAIL, payload: message });

export const userFailed = (message) => ({ type: GET_USER_FAIL, payload: message });
export const refreshFailed = (message) => ({ type: REFRESH_TOKEN_FAIL, payload: message });

export const clearError = () => ({ type: DISMISS_ERROR });
