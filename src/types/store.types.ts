import {
  TAllIngredients,
  TIngredient,
  TIngredients,
  TOrder,
  TOrderRecord,
  TOrders,
} from './types';

export type TIngredientsState = {
  all: TAllIngredients | null,
  selected: TIngredient | null,
};

export type TOrderSelectState = {
  order: TOrder | null,
};

export type TOrderState = {
  bun: TIngredient | null,
  choice: TIngredients | [],
  accepted: TOrderRecord | null,
};

export type TFeedState = {
  orders: TOrders | null,
  total: number,
  totalToday: number,
  isOpen: boolean,
  requestedAt: number,
  discardedAt: number,
};

export type TUserDataFormState = {
  name: string,
  email: string,
  password: string,
};

export type TLoginFormState = {
  email: string,
  password: string,
};

export type TResetFormState = {
  code: string,
  password: string,
};

export type TUserState = {
  name: string,
  email: string,
  loggedIn: boolean,
};

export type TForgotFormState = {
  email: string,
};

export type TAPIState = {
  isIngredientsLoading: boolean,
  isOrderLoading: boolean,
  isOrderSent: boolean,
  isOrderNotFound: boolean,
  errorMessage: string,
  successMessage: string,
};
