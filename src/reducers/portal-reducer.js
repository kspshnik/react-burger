import {
  CLOSE, ERROR, INGREDIENT, ORDER,
} from '../constants';

const portalReducer = (state, action) => {
  switch (action.type) {
    case INGREDIENT:
      return {
        ingredient: true, order: false, error: false, id: action.payload,
      };
    case ORDER:
      return { ingredient: false, order: true, error: false };
    case ERROR:
      return {
        ingredient: false, order: false, error: true, message: action.payload,
      };
    case CLOSE:
      return {
        ingredient: false, order: false, error: false, id: null, message: '',
      };
    default:
      throw new Error(`'${action.type}' не является валидным action.type в portalReducer()!`);
  }
};

export default portalReducer;
