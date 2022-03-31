import JsCookie from 'js-cookie';
import { BACKEND_ROUTES, JWT_TOKEN, REFRESH_TOKEN } from '../constants';

const endpoint = (route) => (`${BACKEND_ROUTES.base}${route}`);

const defaultOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

export const jwt = {
  set: (value) => {
    if (value) {
      JsCookie.set(JWT_TOKEN, `${value}`);
    } else {
      JsCookie.remove(JWT_TOKEN);
    }
  },
  get: () => JsCookie.get(JWT_TOKEN),
};
export const token = {
  set: (value) => {
    if (value) {
      localStorage.setItem(REFRESH_TOKEN, `${value}`);
    } else {
      localStorage.removeItem(REFRESH_TOKEN);
    }
  },
  get: () => localStorage.getItem(REFRESH_TOKEN),
};

export const fetchIngredients = async () => {
  const options = {
    ...defaultOptions,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const ingredients = await fetch(endpoint(BACKEND_ROUTES.ingredients), options);
  return ingredients.json();
};

export const postOrder = async (order) => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients: order }),
  };
  const ordered = await fetch(endpoint(BACKEND_ROUTES.orders), options);
  return ordered.json();
};

export const fetchUser = async () => {
  const options = {
    ...defaultOptions,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.get()}`,

    },
  };
  try {
    const user = await fetch(endpoint(BACKEND_ROUTES.user), options);

    return user.json();
  } catch (err) {
    console.dir(err);
    return Promise.reject(err);
  }
};

export const fetchToken = async () => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token.get() }),
  };

  const refresh = await fetch(endpoint(BACKEND_ROUTES.refresh), options);
  return refresh.json();
};

export const loginUser = async (email, password) => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  const login = await fetch(endpoint(BACKEND_ROUTES.login), options);
  return login.json();
};

export const registerUser = async (name, email, password) => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  };
  const register = await fetch(endpoint(BACKEND_ROUTES.register), options);
  return register.json();
};
