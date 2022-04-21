import {
  PUBLIC_FEED_CLOSE, PUBLIC_FEED_CONNECT_REQUESTED, PUBLIC_FEED_DISCONNECT_REQUESTED,
  PUBLIC_FEED_MESSAGE,
  PUBLIC_FEED_OPEN,
} from '../actions';

const initialState = {
  orders: null,
  total: 0,
  totalToday: 0,
  isOpen: false,
  requestedAt: 0,
  discardedAt: 0,
};

const publicFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUBLIC_FEED_OPEN: {
      return {
        ...state, isOpen: true, discardedAt: 0, requestedAt: Date.now(),
      };
    }
    case PUBLIC_FEED_CLOSE: {
      return {
        ...initialState, discardedAt: Date.now(),
      };
    }
    case PUBLIC_FEED_MESSAGE: {
      return {
        ...state, ...action.payload,
      };
    }
    case PUBLIC_FEED_CONNECT_REQUESTED: {
      return {
        ...state, requestedAt: Date.now(),
      };
    }
    case PUBLIC_FEED_DISCONNECT_REQUESTED: {
      return {
        ...state, discardedAt: Date.now(),
      };
    }
    default: {
      return state;
    }
  }
};

export default publicFeedReducer;
