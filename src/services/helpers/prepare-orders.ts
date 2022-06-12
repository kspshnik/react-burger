import { TOrders, TOrderStatus } from '../../types/types';

const prepareOrders = (orders : TOrders, status : TOrderStatus) : Array<number> => orders.reverse()
  .filter((order) => order.status === status)
  .map((order) => order.number).slice(15);

export default prepareOrders;
