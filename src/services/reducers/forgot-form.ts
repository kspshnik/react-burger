/* eslint-disable @typescript-eslint/default-param-last */

import {
  FORGOT_SET_EMAIL,
  FORGOT_FORM_RESET,
} from '../actions';
import { TForgotFormActions } from '../actionCreators/actions.types';

export type TForgotFormState = {
  email: string,
};

const initialState : TForgotFormState = {
  email: '',
};

const forgotFormReducer = (
  state = initialState,
  action : TForgotFormActions,
) : TForgotFormState => {
  switch (action.type) {
    case FORGOT_SET_EMAIL: {
      return {
        ...state, email: action.payload,
      };
    }
    case FORGOT_FORM_RESET: {
      return initialState;
    }
    default: return state;
  }
};

export default forgotFormReducer;
