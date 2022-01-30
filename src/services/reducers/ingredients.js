import {
  SET_INGREDIENTS,
  SELECT_INGREDIENT,
  RELEASE_INGREDIENT,
} from '../actions';

const initialState = {
  all: {},
  selected: null,
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS: {
      return {
        ...state, all: action.payload,
      };
    }
    case SELECT_INGREDIENT: {
      return {
        ...state, selected: action.payload,
      };
    }
    case RELEASE_INGREDIENT: {
      return {
        ...state, selected: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default ingredientsReducer;
