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
  RELEASE_INGREDIENT,
  SELECT_INGREDIENT,
  SET_INGREDIENTS,
} from '../actions';

import { TIngredient, TIngredients } from '../../types/types';

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

export type TAPIAction = TIngredientsRequestedAction | TIngredientsReceivedAction
| TIngredientsFailedAction | TGetOrderRequestedAction | TGetOrderSucceedAction
| TGetOrderFailedAction | TGetOrderNotFoundAction | TGeneralAPIErrorAction
| TPlaceOrderRequestedAction | TPlaceOrderSucceedAction | TPlaceOrderFailedAction
| TUserFailedAction | TRefreshFailedAction | TRegisterSucceedAction | TRegisterFailedAction
| TLoginSucceedAction | TLoginFailedAction | TLogoutSucceedAction | TLogoutFailedAction
| TCodeRequestSucceedAction | TCodeRequestFailedAction | TPasswordResetSucceedAction
| TPasswordResetFailedAction | TProfileUpdateSucceedAction | TProfileUpdateFailedAction
| TClearSuccessAction | TClearErrorAction | TClearOrderNotFoundAction | TWSErrorAction;

export type TSetRegisterNameAction = {
  readonly type: typeof REGISTER_SET_NAME,
  readonly payload: string
};
export type TSetRegisterEmailAction = {
  readonly type: typeof REGISTER_SET_EMAIL,
  readonly payload: string
};
export type TSetRegisterPassAction = {
  readonly type: typeof REGISTER_SET_PASS,
  readonly payload: string
};

export type TSetLoginEmailAction = {
  readonly type: typeof LOGIN_SET_EMAIL,
  readonly payload: string
};
export type TSetLoginPassAction = {
  readonly type: typeof LOGIN_SET_PASS,
  readonly payload: string
};

export type TSetForgotEmailAction = {
  readonly type: typeof FORGOT_SET_EMAIL,
  readonly payload: string };

export type TSetResetCodeAction = {
  readonly type: typeof RESET_SET_CODE,
  readonly payload: string
};
export type TSetResetPassAction = {
  readonly type: typeof RESET_SET_PASS,
  readonly payload: string
};

export type TSetProfileNameAction = {
  readonly type: typeof PROFILE_SET_NAME,
  readonly payload: string
};
export type TSetProfileEmailAction = {
  readonly type: typeof PROFILE_SET_EMAIL,
  readonly payload: string
};
export type TSetProfilePassAction = {
  readonly type: typeof PROFILE_SET_PASS,
  readonly payload: string
};

export type TResetRegisterFormAction = {
  readonly type: typeof REGISTER_FORM_RESET
};
export type TResetLoginFormAction = {
  readonly type: typeof LOGIN_FORM_RESET
};
export type TResetForgotFormAction = {
  readonly type: typeof FORGOT_FORM_RESET
};
export type TResetResetFormAction = {
  readonly type: typeof RESET_FORM_RESET
};
export type TResetProfileFormAction = {
  readonly type: typeof PROFILE_FORM_RESET
};

export type TFormsAction = TSetLoginEmailAction | TSetLoginPassAction | TSetRegisterNameAction
| TSetRegisterEmailAction | TSetRegisterPassAction | TSetResetCodeAction | TSetResetPassAction
| TSetProfileNameAction | TSetProfileEmailAction | TSetProfilePassAction | TSetForgotEmailAction
| TResetLoginFormAction | TResetRegisterFormAction | TResetResetFormAction | TResetForgotFormAction
| TResetProfileFormAction;

export type TSetIngredientsAction = {
  readonly type: typeof SET_INGREDIENTS,
  readonly payload: TIngredients
};
export type TSelectIngredientAction = {
  readonly type: typeof SELECT_INGREDIENT,
  readonly payload: TIngredient
};
export type TReleaseIngredientAction = {
  readonly type: typeof RELEASE_INGREDIENT
};

export type TIngredientsAction = TSetIngredientsAction | TSelectIngredientAction
| TReleaseIngredientAction;

type TAppActionTypes = TAPIAction & TFormsAction & TIngredientsAction;
export default TAppActionTypes;
