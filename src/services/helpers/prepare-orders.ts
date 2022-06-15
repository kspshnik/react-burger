import { TOrders, TOrderStatus } from '../../types/types';

const prepareOrders = (
  orders : TOrders,
  status : TOrderStatus,
) : Array<number> => orders
  .slice(0, orders.length)
  .reverse()
  .filter((order) => order.status === status)
  .map((order) => order.number)
  .slice(0, 15);

export default prepareOrders;
