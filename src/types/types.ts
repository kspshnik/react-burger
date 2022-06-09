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
};

export type TIngredients = Array<TIngredient>;

export type TOrderStatus = typeof PENDING | typeof CREATED | typeof DONE;

export type TAcceptedOrder = {
  _id: string,
  status: TOrderStatus,
  name: string,
  createdAt: string,
  updatedAt: string,
  number: number,
};
