import { fetchIngredients } from '../api';
import {
  ingredientsRequested, ingredientsReceived, ingredientsFailed, setIngredients, refreshFailed,
} from '../store';
import { AppThunk } from '../store/store';
import { TAllIngredients } from '../../types/types';
import { TAPIError } from '../../types/api.types';
import {batch} from "react-redux";

const getIngredientsThunk : AppThunk = () => async (dispatch) => {
  dispatch(ingredientsRequested());
  try {
    const {
      data: {
        success,
        data,
        message = 'При получении данных произошла неизвестная ошибка :(',
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
    const { message = 'При получении данных произошла неизвестная ошибка :(' } = err as TAPIError;
    dispatch(ingredientsFailed(message));
  }
};

export default getIngredientsThunk;
