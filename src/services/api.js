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
  const ingredientsPromise = fetch(endpoint(BACKEND_ROUTES.ingredients), options);
  const ingredientsResponse = await ingredientsPromise;
  if (!ingredientsResponse.ok) {
    return Promise.reject(ingredientsResponse.status);
  }
  return ingredientsResponse.json();
};

export const fetchOrder = async (order) => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients: order }),
  };
  const orderPromise = fetch(endpoint(BACKEND_ROUTES.orders), options);
  const orderResponse = await orderPromise;
  if (!orderResponse.ok) {
    return Promise.reject(new Error(orderResponse.status));
  }
  return orderResponse.json();
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
  console.dir(options);
  const userPromise = fetch(endpoint(BACKEND_ROUTES.user), options);
  const userResponse = await userPromise;
  console.log('fetchUser response:');
  console.dir(userResponse);
  return userResponse.json();
};

export const fetchToken = async () => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //    Authorization: auth,
    },
    body: JSON.stringify({ token: token.get() }),
  };
  const tokenPromise = fetch(endpoint(BACKEND_ROUTES.refresh), options);
  const tokenResponse = await tokenPromise;
  console.dir(tokenResponse);
  return tokenResponse.json();
};

export const loginUser = async (email, password) => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //    Authorization: auth,
    },
    body: JSON.stringify({ email, password }),
  };
  const login = await fetch(endpoint(BACKEND_ROUTES.login), options);
  return login.json();
};
