import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TIngredientsState } from '../../types/store.types';
import { TAllIngredients, TIngredient } from '../../types/types';

const initialState : TIngredientsState = {
  all: null,
  selected: null,
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setIngredients: (state, action: PayloadAction<TAllIngredients>) => ({
      ...state, all: action.payload,
    }),
    selectIngredient: (state, action: PayloadAction<TIngredient>) => ({
      ...state, selected: action.payload,
    }),
    releaseIngredient: (state) => ({
      ...state, selected: null,
    }),
  },
});

const ingredientsReducer = ingredientsSlice.reducer;

export const {
  setIngredients,
  selectIngredient,
  releaseIngredient,
} = ingredientsSlice.actions;

export default ingredientsReducer;
