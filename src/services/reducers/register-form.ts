/* eslint-disable @typescript-eslint/default-param-last */

import {
  REGISTER_SET_NAME,
  REGISTER_SET_EMAIL,
  REGISTER_SET_PASS,
  REGISTER_FORM_RESET,
} from '../actions';
import { TUserDataFormState } from '../../types/store.types';
import { TRegisterFormActions } from '../actionCreators/actions.types';

const initialState : TUserDataFormState = {
  name: '',
  email: '',
  password: '',
};

const registerFormReducer = (
  state = initialState,
  action : TRegisterFormActions,
) : TUserDataFormState => {
  switch (action.type) {
    case REGISTER_SET_NAME: {
      return {
        ...state, name: action.payload,
      };
    }
    case REGISTER_SET_EMAIL: {
      return {
        ...state, email: action.payload,
      };
    }
    case REGISTER_SET_PASS: {
      return {
        ...state, password: action.payload,
      };
    }
    case REGISTER_FORM_RESET: {
      return initialState;
    }
    default: return state;
  }
};

export default registerFormReducer;
