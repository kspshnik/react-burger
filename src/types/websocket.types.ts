import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { PRIVATE, PUBLIC } from '../constants';
import { TOrdersData } from './types';
import {
  PRIVATE_FEED_START, PRIVATE_FEED_STOP, PUBLIC_FEED_START, PUBLIC_FEED_STOP,
} from '../services/store/feed-slice';

export type TWebSocket = WebSocket | null;

export type TFeedType = typeof PUBLIC | typeof PRIVATE;

export type TWSActions = {
  wsStart: typeof PUBLIC_FEED_START | typeof PRIVATE_FEED_START,
  wsStop: typeof PUBLIC_FEED_STOP | typeof PRIVATE_FEED_STOP,
  connectRequest: ActionCreatorWithoutPayload,
  disconnectRequest: ActionCreatorWithoutPayload,
  onOpen: ActionCreatorWithoutPayload,
  onClose: ActionCreatorWithoutPayload,
  onError: ActionCreatorWithPayload<string>,
  onMessage: ActionCreatorWithPayload<TOrdersData>,
};
