import { RELEASE_INGREDIENT, SELECT_INGREDIENT, SET_INGREDIENTS } from '../actions';

export const setIngredients = (ingredients) => ({ type: SET_INGREDIENTS, payload: ingredients });
export const selectIngredient = (ingredient) => ({ type: SELECT_INGREDIENT, payload: ingredient });
export const releaseIngredient = () => ({ type: RELEASE_INGREDIENT });
