import { PRIVATE, PUBLIC } from '../constants';
import { TOrder } from './types';

export type TFeedType = typeof PUBLIC | typeof PRIVATE;

export type TWSData = {
  orders: Array<TOrder>,
  total: number,
  totalToday: number,
};
