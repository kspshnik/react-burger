import { batch } from 'react-redux';
import { AxiosError } from 'axios';
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
import { getAxiosErrorMessage } from '../helpers';

const getOrderThunk : AppThunk = (number : number) => async (dispatch) => {
  dispatch(getOrderRequested());
  try {
    const {
      data: {
        orders,
        success,
        message = 'Неизвестная ошибка при получении заказа :(',
      },
    } = await fetchOrder(number);
    if (success && !!orders && orders.length > 0) {
      batch(() => {
        dispatch(getOrderSucceed());
        dispatch(captureOrder(orders[0]));
      });
    } else if (success && !!orders && orders.length === 0) {
      batch(() => {
        dispatch(getOrderSucceed());
        dispatch(getOrderNotFound());
      });
    } else {
      dispatch(getOrderFailed(message));
    }
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
      ?? 'Неизвестная ошибка при получении заказа :(';
    dispatch(getOrderFailed(message));
  }
};
export default getOrderThunk;
