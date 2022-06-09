import {
  PUBLIC_FEED_CLOSE,
  PUBLIC_FEED_MESSAGE,
  PUBLIC_FEED_OPEN,
  PUBLIC_FEED_START,
  PUBLIC_FEED_STOP,
  PUBLIC_FEED_CONNECT_REQUESTED,
  PUBLIC_FEED_DISCONNECT_REQUESTED,
} from '../actions';

import {
  TDiscardPublicFeedAction,
  TRequestPublicFeedAction,
  TSetPublicFeedClosedAction,
  TSetPublicFeedOpenedAction,
  TStartPublicFeedAction,
  TStopPublicFeedAction,
} from './actions.types';

import { TWSData } from '../../types/websocket.types';

export const startPublicFeed = () : TStartPublicFeedAction => (
  {
    type: PUBLIC_FEED_START,
  });
export const stopPublicFeed = () : TStopPublicFeedAction => (
  {
    type: PUBLIC_FEED_STOP,
  }
);
export const setPublicFeedOpened = () : TSetPublicFeedOpenedAction => (
  {
    type: PUBLIC_FEED_OPEN,
  }
);
export const setPublicFeedClosed = () : TSetPublicFeedClosedAction => (
  {
    type: PUBLIC_FEED_CLOSE,
  }
);
export const onPublicFeedMessage = (data : TWSData) => (
  {
    type: PUBLIC_FEED_MESSAGE,
    payload: data,
  });
export const requestPublicFeed = () : TRequestPublicFeedAction => (
  {
    type: PUBLIC_FEED_CONNECT_REQUESTED,
  }
);
export const discardPublicFeed = () : TDiscardPublicFeedAction => (
  {
    type: PUBLIC_FEED_DISCONNECT_REQUESTED,
  }
);
