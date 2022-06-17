import {
  TIngredients, TOrder, TOrders, TOrdersData, TUser,
} from './types';

export type TAPIBasicResponseData = {
  success: boolean,
  message?: string,
};

export type TAPIIngredientsResponseData = TAPIBasicResponseData & {
  data: TIngredients,
};

export type TAPIUserProfile = {
  name?: string,
  email?: string,
  password?: string,
};

export type TAPIOrdersResponseData = TAPIBasicResponseData & {
  orders: TOrders,
};

export type TAPIError = {
  success: boolean,
  message?: string,
};

export type TAPIPostOrderRequestData = {
  ingredients: TIngredients,
};

export type TAPIOrderResponseData = TAPIBasicResponseData & {
  name: string,
  order: TOrder,
};

export type TAPIBasicAuth = {
  accessToken: string,
  refreshToken: string,
};

export type TAPIAuthResponseData = TAPIBasicResponseData & TAPIBasicAuth;

export type TAPIUserData = {
  user: TUser,
};

export type TAPIUserResponseData = TAPIBasicResponseData & TAPIBasicAuth & TAPIUserData;

export type TAPIAuthUserResponseData = TAPIBasicResponseData & TAPIUserData;

export type TAPITokenRequestData = {
  token: string,
};

export type TAPICodeRequestData = {
  email: string;
};

export type TAPIResetRequestData = {
  password: string,
  token: string,
};

export type TAPIPatchUserResponseData = TAPIBasicResponseData & TAPIUserData;

export type TAPIWSResponseData = TAPIBasicResponseData & TOrdersData;
