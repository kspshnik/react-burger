import {
  PROFILE_SET_EMAIL,
  PROFILE_SET_NAME, PROFILE_SET_PASS,
} from '../actions';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const profileFormReducer = (state = initialState, action) => {
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
    default: return state;
  }
};

export default profileFormReducer;
