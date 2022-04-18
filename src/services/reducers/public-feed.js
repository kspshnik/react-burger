import {
  PUBLIC_FEED_CLOSE,
  PUBLIC_FEED_DESELECT,
  PUBLIC_FEED_MESSAGE,
  PUBLIC_FEED_OPEN,
  PUBLIC_FEED_SELECT,
} from '../actions';

const initialState = {
  orders: null,
  numbers: null,
  total: 0,
  totalToday: 0,
  isOpen: false,
  selected: null,
};

const publicFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUBLIC_FEED_OPEN: {
      return {
        ...state, isOpen: true,
      };
    }
    case PUBLIC_FEED_CLOSE: {
      return initialState;
    }
    case PUBLIC_FEED_MESSAGE: {
      return {
        ...state, ...action.payload,
      };
    }
    case PUBLIC_FEED_SELECT: {
      return {
        ...state, selected: state.orders.find((order) => order._id === action.payload),
      };
    }
    case PUBLIC_FEED_DESELECT: {
      return {
        ...state, selected: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default publicFeedReducer;
