/* eslint-disable @typescript-eslint/default-param-last */

import {
  PROFILE_FORM_RESET,
  PROFILE_SET_EMAIL,
  PROFILE_SET_NAME,
  PROFILE_SET_PASS,
} from '../actions';
import { TUserDataFormState } from '../../types/store.types';
import { TProfileFormActions } from '../actionCreators/actions.types';

const initialState : TUserDataFormState = {
  name: '',
  email: '',
  password: '',
};

const profileFormReducer = (
  state = initialState,
  action : TProfileFormActions,
) : TUserDataFormState => {
  switch (action.type) {
    case PROFILE_SET_NAME: {
      return {
        ...state, name: action.payload,
      };
    }
    case PROFILE_SET_EMAIL: {
      return {
        ...state, email: action.payload,
      };
    }
    case PROFILE_SET_PASS: {
      return {
        ...state, password: action.payload,
      };
    }
    case PROFILE_FORM_RESET: return initialState;
    default: return state;
  }
};

export default profileFormReducer;
