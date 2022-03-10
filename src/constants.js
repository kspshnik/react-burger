const BACKEND_ROUTES = {
  base: 'https://norma.nomoreparties.space/api',
  routes: {
    ingredients: '/ingredients',
    orders: '/orders',
    login: '/auth/login',
    logout: '/auth/logout',
    register: '/auth/register',
    refresh: '/auth/token',
    user: '/auth/user',
  },

};

const BUN = 'bun';
const SAUCE = 'sauce';
const MAIN = 'main';
const INGREDIENT = 'ingredient';
const ORDER = 'order';

export {
  BUN,
  SAUCE,
  MAIN,
  INGREDIENT,
  ORDER,
  BACKEND_ROUTES,

};
