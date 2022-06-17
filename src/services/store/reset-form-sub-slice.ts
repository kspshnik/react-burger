import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TResetFormState } from '../../types/store.types';

const initialState : TResetFormState = {
  code: '',
  password: '',
};

const resetFormSubSlice = createSlice({
  name: 'reset',
  initialState,
  reducers: {
    setResetCode: (state, action: PayloadAction<string>) => ({
      ...state, code: action.payload,
    }),
    setResetPass: (state, action: PayloadAction<string>) => ({
      ...state, password: action.payload,
    }),
    resetResetForm: (state) => ({
      ...state, ...initialState,
    }),
  },
});

const resetFormReducer = resetFormSubSlice.reducer;

export const {
  setResetCode,
  setResetPass,
  resetResetForm,
} = resetFormSubSlice.actions;

export default resetFormReducer;
