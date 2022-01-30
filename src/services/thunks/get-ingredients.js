import burgerAPI from '../api';
import {
  ingredientsRequested, ingredientsReceived, ingredientsFailed, setIngredients,
} from '../actionCreators';

const getIngredients = async () => async (dispatch) => {
  try {
    dispatch(ingredientsRequested());
    const ingredientsData = await burgerAPI.getIngredients();
    dispatch(ingredientsReceived());

    dispatch(setIngredients(ingredientsData.data.reduce((acc, ingredient) => {
      acc[ingredient._id] = ingredient;
      return acc;
    }, {})));
  } catch (err) {
    dispatch(ingredientsFailed(err.message));
  }
};

export default getIngredients();
