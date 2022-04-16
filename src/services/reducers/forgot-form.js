import {
  FORGOT_SET_EMAIL,
  FORGOT_FORM_RESET,
} from '../actions';

const initialState = {
  email: '',
};

const forgotFormReducer = (state = initialState, action) => {
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
