import {
  REGISTER_SET_NAME,
  REGISTER_SET_EMAIL,
  REGISTER_SET_PASS,
  REGISTER_FORM_RESET,
} from '../actions';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const registerFormReducer = (state = initialState, action) => {
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
