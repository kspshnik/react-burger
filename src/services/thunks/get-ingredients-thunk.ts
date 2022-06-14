import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { fetchIngredients } from '../api';
import {
  ingredientsRequested, ingredientsReceived, ingredientsFailed, setIngredients, refreshFailed,
} from '../store';
import { AppThunk } from '../store/store';
import { TAllIngredients } from '../../types/types';
import { TAPIError } from '../../types/api.types';
import { getAxiosErrorMessage } from '../helpers';

const getIngredientsThunk : AppThunk = () => async (dispatch) => {
  dispatch(ingredientsRequested());
  try {
    const {
      data: {
        success,
        data,
        message = 'Неизвестная ошибка при получении ингредиентов :(',
      },
    } = await fetchIngredients();
    if (success && !!data) {
      batch(() => {
        dispatch(ingredientsReceived());
        dispatch(setIngredients(data.reduce((acc: TAllIngredients, ingredient) => {
          acc[ingredient._id] = ingredient;
          return acc;
        }, {})));
      });
    } else {
      dispatch(refreshFailed(message));
    }
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
      ?? 'Неизвестная ошибка при получении ингредиентов :(';
    dispatch(ingredientsFailed(message));
  }
};

export default getIngredientsThunk;
