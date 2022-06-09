/* eslint-disable @typescript-eslint/default-param-last */

import {
  SET_USER,
  RESET_USER,
} from '../actions';

import { TUserState } from '../../types/store.types';
import { TUserActions } from '../actionCreators/actions.types';

const initialState : TUserState = {
  name: '',
  email: '',
  loggedIn: false,
};

const userReducer = (state = initialState, action : TUserActions) => {
  switch (action.type) {
    case SET_USER: {
      const { name, email } = action.payload;
      return {
        ...state, name, email, loggedIn: true,
      };
    }
    case RESET_USER: {
      return {
        ...state, name: '', email: '', loggedIn: false,
      };
    }
    default: return state;
  }
};

export default userReducer;
