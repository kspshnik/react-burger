import { configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, combineReducers } from 'redux';

import apiReducer, { wsError } from './api-slice';
import formsReducer from './forms-slice';
import ingredientsReducer from './ingredients-slice';

import feedReducer, {
  PRIVATE_FEED_START,
  PRIVATE_FEED_STOP,
  PUBLIC_FEED_START,
  PUBLIC_FEED_STOP,
} from './feed-slice';

import ordersReducer from './orders-slice';
import userReducer from './user-slice';

import {
  discardPublicFeed,
  onPublicFeedMessage,
  requestPublicFeed,
  setPublicFeedClosed,
  setPublicFeedOpened,
} from './public-feed-sub-slice';

import {
  discardPrivateFeed,
  onPrivateFeedMessage,
  requestPrivateFeed,
  setPrivateFeedClosed,
  setPrivateFeedOpened,
} from './private-feed-sub-slice';

// Рецепт, указанный на сайте Redux: https://redux.js.org/usage/usage-with-typescript#type-checking-middleware
// не сработал, по-прежнему выдаёт ошибку, хотя сделал ровно как написали:
// определил RootState от rootReducer, а не от getStore()
// eslint-disable-next-line import/no-cycle
import socketMiddleware from './websocket-middleware';

import { BACKEND_ROUTES, PRIVATE, PUBLIC } from '../../constants';
import { TWSActions } from '../../types/websocket.types';

const publicFeedUrl = `${BACKEND_ROUTES.baseWS}${BACKEND_ROUTES.publicFeed}`;
const publicFeedActions : TWSActions = {
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
const privateFeedActions : TWSActions = {
  wsStart: PRIVATE_FEED_START,
  wsStop: PRIVATE_FEED_STOP,
  connectRequest: requestPrivateFeed,
  disconnectRequest: discardPrivateFeed,
  onOpen: setPrivateFeedOpened,
  onClose: setPrivateFeedClosed,
  onError: wsError,
  onMessage: onPrivateFeedMessage,
};
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  orders: ordersReducer,
  api: apiReducer,
  forms: formsReducer,
  user: userReducer,
  feed: feedReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [
    thunk,
    socketMiddleware(publicFeedUrl, publicFeedActions, PUBLIC),
    socketMiddleware(privateFeedUrl, privateFeedActions, PRIVATE)],
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<TReturn = void> = ActionCreator<
ThunkAction<TReturn, RootState, unknown, Action>
>;

export default store;
