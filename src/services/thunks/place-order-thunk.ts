import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { postOrder } from '../api';
import {
  placeOrderRequested, placeOrderSucceed, placeOrderFailed, setOrder, clearBurger,
} from '../store';
import { AppThunk } from '../store/store';
import { TIngredients } from '../../types/types';
import { getAxiosErrorMessage } from '../helpers';
import { TAPIError } from '../../types/api.types';

const placeOrderThunk : AppThunk = (orderContent : TIngredients) => async (dispatch) => {
  dispatch(placeOrderRequested());
  try {
    const { data } = await postOrder(orderContent);
    batch(() => {
      dispatch(setOrder(data));
      dispatch(placeOrderSucceed());
      dispatch(clearBurger());
    });
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
      ?? 'Неизвестная ошибка при размещении заказа :(';
    dispatch(placeOrderFailed(message));
  }
};

export default placeOrderThunk;
