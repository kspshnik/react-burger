import {
  PRIVATE_FEED_CLOSE,
  PRIVATE_FEED_MESSAGE,
  PRIVATE_FEED_OPEN,
  PRIVATE_FEED_START,
  PRIVATE_FEED_STOP,
} from '../actions';

export const startPrivateFeed = () => ({ type: PRIVATE_FEED_START });
export const stopPrivateFeed = () => ({ type: PRIVATE_FEED_STOP });
export const setPrivateFeedOpened = () => ({ type: PRIVATE_FEED_OPEN });
export const setPrivateFeedClosed = () => ({ type: PRIVATE_FEED_CLOSE });
export const onPrivateFeedMessage = (data) => ({ type: PRIVATE_FEED_MESSAGE, payload: data });