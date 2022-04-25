const BACKEND_ROUTES = {
  base: 'https://norma.nomoreparties.space/api',
  baseWS: 'wss://norma.nomoreparties.space',
  ingredients: '/ingredients',
  orders: '/orders',
  login: '/auth/login',
  logout: '/auth/logout',
  register: '/auth/register',
  refresh: '/auth/token',
  user: '/auth/user',
  forgot: '/password-reset',
  reset: '/password-reset/reset',
  publicFeed: '/orders/all',
  privateFeed: '/orders',
};

const BUN = 'bun';
const SAUCE = 'sauce';
const MAIN = 'main';
const INGREDIENT = 'ingredient';
const ORDER = 'order';

const EXPIRY_MESSAGE = 'jwt expired';
const JWT_TOKEN = 'jwt-token';
const REFRESH_TOKEN = 'refresh-token';
const JWT_HEAD = 'Bearer ';
const JWT_POS = JWT_HEAD.length;

const INFO = 'INFO';
const ERROR = 'ERROR';
const OK = 'OK';

const PENDING = 'pending';
const DONE = 'done';
const CREATED = 'created';

const PUBLIC = 'public';
const PRIVATE = 'private';

const WS_THROTTLE_THRESHOLD = 3000;

const REASON_404_ORDER = 'заказ';
const REASON_404_INGREDIENT = 'ингредиент';
const REASON_404_GENERAL = 'столик';

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
  INFO,
  ERROR,
  OK,
  CREATED,
  PENDING,
  DONE,
  PUBLIC,
  PRIVATE,
  WS_THROTTLE_THRESHOLD,
  REASON_404_ORDER,
  REASON_404_INGREDIENT,
  REASON_404_GENERAL,
};
