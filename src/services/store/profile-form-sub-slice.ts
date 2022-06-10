import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUserDataFormState } from '../../types/store.types';

const initialState : TUserDataFormState = {
  name: '',
  email: '',
  password: '',
};

const profileFormSubSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileName: (state, action: PayloadAction<string>) => ({
      ...state, name: action.payload,
    }),
    setProfileEmail: (state, action: PayloadAction<string>) => ({
      ...state, email: action.payload,
    }),
    setProfilePass: (state, action: PayloadAction<string>) => ({
      ...state, password: action.payload,
    }),
    resetProfileForm: (state) => ({
      ...state, ...initialState,
    }),
  },
});

const profileFormReducer = profileFormSubSlice.reducer;

export const {
  setProfileName,
  setProfilePass,
  setProfileEmail,
  resetProfileForm,
} = profileFormSubSlice.actions;

export default profileFormReducer;
