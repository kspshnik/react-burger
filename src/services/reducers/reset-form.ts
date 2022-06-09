/* eslint-disable @typescript-eslint/default-param-last */

import {
  RESET_SET_CODE, RESET_SET_PASS, RESET_FORM_RESET,
} from '../actions';
import { TResetFormState } from '../../types/store.types';
import { TResetFormActions } from '../actionCreators/actions.types';

const initialState : TResetFormState = {
  code: '',
  password: '',
};

const resetFormReducer = (state = initialState, action : TResetFormActions) : TResetFormState => {
  switch (action.type) {
    case RESET_SET_CODE: {
      return {
        ...state, code: action.payload,
      };
    }
    case RESET_SET_PASS: {
      return {
        ...state, password: action.payload,
      };
    }
    case RESET_FORM_RESET: {
      return initialState;
    }
    default: return state;
  }
};

export default resetFormReducer;
