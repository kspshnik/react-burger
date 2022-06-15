import { useLocation } from 'react-router-dom';
import {
  BUN,
  SAUCE,
  MAIN,
  PENDING,
  CREATED,
  DONE,
  OK,
  INFO,
  ERROR,
  INGREDIENT,
  ORDER,
  REASON_404_INGREDIENT,
  REASON_404_ORDER,
  REASON_404_GENERAL,
} from '../constants';

export type TIngredientType = typeof BUN | typeof SAUCE | typeof MAIN;

export type TIngredient = {
  _id : string,
  name : string,
  type: TIngredientType,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  __v: number,
  bcid?: string,
};

export type TIngredients = Array<TIngredient>;

export type TAllIngredients = {
  [key: string]: TIngredient,
};

export type TOrderStatus = typeof PENDING | typeof CREATED | typeof DONE;

export type TUser = {
  name: string,
  email: string,
};

export type TOwnerRecord = {
  createdAt: string,
  email: string,
  name: string,
  updatedAt: string,
};

export type TOrder = {
  _id: string,
  ingredients: Array<string> | TIngredients,
  status: TOrderStatus,
  name: string,
  createdAt: string,
  updatedAt: string,
  number: number,
  price?: number,
  owner?: string | TOwnerRecord,
};

export type TOrders = Array<TOrder>;

export type TOrdersData = {
  orders: Array<TOrder>,
  total: number,
  totalToday: number,
};

export type TOrderRecord = {
  success: boolean,
  name: string,
  order: TOrder,
};

export type TLoginRequestData = {
  email: string,
  password: string,
};

export type TMoveData = {
  ingredient: TIngredient,
  to: number,
};

export type TRibbonItemIngredient = {
  _id: string,
  key: string,
};

export interface IDropHandler {
  (dropItem : TIngredient) : void;
}

export interface IGenericHandler {
  () : void;
}
export type TReasonFor404Type = typeof REASON_404_INGREDIENT
  | typeof REASON_404_ORDER
  | typeof REASON_404_GENERAL
  | null;
export type TTooltipType = typeof OK | typeof INFO | typeof ERROR;

export type TDropItemType = typeof INGREDIENT | typeof ORDER;

export interface MyLocation {
  pathname: string;
  search: string;
  state: TLocationState;
  hash: string;
  key?: string | undefined;
}

export type TLocation = ReturnType<typeof useLocation>;
export type TLocationState = {
  [key: string]: string | null | TLocationState | TLocation,
};
