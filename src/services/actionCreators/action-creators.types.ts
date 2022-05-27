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
  WS_ERROR
} from "../actions";

export interface IIngredientsRequested  {
  readonly type: typeof GET_INGREDIENTS_REQUEST
};

export interface IIngredientsReceived {
  readonly type: typeof GET_INGREDIENTS_SUCCEED
};
export interface ingredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAIL,
  readonly payload: string
};

export interface placeOrderRequested {
  readonly type: typeof PLACE_ORDER_REQUEST
};
export interface placeOrderSucceed {
  readonly type: typeof PLACE_ORDER_SUCCEED
};
export interface placeOrderFailed {
  type: typeof PLACE_ORDER_FAIL,
  readonly payload: string };

export interface getOrderRequested {
  readonly type: typeof GET_ORDER_REQUEST
};
export interface getOrderSucceed {
  readonly type: typeof GET_ORDER_SUCCEED
};
export interface getOrderFailed {
  readonly type: typeof GET_ORDER_FAIL,
  readonly payload: string
};
export interface getOrderNotFound {
  readonly type: typeof GET_ORDER_404
};

export interface userFailed {
  readonly type: typeof GET_USER_FAIL,
  readonly payload: string
};

export interface refreshFailed { readonly type: typeof REFRESH_TOKEN_FAIL,
  readonly payload: string
};

export interface registerSucceed { readonly type: typeof REGISTER_SUCCEED, readonly payload: string
};
export interface registerFailed = (message) => ({ type: REGISTER_FAILED, payload: message });

export interface loginSucceed = (message) => ({ type: LOGIN_SUCCEED, payload: message });
export interface loginFailed = (message) => ({ type: LOGIN_FAILED, payload: message });
export interface logoutSucceed = (message) => ({ type: LOGOUT_SUCCEED, payload: message });
export interface logoutFailed = (message) => ({ type: LOGOUT_FAILED, payload: message });

export interface codeRequestSucceed = (message) => ({ type: REQUEST_CODE_SUCCEED, payload: message });
export interface codeRequestFailed = (message) => ({ type: REQUEST_CODE_FAILED, payload: message });

export interface passwordResetSucceed = (message) => ({
  type: RESET_PASSWORD_SUCCEED,
  payload: message,
});
export interface passwordResetFailed = (message) => ({ type: RESET_PASSWORD_FAILED, payload: message });

export interface profileUpdateSucceed = (message) => ({
  type: UPDATE_PROFILE_SUCCEED,
  payload: message,
});
export interface profileUpdateFailed = (message) => ({ type: UPDATE_PROFILE_FAILED, payload: message });

export interface clearSuccess = () => ({ type: CLOSE_SUCCESS });
export interface clearError = () => ({ type: DISMISS_ERROR });
export interface clearOrderNotFound = () => ({ type: CLEAR_404 });

export interface wsError = (message) => ({ type: WS_ERROR, payload: message });

export interface generalAPIError = (message) => ({ type: ERROR_500, payload: message });
