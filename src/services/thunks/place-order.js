import burgerAPI from '../api';
import {
  orderRequested, orderPlaced, orderFailed, setOrder, clearBurger,
} from '../actionCreators';

const placeOrder = async (order) => async (dispatch) => {
  try {
    dispatch(orderRequested());
    const orderPromise = burgerAPI.placeOrder(order);
    const placedOrder = await orderPromise;
    dispatch(setOrder(placedOrder));
    dispatch(orderPlaced());
    dispatch(clearBurger());
  } catch (err) {
    dispatch(orderFailed(err.message));
  }
};

export default placeOrder;
