/* eslint-disable @typescript-eslint/default-param-last */

import {
  FEED_ORDER_CAPTURE,
  FEED_ORDER_RELEASE,
} from '../actions';

import { TSelectedOrderActions } from '../actionCreators/actions.types';
import { TOrderSelectState } from '../../types/store.types';

const initialState : TOrderSelectState = {
  order: null,
};

const orderSelectReducer = (state = initialState, action : TSelectedOrderActions) => {
  switch (action.type) {
    case FEED_ORDER_CAPTURE: {
      return {
        ...state, order: { ...action.payload },
      };
    }
    case FEED_ORDER_RELEASE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default orderSelectReducer;
