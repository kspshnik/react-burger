/* eslint-disable @typescript-eslint/default-param-last */

import {
  SET_INGREDIENTS,
  SELECT_INGREDIENT,
  RELEASE_INGREDIENT,
} from '../actions';

import { TIngredientsActions } from '../actionCreators/actions.types';
import { TIngredientsState } from '../../types/store.types';

const initialState : TIngredientsState = {
  all: null,
  selected: null,
};

const ingredientsReducer = (state = initialState, action : TIngredientsActions) => {
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
