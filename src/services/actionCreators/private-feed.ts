import {
  PRIVATE_FEED_CLOSE,
  PRIVATE_FEED_MESSAGE,
  PRIVATE_FEED_OPEN,
  PRIVATE_FEED_START,
  PRIVATE_FEED_STOP,
  PRIVATE_FEED_CONNECT_REQUESTED,
  PRIVATE_FEED_DISCONNECT_REQUESTED,
} from '../actions';

import {
  TDiscardPrivateFeedAction,
  TOnPrivateFeedMessageAction,
  TRequestPrivateFeedAction,
  TSetPrivateFeedClosedAction,
  TSetPrivateFeedOpenedAction,
  TStartPrivateFeedAction,
  TStopPrivateFeedAction,
} from './actions.types';

import { TWSData } from '../../types/websocket.types';

export const startPrivateFeed = () : TStartPrivateFeedAction => (
  {
    type: PRIVATE_FEED_START,
  }
);
export const stopPrivateFeed = () : TStopPrivateFeedAction => (
  {
    type: PRIVATE_FEED_STOP,
  }
);
export const setPrivateFeedOpened = () : TSetPrivateFeedOpenedAction => (
  {
    type: PRIVATE_FEED_OPEN,
  }
);
export const setPrivateFeedClosed = () : TSetPrivateFeedClosedAction => (
  {
    type: PRIVATE_FEED_CLOSE,
  }
);
export const onPrivateFeedMessage = (data : TWSData) : TOnPrivateFeedMessageAction => (
  {
    type: PRIVATE_FEED_MESSAGE,
    payload: data,
  }
);
export const requestPrivateFeed = () : TRequestPrivateFeedAction => (
  {
    type: PRIVATE_FEED_CONNECT_REQUESTED,
  }
);
export const discardPrivateFeed = () : TDiscardPrivateFeedAction => (
  {
    type: PRIVATE_FEED_DISCONNECT_REQUESTED,
  }
);
