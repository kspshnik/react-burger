import {
  PUBLIC_FEED_CLOSE,
  PUBLIC_FEED_MESSAGE,
  PUBLIC_FEED_OPEN,
  PUBLIC_FEED_START,
  PUBLIC_FEED_STOP,
} from '../actions';

export const startPublicFeed = () => ({ type: PUBLIC_FEED_START });
export const stopPublicFeed = () => ({ type: PUBLIC_FEED_STOP });
export const setPublicFeedOpened = () => ({ type: PUBLIC_FEED_OPEN });
export const setPublicFeedClosed = () => ({ type: PUBLIC_FEED_CLOSE });
export const onPublicFeedMessage = (data) => ({ type: PUBLIC_FEED_MESSAGE, payload: data });