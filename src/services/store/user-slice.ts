import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUserState } from '../../types/store.types';
import { TUser } from '../../types/types';

const initialState : TUserState = {
  name: '',
  email: '',
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action : PayloadAction<TUser>) => {
      const { name, email } = action.payload;
      return {
        ...state, name, email, loggedIn: true,
      };
    },
    resetUser: (state) => ({
      ...state, ...initialState,
    }),
  },
});

const userReducer = userSlice.reducer;

export const {
  setUser,
  resetUser,
} = userSlice.actions;

export default userReducer;
