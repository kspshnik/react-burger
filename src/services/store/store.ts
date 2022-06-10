import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import apiReducer from './api-slice';
import formsReducer from './forms-slice';
import ingredientsReducer from './ingredients-slice';
import feedReducer from './feed-slice';
import ordersReducer from './orders-slice';
import userReducer from './user-slice';

import {
  PRIVATE_FEED_START,
  PRIVATE_FEED_STOP,
  PUBLIC_FEED_START,
  PUBLIC_FEED_STOP,
  requestPublicFeed,
  requestPrivateFeed,
  discardPrivateFeed,
  discardPublicFeed,
  onPrivateFeedMessage,
  onPublicFeedMessage,
  setPublicFeedOpened,
  setPublicFeedClosed,
  setPrivateFeedClosed,
  setPrivateFeedOpened,
  wsError,
} from './index';

import socketMiddleware from './websocket-middleware';

import { BACKEND_ROUTES, PRIVATE, PUBLIC } from '../../constants';

const publicFeedUrl = `${BACKEND_ROUTES.baseWS}${BACKEND_ROUTES.publicFeed}`;
const publicFeedActions = {
  wsStart: PUBLIC_FEED_START,
  wsStop: PUBLIC_FEED_STOP,
  connectRequest: requestPublicFeed,
  disconnectRequest: discardPublicFeed,
  onOpen: setPublicFeedOpened,
  onClose: setPublicFeedClosed,
  onError: wsError,
  onMessage: onPublicFeedMessage,
};

const privateFeedUrl = `${BACKEND_ROUTES.baseWS}${BACKEND_ROUTES.privateFeed}`;
const privateFeedActions = {
  wsStart: PRIVATE_FEED_START,
  wsStop: PRIVATE_FEED_STOP,
  connectRequest: requestPrivateFeed,
  disconnectRequest: discardPrivateFeed,
  onOpen: setPrivateFeedOpened,
  onClose: setPrivateFeedClosed,
  onError: wsError,
  onMessage: onPrivateFeedMessage,
};

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    orders: ordersReducer,
    api: apiReducer,
    forms: formsReducer,
    user: userReducer,
    feed: feedReducer,
  },
  middleware: [
    thunk,
    socketMiddleware(publicFeedUrl, publicFeedActions, PUBLIC),
    socketMiddleware(privateFeedUrl, privateFeedActions, PRIVATE)],
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
