import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOrderSelectState } from '../../types/store.types';
import { TOrder } from '../../types/types';

const initialState : TOrderSelectState = {
  order: null,
};

const orderSelectSubSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    captureOrder: (state, action: PayloadAction<TOrder>) => ({
      ...state, order: { ...action.payload },
    }),
    releaseOrder: (state) => ({
      ...initialState,
    }),
  },
});

const orderSelectReducer = orderSelectSubSlice.reducer;

export const {
  captureOrder,
  releaseOrder,
} = orderSelectSubSlice.actions;

export default orderSelectReducer;
