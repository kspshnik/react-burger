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
  FEED_ORDER_CAPTURE,
  FEED_ORDER_RELEASE,
  SET_BUN,
  INSERT_INTERIOR,
  DROP_INTERIOR,
  CLEAR_BURGER,
  MOVE_INTERIOR,
  ARCHIVE_ORDER,
  SET_ORDER,
  PRIVATE_FEED_CLOSE,
  PRIVATE_FEED_MESSAGE,
  PRIVATE_FEED_OPEN,
  PRIVATE_FEED_START,
  PRIVATE_FEED_STOP,
  PRIVATE_FEED_CONNECT_REQUESTED,
  PRIVATE_FEED_DISCONNECT_REQUESTED,
  PUBLIC_FEED_CLOSE,
  PUBLIC_FEED_MESSAGE,
  PUBLIC_FEED_OPEN,
  PUBLIC_FEED_START,
  PUBLIC_FEED_STOP,
  PUBLIC_FEED_CONNECT_REQUESTED,
  PUBLIC_FEED_DISCONNECT_REQUESTED,
  SET_USER,
  RESET_USER,
} from '../actions';

import {
  TOrder, TIngredient, TOrderRecord, TUser, TAllIngredients,
} from '../../types/types';
import { TWSData } from '../../types/websocket.types';

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

export type TAPIActions = TIngredientsRequestedAction | TIngredientsReceivedAction
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
export type TResetRegisterFormAction = {
  readonly type: typeof REGISTER_FORM_RESET
};

export type TRegisterFormActions = TSetRegisterNameAction | TSetRegisterEmailAction
| TSetRegisterPassAction | TResetRegisterFormAction;

export type TSetLoginEmailAction = {
  readonly type: typeof LOGIN_SET_EMAIL,
  readonly payload: string
};
export type TSetLoginPassAction = {
  readonly type: typeof LOGIN_SET_PASS,
  readonly payload: string
};
export type TResetLoginFormAction = {
  readonly type: typeof LOGIN_FORM_RESET
};

export type TLoginFormActions = TSetLoginEmailAction | TSetLoginPassAction
| TResetLoginFormAction;

export type TSetForgotEmailAction = {
  readonly type: typeof FORGOT_SET_EMAIL,
  readonly payload: string };

export type TResetForgotFormAction = {
  readonly type: typeof FORGOT_FORM_RESET
};

export type TForgotFormActions = TSetForgotEmailAction | TResetForgotFormAction;

export type TSetResetCodeAction = {
  readonly type: typeof RESET_SET_CODE,
  readonly payload: string
};
export type TSetResetPassAction = {
  readonly type: typeof RESET_SET_PASS,
  readonly payload: string
};
export type TResetResetFormAction = {
  readonly type: typeof RESET_FORM_RESET
};

export type TResetFormActions = TSetResetCodeAction | TSetResetPassAction
| TResetResetFormAction;

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

export type TResetProfileFormAction = {
  readonly type: typeof PROFILE_FORM_RESET
};

export type TProfileFormActions = TSetProfileNameAction | TSetProfileEmailAction
| TSetProfilePassAction | TResetProfileFormAction;

export type TFormsActions = TSetLoginEmailAction | TSetLoginPassAction | TSetRegisterNameAction
| TSetRegisterEmailAction | TSetRegisterPassAction | TSetResetCodeAction | TSetResetPassAction
| TSetProfileNameAction | TSetProfileEmailAction | TSetProfilePassAction | TSetForgotEmailAction
| TResetLoginFormAction | TResetRegisterFormAction | TResetResetFormAction | TResetForgotFormAction
| TResetProfileFormAction;

export type TSetIngredientsAction = {
  readonly type: typeof SET_INGREDIENTS,
  readonly payload: TAllIngredients
};
export type TSelectIngredientAction = {
  readonly type: typeof SELECT_INGREDIENT,
  readonly payload: TIngredient
};
export type TReleaseIngredientAction = {
  readonly type: typeof RELEASE_INGREDIENT
};

export type TIngredientsActions = TSetIngredientsAction | TSelectIngredientAction
| TReleaseIngredientAction;

export type TCaptureOrderAction = {
  readonly type: typeof FEED_ORDER_CAPTURE,
  readonly payload: TOrder,
};
export type TReleaseOrderAction = {
  readonly type: typeof FEED_ORDER_RELEASE,
};

export type TSelectedOrderActions = TCaptureOrderAction | TReleaseOrderAction;

export type TSetBunAction = {
  readonly type: typeof SET_BUN,
  readonly payload: TIngredient,
};
export type TInsertInteriorAction = {
  readonly type: typeof INSERT_INTERIOR,
  readonly payload: TIngredient,
};
export type TDropInteriorAction = {
  readonly type: typeof DROP_INTERIOR,
  readonly payload: TIngredient
};
export type TClearBurgerAction = {
  readonly type: typeof CLEAR_BURGER
};
export type TMoveInteriorAction = {
  readonly type: typeof MOVE_INTERIOR,
  readonly payload: { ingredient : TIngredient, to : number },
};
export type TArchiveOrderAction = {
  readonly type: typeof ARCHIVE_ORDER
};
export type TSetOrderAction = {
  readonly type: typeof SET_ORDER,
  readonly payload: TOrderRecord
};

