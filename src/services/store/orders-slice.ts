import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TOrderState } from '../../types/store.types';
import { TIngredient, TMoveData, TOrderRecord } from '../../types/types';
import { reorderChoice } from '../helpers';

const initialState : TOrderState = {
  bun: null,
  choice: [],
  accepted: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setBun: (state, action: PayloadAction<TIngredient>) => ({
      ...state, bun: { ...action.payload },
    }),
    moveInterior: (state, action: PayloadAction<TMoveData>) => {
      const { ingredient, to } = action.payload;
      return {
        ...state,
        choice: reorderChoice(
          state.choice,
          state.choice.findIndex((item) => item.bcid === ingredient.bcid),
          to,
        ),
      };
    },
    insertInterior: (state, action : PayloadAction<TIngredient>) => ({
      ...state, choice: [{ ...action.payload, bcid: nanoid() }, ...state.choice],
    }),
    dropInterior: (state, action: PayloadAction<TIngredient>) => ({
      ...state, choice: state.choice.filter((item) => item.bcid !== action.payload?.bcid),
    }),
    clearBurger: (state) => ({
      ...state, bun: null, choice: [],
    }),
    archiveOrder: (state) => ({
      ...state, accepted: null,
    }),
    setOrder: (state, action : PayloadAction<TOrderRecord>) => ({
      ...state, accepted: action.payload,
    }),
  },
});

const ordersReducer = ordersSlice.reducer;

export const {
  setBun,
  insertInterior,
  moveInterior,
  dropInterior,
  clearBurger,
  archiveOrder,
  setOrder,
} = ordersSlice.actions;

export default ordersReducer;
