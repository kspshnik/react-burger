import {
  SET_BUN,
  INSERT_INTERIOR,
  DROP_INTERIOR,
  MOVE_INTERIOR,
  CLEAR_BURGER,
  ARCHIVE_ORDER,
  SET_ORDER,
} from '../actions';

import { reorderChoice } from '../../helpers';

const initialState = {
  bun: null,
  choice: [],
  accepted: null,
  past: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUN: {
      return {
        ...state, bun: { ...action.payload },
      };
    }
    case INSERT_INTERIOR: {
      return {
        ...state, choice: [{ ...action.payload }, ...state.choice],
      };
    }
    case DROP_INTERIOR: {
      return {
        ...state, choice: state.choice.filter((item) => item.bcid !== action.payload.bcid),
      };
    }
    case CLEAR_BURGER: {
      return {
        ...state, bun: null, choice: [],
      };
    }
    case MOVE_INTERIOR: {
      const { ingredient, to } = action.payload;
      return {
        ...state,
        choice: reorderChoice(
          state.choice,
          state.choice.findIndex((item) => item.bcid === ingredient.bcid),
          to,
        ),
      };
    }
    case ARCHIVE_ORDER: {
      return {
        ...state, past: [...state.past, state.accepted], accepted: null,
      };
    }
    case SET_ORDER: {
      return {
        ...state, accepted: action.payload,
      };
    }

    default: return state;
  }
};

export default ordersReducer;
