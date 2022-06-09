import {
  CLEAR_404,
  CLOSE_SUCCESS,
  DISMISS_ERROR,
  ERROR_500,
  GET_INGREDIENTS_FAIL,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCEED,
  GET_ORDER_404,
  GET_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCEED,
  GET_USER_FAIL,
  LOGIN_FAILED,
  LOGIN_SUCCEED,
  LOGOUT_FAILED,
  LOGOUT_SUCCEED,
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCEED,
  REFRESH_TOKEN_FAIL,
  REGISTER_FAILED,
  REGISTER_SUCCEED,
  REQUEST_CODE_FAILED,
  REQUEST_CODE_SUCCEED,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCEED,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_SUCCEED,
  WS_ERROR,
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

export type TIngredientsRequestedAction = {
  readonly type: typeof GET_INGREDIENTS_REQUEST
};

export type TIngredientsReceivedAction = {
  readonly type: typeof GET_INGREDIENTS_SUCCEED
};
export type TIngredientsFailedAction = {
  readonly type: typeof GET_INGREDIENTS_FAIL,
  readonly payload: string
};

export type TPlaceOrderRequestedAction = {
  readonly type: typeof PLACE_ORDER_REQUEST
};
export type TPlaceOrderSucceedAction = {
  readonly type: typeof PLACE_ORDER_SUCCEED
};
export type TPlaceOrderFailedAction = {
  type: typeof PLACE_ORDER_FAIL,
  readonly payload: string
};

export type TGetOrderRequestedAction = {
  readonly type: typeof GET_ORDER_REQUEST
};
export type TGetOrderSucceedAction = {
  readonly type: typeof GET_ORDER_SUCCEED
};
export type TGetOrderFailedAction = {
  readonly type: typeof GET_ORDER_FAIL,
  readonly payload: string
};
export type TGetOrderNotFoundAction = {
  readonly type: typeof GET_ORDER_404
};

export type TUserFailedAction = {
  readonly type: typeof GET_USER_FAIL,
  readonly payload: string
};

export type TRefreshFailedAction = {
  readonly type: typeof REFRESH_TOKEN_FAIL,
  readonly payload: string
};

export type TRegisterSucceedAction = {
  readonly type: typeof REGISTER_SUCCEED,
  readonly payload: string
};
export type TRegisterFailedAction = {
  readonly type: typeof REGISTER_FAILED,
  readonly payload: string
};

export type TLoginSucceedAction = {
  readonly type: typeof LOGIN_SUCCEED,
  readonly payload: string
};
export type TLoginFailedAction = {
  readonly type: typeof LOGIN_FAILED,
  readonly payload: string
};
export type TLogoutSucceedAction = {
  readonly type: typeof LOGOUT_SUCCEED,
  readonly payload: string
};
export type TLogoutFailedAction = {
  readonly type: typeof LOGOUT_FAILED,
  readonly payload: string
};

export type TCodeRequestSucceedAction = {
  readonly type: typeof REQUEST_CODE_SUCCEED,
  readonly payload: string
};
export type TCodeRequestFailedAction = {
  readonly type: typeof REQUEST_CODE_FAILED,
  readonly payload: string
};

export type TPasswordResetSucceedAction = {
  readonly type: typeof RESET_PASSWORD_SUCCEED,
  readonly payload: string,
};
export type TPasswordResetFailedAction = {
  readonly type: typeof RESET_PASSWORD_FAILED,
  readonly payload: string
};

export type TProfileUpdateSucceedAction = {
  readonly type: typeof UPDATE_PROFILE_SUCCEED,
  readonly payload: string,
};
export type TProfileUpdateFailedAction = {
  readonly type: typeof UPDATE_PROFILE_FAILED,
  readonly payload: string
};

export type TClearSuccessAction = {
  readonly type: typeof CLOSE_SUCCESS
};
export type TClearErrorAction = {
  readonly type: typeof DISMISS_ERROR
};
export type TClearOrderNotFoundAction = {
  readonly type: typeof CLEAR_404
};

export type TWSErrorAction = {
  readonly type: typeof WS_ERROR,
  readonly payload: string
};

export type TGeneralAPIErrorAction = {
  readonly type: typeof ERROR_500,
  readonly payload: string
};
