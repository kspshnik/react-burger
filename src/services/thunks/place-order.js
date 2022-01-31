import burgerAPI from '../api';
import {
  orderRequested, orderPlaced, orderFailed, setOrder, clearBurger,
} from '../actionCreators';

const placeOrder = (order) => (dispatch) => {
  dispatch(orderRequested());
  return burgerAPI.placeOrder(order)
  // eslint-disable-next-line promise/always-return
    .then((data) => {
      dispatch(setOrder(data));
      dispatch(orderPlaced());
      dispatch(clearBurger());
    })
    .catch((err) => {
      dispatch(orderFailed(err.message));
    });
};

export default placeOrder;
