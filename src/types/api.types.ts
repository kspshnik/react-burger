import {TIngredients, TOrder, TOrders} from './types';

export type TAPIIngredients = {
  success: boolean,
  data: TIngredients,
  message?: string,
};

export type TAPIUserProfile = {
  name?: string,
  email?: string,
  password?: string,
};

export type TAPIOrders = {
  success: boolean,
  orders: TOrders,
  message?: string,
};

export type TAPIError = {
  success: boolean,
  message?: string,
};

export type TAPIOrderRequest = {
  ingredients: TIngredients,
};

export type TAPIOrderResponse = {
  success: boolean,
  name: string,
  order: TOrder,
};
