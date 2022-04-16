import {

  RESET_SET_CODE, RESET_SET_PASS, RESET_FORM_RESET,
} from '../actions';

const initialState = {
  code: '',
  password: '',
};

const resetFormReducer = (state = initialState, action) => {
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
