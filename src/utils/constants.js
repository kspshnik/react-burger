const BACKEND_ROUTES = {
  base: 'https://norma.nomoreparties.space/api',
  routes: {
    ingredients: '/ingredients',
    orders: '/orders',
  },

};

const BUN = 'bun';
const SAUCE = 'sauce';
const MAIN = 'main';
const INGREDIENT = 'ingredient';
const ORDER = 'order';
const ERROR = 'error';
const CLOSE = 'close';

const ACTION_CLOSE = { type: CLOSE };
const ACTION_OPEN_INGREDIENT = { type: INGREDIENT };
const ACTION_OPEN_ORDER = { type: ORDER };
const ACTION_SHOW_ERROR = { type: ERROR };

const BAD_ORDER_NO = '000000';
export {
  BUN,
  SAUCE,
  MAIN,
  INGREDIENT,
  ORDER,
  ERROR,
  CLOSE,
  ACTION_CLOSE,
  ACTION_OPEN_INGREDIENT,
  ACTION_OPEN_ORDER,
  ACTION_SHOW_ERROR,
  BACKEND_ROUTES,
  BAD_ORDER_NO,
};
