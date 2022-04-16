import { postOrder } from '../api';
import {
  orderRequested, orderPlaced, orderFailed, setOrder, clearBurger,
} from '../actionCreators';

const placeOrderThunk = (order) => async (dispatch) => {
  dispatch(orderRequested());
  try {
    const res = await postOrder(order);
    dispatch(setOrder(res));
    dispatch(orderPlaced());
    dispatch(clearBurger());
  } catch (err) {
    dispatch(orderFailed(err.message || 'При оформлении заказа произошла неизвестная ошибка :('));
  }
};

export default placeOrderThunk;