export type TOrderActions = TSetBunAction | TInsertInteriorAction | TDropInteriorAction
| TClearBurgerAction | TMoveInteriorAction | TArchiveOrderAction | TSetOrderAction;

export type TStartPrivateFeedAction = {
  readonly type: typeof PRIVATE_FEED_START
};
export type TStopPrivateFeedAction = {
  readonly type: typeof PRIVATE_FEED_STOP
};
export type TSetPrivateFeedOpenedAction = {
  readonly type: typeof PRIVATE_FEED_OPEN
};
export type TSetPrivateFeedClosedAction = {
  readonly type: typeof PRIVATE_FEED_CLOSE
};
export type TOnPrivateFeedMessageAction = {
  readonly type: typeof PRIVATE_FEED_MESSAGE,
  readonly payload: TWSData };
export type TRequestPrivateFeedAction = {
  readonly type: typeof PRIVATE_FEED_CONNECT_REQUESTED
};
export type TDiscardPrivateFeedAction = {
  readonly type: typeof PRIVATE_FEED_DISCONNECT_REQUESTED
};

export type TPrivateFeedActions = TStartPrivateFeedAction | TStopPrivateFeedAction
| TSetPrivateFeedClosedAction | TSetPrivateFeedOpenedAction | TOnPrivateFeedMessageAction
| TRequestPrivateFeedAction | TDiscardPrivateFeedAction;

export type TStartPublicFeedAction = {
  readonly type: typeof PUBLIC_FEED_START
};
export type TStopPublicFeedAction = {
  readonly type: typeof PUBLIC_FEED_STOP
};
export type TSetPublicFeedOpenedAction = {
  readonly type: typeof PUBLIC_FEED_OPEN
};
export type TSetPublicFeedClosedAction = {
  readonly type: typeof PUBLIC_FEED_CLOSE
};
export type TOnPublicFeedMessageAction = {
  readonly type: typeof PUBLIC_FEED_MESSAGE,
  readonly payload: TWSData };
export type TRequestPublicFeedAction = {
  readonly type: typeof PUBLIC_FEED_CONNECT_REQUESTED
};
export type TDiscardPublicFeedAction = {
  readonly type: typeof PUBLIC_FEED_DISCONNECT_REQUESTED
};

export type TPublicFeedActions = TStartPublicFeedAction | TStopPublicFeedAction
| TSetPublicFeedClosedAction | TSetPublicFeedOpenedAction | TOnPublicFeedMessageAction
| TRequestPublicFeedAction | TDiscardPublicFeedAction;

export type TSetUserAction = {
  readonly type: typeof SET_USER,
  readonly payload: TUser
};
export type TResetUserAction = {
  readonly type: typeof RESET_USER
};
export type TUserActions = TSetUserAction | TResetUserAction;

type TAppActions = TIngredientsRequestedAction | TIngredientsReceivedAction
| TIngredientsFailedAction | TGetOrderRequestedAction | TGetOrderSucceedAction
| TGetOrderFailedAction | TGetOrderNotFoundAction | TGeneralAPIErrorAction
| TPlaceOrderRequestedAction | TPlaceOrderSucceedAction | TPlaceOrderFailedAction
| TUserFailedAction | TRefreshFailedAction | TRegisterSucceedAction | TRegisterFailedAction
| TLoginSucceedAction | TLoginFailedAction | TLogoutSucceedAction | TLogoutFailedAction
| TCodeRequestSucceedAction | TCodeRequestFailedAction | TPasswordResetSucceedAction
| TPasswordResetFailedAction | TProfileUpdateSucceedAction | TProfileUpdateFailedAction
| TClearSuccessAction | TClearErrorAction | TClearOrderNotFoundAction | TWSErrorAction
| TSetLoginEmailAction | TSetLoginPassAction | TSetRegisterNameAction
| TSetRegisterEmailAction | TSetRegisterPassAction | TSetResetCodeAction | TSetResetPassAction
| TSetProfileNameAction | TSetProfileEmailAction | TSetProfilePassAction | TSetForgotEmailAction
| TResetLoginFormAction | TResetRegisterFormAction | TResetResetFormAction | TResetForgotFormAction
| TResetProfileFormAction | TSetIngredientsAction | TSelectIngredientAction
| TReleaseIngredientAction | TCaptureOrderAction | TReleaseOrderAction | TSetBunAction
| TInsertInteriorAction | TDropInteriorAction | TClearBurgerAction | TMoveInteriorAction
| TArchiveOrderAction | TSetOrderAction | TPrivateFeedActions | TStartPrivateFeedAction
| TStopPrivateFeedAction | TSetPrivateFeedClosedAction | TSetPrivateFeedOpenedAction
| TOnPrivateFeedMessageAction | TRequestPrivateFeedAction | TDiscardPrivateFeedAction
| TPublicFeedActions | TStartPublicFeedAction | TStopPublicFeedAction
| TSetPublicFeedClosedAction | TSetPublicFeedOpenedAction | TOnPublicFeedMessageAction
| TRequestPublicFeedAction | TDiscardPublicFeedAction | TSetUserAction | TResetUserAction;

export default TAppActions;
