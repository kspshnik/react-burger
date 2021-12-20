const BACKEND_ROUTES = {
  base: 'https://norma.nomoreparties.space/api',
  routes: {
    ingredients: '/ingredients',
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
};
