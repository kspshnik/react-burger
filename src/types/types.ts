import {
  BUN, SAUCE, MAIN, PENDING, CREATED, DONE,
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

export type TOrderRecord = {
  success: boolean,
  name: string,
  order: TOrder,
};

export type TOrderRecords = Array<TOrderRecord>;
