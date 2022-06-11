import {TIngredients, TOrders} from './types';

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
