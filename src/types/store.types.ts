import {
  TIngredient, TIngredients, TOrder, TOrderRecord, TOrderRecords, TOrders,
} from './types';

export type TIngredientsState = {
  all: TIngredients | null,
  selected: TIngredient | null,
};

export type TOrderSelectState = {
  order: TOrder | null,
};

export type TOrderState = {
  bun: TIngredient | null,
  choice: TIngredients | [],
  accepted: TOrderRecord | null,
  past: TOrderRecords | [],
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
