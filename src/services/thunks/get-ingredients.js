import { fetchIngredients } from '../api';
import {
  ingredientsRequested, ingredientsReceived, ingredientsFailed, setIngredients,
} from '../actionCreators';

const getIngredients = () => (dispatch) => {
  dispatch(ingredientsRequested());
  // eslint-disable-next-line promise/always-return
  return fetchIngredients().then((data) => {
    dispatch(ingredientsReceived());
    dispatch(setIngredients(data.data.reduce((acc, ingredient) => {
      acc[ingredient._id] = ingredient;
      return acc;
    }, {})));
  }).catch((err) => dispatch(ingredientsFailed(err.message)));
};
export default getIngredients;
