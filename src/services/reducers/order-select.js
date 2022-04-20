import {
  FEED_ORDER_CAPTURE,
  FEED_ORDER_RELEASE,
} from '../actions';

const initialState = {
  order: null,
/*  _id: null,
  createdAt: null,
  updatedAt: null,
  name: null,
  number: null,
  status: null,
  ingredients: null, */
};

const orderSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEED_ORDER_CAPTURE: {
      console.dir(action);
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
