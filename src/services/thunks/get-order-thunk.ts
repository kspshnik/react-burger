import {
  captureOrder,
  getOrderRequested,
  getOrderSucceed,
  getOrderFailed,
  getOrderNotFound,
} from '../store';
import { fetchOrder } from '../api';
import { AppThunk } from '../store/store';
import { TAPIError } from '../../types/api.types';

const getOrderThunk : AppThunk = (number : number) => async (dispatch) => {
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
    const { message = 'При получении данных произошла неизвестная ошибка :(' } = err as TAPIError;
    dispatch(getOrderFailed(message));
  }
};
export default getOrderThunk;
