import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TLoginFormState } from '../../types/store.types';

const initialState : TLoginFormState = {
  email: '',
  password: '',
};

const loginFormSubSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginEmail: (state, action: PayloadAction<string>) => ({
      ...state, email: action.payload,
    }),
    setLoginPass: (state, action: PayloadAction<string>) => ({
      ...state, password: action.payload,
    }),
    resetLoginForm: (state) => ({
      ...state, ...initialState,
    }),
  },
});

const loginFormReducer = loginFormSubSlice.reducer;

export const {
  setLoginEmail,
  setLoginPass,
  resetLoginForm,
} = loginFormSubSlice.actions;

export default loginFormReducer;
