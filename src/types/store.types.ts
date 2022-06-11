import {
  TAllIngredients,
  TIngredient,
  TIngredients,
  TOrder,
  TOrderRecord,
  TOrderRecords,
  TOrders,
} from './types';
import {
  discardPublicFeed, onPrivateFeedMessage, onPublicFeedMessage, PRIVATE_FEED_START, PRIVATE_FEED_STOP,
  PUBLIC_FEED_START,
  PUBLIC_FEED_STOP, requestPrivateFeed,
  requestPublicFeed, setPublicFeedClosed,
  setPublicFeedOpened, wsError
} from "../services/store";
import {ActionCreator} from "redux";
import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {TWSData} from "./websocket.types";

export type TIngredientsState = {
  all: TAllIngredients | null,
  selected: TIngredient | null,
};

export type TOrderSelectState = {
  order: TOrder | null,
};

export type TOrderState = {
  bun: TIngredient | null,
  choice: TIngredients | [],
  accepted: TOrderRecord | null,
  past: TOrderRecords | [],
};

export type TFeedState = {
  orders: TOrders | null,
  total: number,
  totalToday: number,
  isOpen: boolean,
  requestedAt: number,
  discardedAt: number,
};

export type TUserDataFormState = {
  name: string,
  email: string,
  password: string,
};

export type TLoginFormState = {
  email: string,
  password: string,
};

export type TResetFormState = {
  code: string,
  password: string,
};

export type TUserState = {
  name: string,
  email: string,
  loggedIn: boolean,
};

export type TForgotFormState = {
  email: string,
};

export type TAPIState = {
  isIngredientsLoading: boolean,
  isOrderLoading: boolean,
  isOrderSent: boolean,
  isOrderNotFound: boolean,
  errorMessage: string,
  successMessage: string,
};

export type TWSActions = {
  wsStart: typeof PUBLIC_FEED_START | typeof PRIVATE_FEED_START,
  wsStop: typeof PUBLIC_FEED_STOP | typeof PRIVATE_FEED_STOP,
  connectRequest: ActionCreatorWithoutPayload<string>,
  disconnectRequest: ActionCreatorWithoutPayload<string>,
  onOpen: ActionCreatorWithoutPayload<string>,
  onClose: ActionCreatorWithoutPayload<string>,
  onError: ActionCreatorWithPayload<string, string>,
  onMessage: ActionCreatorWithPayload<TWSData, string>,
};
