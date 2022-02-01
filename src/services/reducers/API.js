import {
  DISMISS_ERROR,
  GET_INGREDIENTS_FAIL,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCEED, PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCEED,
} from '../actions';

const initialState = {
  isIngredientsLoading: false,
  isOrderSent: false,
  errorMessage: '',
};

const APIReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state, isIngredientsLoading: true, errorMessage: '',
      };
    }
    case GET_INGREDIENTS_SUCCEED: {
      return {
        ...state, isIngredientsLoading: false, errorMessage: '',
      };
    }
    case GET_INGREDIENTS_FAIL: {
      return {
        ...state, isIngredientsLoading: false, errorMessage: action.payload,
      };
    }
    case PLACE_ORDER_REQUEST: {
      return {
        ...state, isOrderSent: true, errorMessage: '',
      };
    }
    case PLACE_ORDER_SUCCEED: {
      return {
        ...state, isOrderSent: false, errorMessage: '',
      };
    }
    case PLACE_ORDER_FAIL: {
      return {
        ...state, isOrderSent: false, errorMessage: action.payload,
      };
    }
    case DISMISS_ERROR: {
      return {
        ...state, errorMessage: '',
      };
    }
    default: return state;
  }
};

export default APIReducer;
