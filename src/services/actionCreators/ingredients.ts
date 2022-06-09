import { RELEASE_INGREDIENT, SELECT_INGREDIENT, SET_INGREDIENTS } from '../actions';
import { TIngredient, TIngredients } from '../../types/types';
import { TReleaseIngredientAction, TSelectIngredientAction, TSetIngredientsAction } from './actions.types';

export const setIngredients = (ingredients : TIngredients) : TSetIngredientsAction => (
  {
    type: SET_INGREDIENTS,
    payload: ingredients,
  }
);
export const selectIngredient = (ingredient : TIngredient) : TSelectIngredientAction => (
  {
    type: SELECT_INGREDIENT,
    payload: ingredient,
  }
);
export const releaseIngredient = () : TReleaseIngredientAction => (
  {
    type: RELEASE_INGREDIENT,
  }
);
