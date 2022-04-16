import {
  SET_USER,
  RESET_USER,
} from '../actions';

const initialState = {
  name: '',
  email: '',
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
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
