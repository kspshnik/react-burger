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
  WS_ERROR,
  GET_ORDER_404,
  CLEAR_404,
} from '../actions';

import {
  TClearErrorAction, TClearOrderNotFoundAction,
  TClearSuccessAction,
  TCodeRequestFailedAction,
  TCodeRequestSucceedAction, TGeneralAPIErrorAction,
  TGetOrderFailedAction,
  TGetOrderNotFoundAction,
  TGetOrderRequestedAction,
  TGetOrderSucceedAction,
  TIngredientsFailedAction,
  TIngredientsReceivedAction,
  TIngredientsRequestedAction,
  TLoginFailedAction,
  TLoginSucceedAction,
  TLogoutFailedAction,
  TLogoutSucceedAction, TPasswordResetFailedAction,
  TPasswordResetSucceedAction,
  TPlaceOrderFailedAction,
  TPlaceOrderRequestedAction,
  TPlaceOrderSucceedAction, TProfileUpdateFailedAction, TProfileUpdateSucceedAction,
  TRefreshFailedAction,
  TRegisterFailedAction,
  TRegisterSucceedAction,
  TUserFailedAction, TWSErrorAction,
} from './actions.types';

export const ingredientsRequested = () : TIngredientsRequestedAction => (
  { type: GET_INGREDIENTS_REQUEST }
);
export const ingredientsReceived = () : TIngredientsReceivedAction => (
  { type: GET_INGREDIENTS_SUCCEED }
);
export const ingredientsFailed = (message : string) : TIngredientsFailedAction => (
  {
    type: GET_INGREDIENTS_FAIL,
    payload: message,
  }
);

export const placeOrderRequested = () : TPlaceOrderRequestedAction => (
  { type: PLACE_ORDER_REQUEST }
);
export const placeOrderSucceed = () : TPlaceOrderSucceedAction => (
  { type: PLACE_ORDER_SUCCEED }
);
export const placeOrderFailed = (message : string) : TPlaceOrderFailedAction => (
  { type: PLACE_ORDER_FAIL, payload: message }
);

export const getOrderRequested = () : TGetOrderRequestedAction => (
  { type: GET_ORDER_REQUEST }
);
export const getOrderSucceed = () : TGetOrderSucceedAction => (
  { type: GET_ORDER_SUCCEED }
);
export const getOrderFailed = (message : string) : TGetOrderFailedAction => (
  {
    type: GET_ORDER_FAIL,
    payload: message,
  }
);
export const getOrderNotFound = () : TGetOrderNotFoundAction => (
  { type: GET_ORDER_404 }
);

export const userFailed = (message: string) : TUserFailedAction => (
  {
    type: GET_USER_FAIL,
    payload: message,
  }
);
export const refreshFailed = (message : string) : TRefreshFailedAction => (
  {
    type: REFRESH_TOKEN_FAIL,
    payload: message,
  }
);

export const registerSucceed = (message : string) : TRegisterSucceedAction => (
  {
    type: REGISTER_SUCCEED,
    payload: message,
  }
);
export const registerFailed = (message : string) : TRegisterFailedAction => (
  {
    type: REGISTER_FAILED,
    payload: message,
  }
);

export const loginSucceed = (message : string) : TLoginSucceedAction => (
  {
    type: LOGIN_SUCCEED,
    payload: message,
  }
);
export const loginFailed = (message : string) : TLoginFailedAction => (
  {
    type: LOGIN_FAILED,
    payload: message,
  }
);
export const logoutSucceed = (message : string) : TLogoutSucceedAction => (
  {
    type: LOGOUT_SUCCEED,
    payload: message,
  }
);
export const logoutFailed = (message : string) : TLogoutFailedAction => (
  {
    type: LOGOUT_FAILED,
    payload: message,
  }
);

export const codeRequestSucceed = (message : string) : TCodeRequestSucceedAction => (
  {
    type: REQUEST_CODE_SUCCEED,
    payload: message,
  }
);
export const codeRequestFailed = (message : string) : TCodeRequestFailedAction => (
  {
    type: REQUEST_CODE_FAILED,
    payload: message,
  }
);

export const passwordResetSucceed = (message : string) : TPasswordResetSucceedAction => (
  {
    type: RESET_PASSWORD_SUCCEED,
    payload: message,
  }
);
export const passwordResetFailed = (message : string) : TPasswordResetFailedAction => (
  {
    type: RESET_PASSWORD_FAILED,
    payload: message,
  }
);

export const profileUpdateSucceed = (message : string) : TProfileUpdateSucceedAction => (
  {
    type: UPDATE_PROFILE_SUCCEED,
    payload: message,
  }
);
export const profileUpdateFailed = (message : string) : TProfileUpdateFailedAction => (
  {
    type: UPDATE_PROFILE_FAILED,
    payload: message,
  }
);

export const clearSuccess = () : TClearSuccessAction => (
  {
    type: CLOSE_SUCCESS,
  }
);
export const clearError = () : TClearErrorAction => (
  {
    type: DISMISS_ERROR,
  }
);
export const clearOrderNotFound = () : TClearOrderNotFoundAction => (
  {
    type: CLEAR_404,
  }
);

export const wsError = (message : string) : TWSErrorAction => (
  {
    type: WS_ERROR,
    payload: message,
  }
);

export const generalAPIError = (message : string) : TGeneralAPIErrorAction => (
  {
    type: ERROR_500,
    payload: message,
  }
);
