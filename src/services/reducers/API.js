import {
  DISMISS_ERROR,
  GET_INGREDIENTS_FAIL,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCEED,
  GET_USER_FAIL,
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCEED,
  REFRESH_TOKEN_FAIL,
  REQUEST_CODE_SUCCEED,
  REQUEST_CODE_FAILED,
  RESET_PASSWORD_SUCCEED,
  RESET_PASSWORD_FAILED,
  UPDATE_PROFILE_SUCCEED,
  UPDATE_PROFILE_FAILED,
  CLOSE_SUCCESS,
} from '../actions';

const initialState = {
  isIngredientsLoading: false,
  isOrderSent: false,
  errorMessage: '',
  successMessage: '',
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
    case CLOSE_SUCCESS: {
      return {
        ...state, successMessage: '',
      };
    }
    case GET_USER_FAIL:
    case REFRESH_TOKEN_FAIL: {
      return {
        ...state, errorMessage: action.payload,
      };
    }
    case REQUEST_CODE_SUCCEED:
    case RESET_PASSWORD_SUCCEED:
    case UPDATE_PROFILE_SUCCEED: {
      return {
        ...state, successMessage: action.payload,
      };
    }
    case REQUEST_CODE_FAILED:
    case RESET_PASSWORD_FAILED:
    case UPDATE_PROFILE_FAILED: {
      return {
        ...state, errorMessage: action.payload,
      };
    }
    default: return state;
  }
};

export default APIReducer;
