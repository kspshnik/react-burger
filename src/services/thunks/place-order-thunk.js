import { postOrder } from '../api';
import {
  placeOrderRequested, placeOrderSucceed, placeOrderFailed, setOrder, clearBurger,
}                    from '../actionCreators';

const placeOrderThunk = (order) => async (dispatch) => {
  dispatch(placeOrderRequested());
  try {
    const res = await postOrder(order);
    dispatch(setOrder(res));
    dispatch(placeOrderSucceed());
    dispatch(clearBurger());
  } catch (err) {
    dispatch(placeOrderFailed(err.message || 'При оформлении заказа произошла неизвестная ошибка :('));
  }
};

export default placeOrderThunk;
