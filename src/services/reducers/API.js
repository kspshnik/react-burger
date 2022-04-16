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
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  LOGOUT_SUCCEED,
  LOGOUT_FAILED,
  REQUEST_CODE_SUCCEED,
  REQUEST_CODE_FAILED,
  RESET_PASSWORD_SUCCEED,
  RESET_PASSWORD_FAILED,
  UPDATE_PROFILE_SUCCEED,
  UPDATE_PROFILE_FAILED,
  CLOSE_SUCCESS,
  ERROR_500,
  REGISTER_SUCCEED,
  REGISTER_FAILED,
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
    case REQUEST_CODE_SUCCEED:
    case RESET_PASSWORD_SUCCEED:
    case UPDATE_PROFILE_SUCCEED:
    case REGISTER_SUCCEED:
    case LOGIN_SUCCEED:
    case LOGOUT_SUCCEED: {
      return {
        ...state, successMessage: action.payload, errorMessage: '',
      };
    }
    case GET_USER_FAIL:
    case REFRESH_TOKEN_FAIL:
    case REQUEST_CODE_FAILED:
    case RESET_PASSWORD_FAILED:
    case UPDATE_PROFILE_FAILED:
    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case LOGOUT_FAILED:
    case ERROR_500: {
      return {
        ...state, errorMessage: action.payload, successMessage: '',
      };
    }
    default: return state;
  }
};

export default APIReducer;
