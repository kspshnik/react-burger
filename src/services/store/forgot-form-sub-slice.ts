import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TForgotFormState } from '../../types/store.types';

const initialState : TForgotFormState = {
  email: '',
};

const forgotFormSubSlice = createSlice({
  name: 'forgot',
  initialState,
  reducers: {
    setForgotEmail: (state, action : PayloadAction<string>) => ({
      ...state, email: action.payload,
    }),
    resetForgotForm: (state) => ({
      ...state, ...initialState,
    }),
  },
});

const forgotFormReducer = forgotFormSubSlice.reducer;

export const {
  setForgotEmail,
  resetForgotForm,
} = forgotFormSubSlice.actions;

export default forgotFormReducer;
