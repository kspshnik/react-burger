import { DND_START, DND_STOP } from '../actions';

const initialState = {
  now: null,
};

const DnDReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DND_START: {
      return {
        ...state, now: payload,
      };
    }
    case DND_STOP: {
      return {
        ...state, now: null,
      };
    }
    default: return state;
  }
};

export default DnDReducer;
