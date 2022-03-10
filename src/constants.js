const BACKEND_ROUTES = {
  base: 'https://norma.nomoreparties.space/api',
  ingredients: '/ingredients',
  orders: '/orders',
  login: '/auth/login',
  logout: '/auth/logout',
  register: '/auth/register',
  refresh: '/auth/token',
  user: '/auth/user',
};

const BUN = 'bun';
const SAUCE = 'sauce';
const MAIN = 'main';
const INGREDIENT = 'ingredient';
const ORDER = 'order';

const EXPIRY_MESSAGE = 'jwt expired';
const JWT_TOKEN = 'jwt-token';
const REFRESH_TOKEN = 'refresh-token';
const JWT_HEAD = 'Bearer '
const JWT_POS = JWT_HEAD.length;

export {
  BUN,
  SAUCE,
  MAIN,
  INGREDIENT,
  ORDER,
  BACKEND_ROUTES,
  EXPIRY_MESSAGE,
  JWT_TOKEN,
  REFRESH_TOKEN,
  JWT_HEAD,
  JWT_POS,
};
