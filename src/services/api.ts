import { Cookies as JsCookie } from 'typescript-cookie';
import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import {
  API_ROOT, BACKEND_ROUTES, JWT_TOKEN, REFRESH_TOKEN, REGISTER_ROUTE,
} from '../constants';
import {
  TAPIIngredients, TAPIOrderRequest, TAPIOrderResponse, TAPIOrders, TAPIUserProfile,
} from '../types/api.types';
import { TIngredients } from '../types/types';

const endpoint = (route : string) : string => (`${BACKEND_ROUTES.base}${route}`);
export const makeUser = (name : string, email : string, password : string) : TAPIUserProfile => {
  let res = {};
  if (name) {
    res = { ...res, name };
  }
  if (email) {
    res = { ...res, email };
  }
  if (password) {
    res = { ...res, password };
  }
  return res;
};

const defaultOptions : RequestInit = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

export const jwt = {
  set: (value : string) : void => {
    if (value) {
      JsCookie.set(JWT_TOKEN, `${value}`);
    } else {
      JsCookie.remove(JWT_TOKEN);
    }
  },
  get: () : string => JsCookie.get(JWT_TOKEN) as string,
  test: () : boolean => !!JsCookie.get(JWT_TOKEN),
};
export const token = {
  set: (value : string) : void => {
    if (value) {
      localStorage.setItem(REFRESH_TOKEN, `${value}`);
    } else {
      localStorage.removeItem(REFRESH_TOKEN);
    }
  },
  get: () : string | null => localStorage.getItem(REFRESH_TOKEN),
  test: () : boolean => !!localStorage.getItem(REFRESH_TOKEN),
};

const defaultRequestConfig : AxiosRequestConfig = {
  baseURL: BACKEND_ROUTES.base,
  headers: {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    'Content-Type': 'application/json',
  },
};

const injectBearerToken = (requestConfig : AxiosRequestConfig) : AxiosRequestConfig => {
  if (jwt.test()) {
    return { ...requestConfig, headers: { ...defaultRequestConfig.headers, Authorization: `Bearer ${jwt.get()}` } };
  }
  return requestConfig;
};

const burgerAPI : AxiosInstance = axios.create(defaultRequestConfig);

export const fetchIngredients = () : AxiosPromise<TAPIIngredients> => {
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.ingredients,
    method: 'post',
  };
  return burgerAPI(requestConfig) as AxiosPromise<TAPIIngredients>;
};

export const fetchOrder = (number: number) : AxiosPromise<TAPIOrders> => {
  const requestConfig : AxiosRequestConfig = {
    url: `${BACKEND_ROUTES.orders}/${number}`,
    method: 'post',
  };
  return burgerAPI(requestConfig) as AxiosPromise<TAPIOrders>;
};

export const postOrder = async (order : TIngredients) : Promise<TAPIOrderResponse> => {
  const requestBody : TAPIOrderRequest = { ingredients: order };
  const options : RequestInit = {
    ...defaultOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.get()}`,
    },
    body: JSON.stringify(requestBody),
  };
  try {
    const ordered = await fetch(endpoint(BACKEND_ROUTES.orders), options);
    if (ordered.ok) {
      return await (ordered.json() as Promise<TAPIOrderResponse>);
    }
    return await Promise.reject(ordered);
  } catch (err) {
    return Promise.reject(err);
  }
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
    return await user.json();
  } catch (err) {
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
  try {
    const refresh = await fetch(endpoint(BACKEND_ROUTES.refresh), options);
    const res = await refresh.json();
    return res;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const login = async (email, password) => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  try {
    const loginResponse = await fetch(endpoint(BACKEND_ROUTES.login), options);
    return await loginResponse.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const logout = async () => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token.get() }),
  };
  try {
    const logoutResponse = await fetch(endpoint(BACKEND_ROUTES.logout), options);
    return await logoutResponse.json();
  } catch (err) {
    return Promise.reject(err);
  }
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

  try {
    const register = await fetch(endpoint(BACKEND_ROUTES.register), options);
    if (register.ok) {
      return await register.json();
    }
    return await Promise.reject(register);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const sendPasswordCode = async (email) => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  };
  try {
    const forgot = await fetch(endpoint(BACKEND_ROUTES.forgot), options);
    if (forgot.ok) {
      return await forgot.json();
    }
    return await Promise.reject(forgot);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const resetPassword = async (code, password) => {
  const options = {
    ...defaultOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: code, password }),
  };
  try {
    const reset = fetch(endpoint(BACKEND_ROUTES.reset), options);

    if (reset.ok) {
      return reset.json();
    }
    return await Promise.reject(reset);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const patchUser = async (name = null, email = null, password = null) => {
  const options = {
    ...defaultOptions,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.get()}`,
    },
    body: JSON.stringify(makeUser(name, email, password)),
  };
  try {
    const user = await fetch(endpoint(BACKEND_ROUTES.user), options);
    return await user.json();
  } catch (err) {
    return Promise.reject(err);
  }
};
