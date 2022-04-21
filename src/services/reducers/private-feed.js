import {
  PRIVATE_FEED_CLOSE, PRIVATE_FEED_CONNECT_REQUESTED, PRIVATE_FEED_DISCONNECT_REQUESTED,
  PRIVATE_FEED_MESSAGE,
  PRIVATE_FEED_OPEN,
} from '../actions';

const initialState = {
  orders: null,
  total: 0,
  totalToday: 0,
  isOpen: false,
  requestedAt: 0,
  discardedAt: 0,
};

const privateFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRIVATE_FEED_OPEN: {
      return {
        ...state, isOpen: true, discardedAt: 0, requestedAt: Date.now(),
      };
    }
    case PRIVATE_FEED_CLOSE: {
      return {
        ...initialState, discardedAt: Date.now(),
      };
    }
    case PRIVATE_FEED_MESSAGE: {
      return {
        ...state, ...action.payload,
      };
    }
    case PRIVATE_FEED_CONNECT_REQUESTED: {
      return {
        ...state, requestedAt: Date.now(),
      };
    }
    case PRIVATE_FEED_DISCONNECT_REQUESTED: {
      return {
        ...state, discardedAt: Date.now(),
      };
    }
    default: {
      return state;
    }
  }
};

export default privateFeedReducer;
