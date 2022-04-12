import {
  LOGIN_SET_EMAIL,
  LOGIN_SET_PASS,
  LOGIN_FORM_RESET,

} from '../actions';

const initialState = {
  email: '',
  password: '',
};

const loginFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SET_EMAIL: {
      return {
        ...state, email: action.payload,
      };
    }
    case LOGIN_SET_PASS: {
      return {
        ...state, password: action.payload,
      };
    }
    case LOGIN_FORM_RESET: {
      return initialState;
    }
    default: return state;
  }
};

export default loginFormReducer;
