import { fetchIngredients } from '../api';
import {
  ingredientsRequested, ingredientsReceived, ingredientsFailed, setIngredients, refreshFailed,
} from '../store';
import { AppThunk } from '../store/store';

const getIngredientsThunk : AppThunk = () => async (dispatch) => {
  dispatch(ingredientsRequested());
  try {
    const {
      data,
      success,
      message = 'При получении данных произошла неизвестная ошибка :(',
    } = await fetchIngredients();
    if (success && !!data) {
      dispatch(ingredientsReceived());
      dispatch(setIngredients(data.reduce((acc, ingredient) => {
        acc[ingredient._id] = ingredient;
        return acc;
      }, {})));
    } else {
      dispatch(refreshFailed(message));
    }
  } catch (err) {
    dispatch(ingredientsFailed(err.message));
  }
};

export default getIngredientsThunk;
