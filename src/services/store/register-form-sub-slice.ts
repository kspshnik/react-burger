import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUserDataFormState } from '../../types/store.types';

const initialState : TUserDataFormState = {
  name: '',
  email: '',
  password: '',
};

const registerFormSubSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterName: (state, action: PayloadAction<string>) => ({
      ...state, name: action.payload,
    }),
    setRegisterEmail: (state, action: PayloadAction<string>) => ({
      ...state, email: action.payload,
    }),
    setRegisterPass: (state, action: PayloadAction<string>) => ({
      ...state, password: action.payload,
    }),
    resetRegisterForm: (state) => ({
      ...state, ...initialState,
    }),
  },
});

const registerFormReducer = registerFormSubSlice.reducer;

export const {
  setRegisterName,
  setRegisterPass,
  setRegisterEmail,
  resetRegisterForm,
} = registerFormSubSlice.actions;

export default registerFormReducer;
