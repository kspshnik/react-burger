import { Cookies as JsCookie } from 'typescript-cookie';
import axios, {
  AxiosInstance, AxiosPromise, AxiosRequestConfig,
} from 'axios';
import {
  BACKEND_ROUTES, JWT_TOKEN, REFRESH_TOKEN,
} from '../constants';
import {
  TAPIAuthResponseData,
  TAPIAuthUserResponseData,
  TAPIIngredientsResponseData,
  TAPIPostOrderRequestData,
  TAPIOrderResponseData,
  TAPIOrdersResponseData,
  TAPITokenRequestData,
  TAPIUserProfile,
  TAPIUserResponseData,
  TAPIBasicResponseData,
  TAPICodeRequestData,
  TAPIResetRequestData,
  TAPIPatchUserResponseData,
} from '../types/api.types';
import { TIngredients, TLoginRequestData } from '../types/types';
import { makeUser } from './helpers';

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
  get: () : string => localStorage.getItem(REFRESH_TOKEN) ?? '',
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
    return {
      ...requestConfig,
      headers: {
        ...defaultRequestConfig.headers,
        ...requestConfig.headers,
        Authorization: `Bearer ${jwt.get()}`,
      },
    };
  }
  return requestConfig;
};

const burgerAPI : AxiosInstance = axios.create(defaultRequestConfig);

export const fetchIngredients = () : AxiosPromise<TAPIIngredientsResponseData> => {
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.ingredients,
    method: 'get',
  };
  return burgerAPI(requestConfig) as AxiosPromise<TAPIIngredientsResponseData>;
};

export const fetchOrder = (number: number) : AxiosPromise<TAPIOrdersResponseData> => {
  const requestConfig : AxiosRequestConfig = {
    url: `${BACKEND_ROUTES.orders}/${number}`,
    method: 'get',
  };
  return burgerAPI(requestConfig) as AxiosPromise<TAPIOrdersResponseData>;
};

export const postOrder = (order : TIngredients) : AxiosPromise<TAPIOrderResponseData> => {
  const postOrderRequestData : TAPIPostOrderRequestData = {
    ingredients: order,
  };
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.orders,
    method: 'post',
    data: postOrderRequestData,
  };
  return burgerAPI(injectBearerToken(requestConfig)) as AxiosPromise<TAPIOrderResponseData>;
};

export const fetchUser = () : AxiosPromise<TAPIAuthUserResponseData> => {
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.user,
    method: 'get',
  };
  return burgerAPI(injectBearerToken(requestConfig)) as AxiosPromise<TAPIAuthUserResponseData>;
};

export const fetchToken = () : AxiosPromise<TAPIAuthResponseData> => {
  const refreshRequestData : TAPITokenRequestData = {
    token: token.get(),
  };
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.refresh,
    method: 'post',
    data: refreshRequestData,
  };
  return burgerAPI(injectBearerToken(requestConfig)) as AxiosPromise<TAPIAuthResponseData>;
};

export const login = (loginData : TLoginRequestData) : AxiosPromise<TAPIUserResponseData> => {
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.login,
    method: 'post',
    data: loginData,
  };
  return burgerAPI(requestConfig) as AxiosPromise<TAPIUserResponseData>;
};

export const logout = () : AxiosPromise<TAPIBasicResponseData> => {
  const logoutData : TAPITokenRequestData = {
    token: token.get(),
  };
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.logout,
    method: 'post',
    data: logoutData,
  };
  return burgerAPI(injectBearerToken(requestConfig)) as AxiosPromise<TAPIBasicResponseData>;
};

export const registerUser = (
  registerData : TAPIUserProfile,
) : AxiosPromise <TAPIUserResponseData> => {
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.register,
    method: 'post',
    data: registerData,
  };
  return burgerAPI(requestConfig) as AxiosPromise <TAPIUserResponseData>;
};

export const sendPasswordCode = (email : string) : AxiosPromise<TAPIBasicResponseData> => {
  const requestCodeData : TAPICodeRequestData = {
    email,
  };
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.forgot,
    method: 'post',
    data: requestCodeData,
  };
  return burgerAPI(requestConfig) as AxiosPromise<TAPIBasicResponseData>;
};

export const resetPassword = (
  resetData : TAPIResetRequestData,
) : AxiosPromise<TAPIBasicResponseData> => {
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.reset,
    method: 'post',
    data: resetData,
  };
  return burgerAPI(requestConfig) as AxiosPromise<TAPIBasicResponseData>;
};

export const patchUser = (
  profileData: TAPIUserProfile,
) : AxiosPromise<TAPIPatchUserResponseData> => {
  const patchUserData : TAPIUserProfile = makeUser(profileData);
  const requestConfig : AxiosRequestConfig = {
    url: BACKEND_ROUTES.user,
    method: 'patch',
    data: patchUserData,
  };
  return burgerAPI(injectBearerToken(requestConfig)) as AxiosPromise<TAPIPatchUserResponseData>;
};
