import {
  PRIVATE_FEED_CLOSE,
  PRIVATE_FEED_MESSAGE,
  PRIVATE_FEED_OPEN,
} from '../actions';

const initialState = {
  orders: null,
  numbers: null,
  total: 0,
  totalToday: 0,
  isOpen: false,
  selected: null,
};

const privateFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRIVATE_FEED_OPEN: {
      return {
        ...state, isOpen: true,
      };
    }
    case PRIVATE_FEED_CLOSE: {
      return initialState;
    }
    case PRIVATE_FEED_MESSAGE: {
      return {
        ...state, ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default privateFeedReducer;
