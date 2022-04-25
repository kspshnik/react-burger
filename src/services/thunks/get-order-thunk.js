import {
  captureOrder,
  getOrderRequested,
  getOrderSucceed,
  getOrderFailed, getOrderNotFound,
} from '../actionCreators';
import { fetchOrder } from '../api';

const getOrderThunk = (number) => async (dispatch) => {
  dispatch(getOrderRequested());
  try {
    const {
      orders,
      success,
      message = 'При получении данных произошла неизвестная ошибка :(',
    } = await fetchOrder(number);
    if (success && !!orders && orders.length > 0) {
      dispatch(getOrderSucceed());
      dispatch(captureOrder(orders[0]));
    } else if (success && !!orders && orders.length === 0) {
      dispatch(getOrderSucceed());
      dispatch(getOrderNotFound());
    } else {
      dispatch(getOrderFailed(message));
    }
  } catch (err) {
    dispatch(getOrderFailed(err.message));
  }
};
export default getOrderThunk;
